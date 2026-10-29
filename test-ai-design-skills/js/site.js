(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const T = (key) => (window.Tanriverdi && window.Tanriverdi.t(key)) || key;
  const Tfill = (key, map) => {
    const template = T(key);
    return window.Tanriverdi ? window.Tanriverdi.fill(template, map) : template;
  };
  document.querySelectorAll(".frame img").forEach((img) => {
    const done = () => img.classList.add("is-loaded");
    if (img.complete && img.naturalWidth > 0) done();
    else {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    }
  });

  const reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach((node) => node.classList.add("is-in"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );
    reveals.forEach((node) => observer.observe(node));
  }

  let words = [];
  const paintWords = () => {
    const line = window.innerHeight * 0.64;
    words.forEach((word) => {
      if (word.classList.contains("is-on")) return;
      if (word.getBoundingClientRect().top < line) word.classList.add("is-on");
    });
  };
  const collectWords = () => {
    words = Array.from(document.querySelectorAll(".word"));
    const tagline = document.querySelector(".tagline");
    if (!words.length) return;
    if (reduce) {
      words.forEach((word) => word.classList.add("is-on"));
      return;
    }
    if (tagline) tagline.classList.add("is-ready");
    paintWords();
  };
  if (!reduce) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
          paintWords();
          ticking = false;
        });
      },
      { passive: true }
    );
  }
  collectWords();
  document.addEventListener("langchange", collectWords);

  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".mobile-panel");
  if (toggle && panel) {
    const setMenu = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? T("menuClose") : T("menuOpen"));
      panel.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", String(!open));
      if (open) panel.removeAttribute("inert");
      else panel.setAttribute("inert", "");
      document.body.classList.toggle("menu-open", open);
    };

    toggle.addEventListener("click", () => {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960 && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
      }
    });

    const syncMenuLabel = () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", T(open ? "menuClose" : "menuOpen"));
    };
    syncMenuLabel();
    document.addEventListener("langchange", syncMenuLabel);
  }

  const form = document.querySelector("#talep-form");
  if (!form) return;

  const success = document.querySelector("#talep-sonuc");
  const detail = document.querySelector("#talep-detay");
  const submit = form.querySelector("[type='submit']");
  const submitLabel = submit.querySelector(".btn-label");
  const reset = document.querySelector("#yeni-talep");

  const showError = (name, key) => {
    const input = form.elements[name];
    const error = document.getElementById(name + "-hata");
    if (!error) return;
    error.dataset.errKey = key;
    error.textContent = T(key);
    error.hidden = false;
    if (input) {
      input.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", error.id);
    }
  };

  const clearErrors = () => {
    form.querySelectorAll(".error").forEach((error) => {
      error.hidden = true;
      error.textContent = "";
      delete error.dataset.errKey;
    });
    form.querySelectorAll(".is-invalid").forEach((input) => {
      input.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const data = new FormData(form);
    const ad = String(data.get("ad") || "").trim();
    const firma = String(data.get("firma") || "").trim();
    const mail = String(data.get("mail") || "").trim();
    const telefon = String(data.get("telefon") || "").trim();
    const mesaj = String(data.get("mesaj") || "").trim();
    const kvkk = form.elements.kvkk.checked;
    let first = null;

    const fail = (name, message) => {
      showError(name, message);
      if (!first) first = form.elements[name];
    };

    if (!ad) fail("ad", "errNameEmpty");
    else if (ad.length < 3) fail("ad", "errNameShort");

    if (!firma) fail("firma", "errCompanyEmpty");
    else if (firma.length < 2) fail("firma", "errCompanyShort");

    if (!mail) fail("mail", "errMailEmpty");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) fail("mail", "errMailBad");

    if (telefon && telefon.replace(/\D/g, "").length < 10) fail("telefon", "errPhoneBad");

    if (mesaj.length > 1000) fail("mesaj", "errNoteLong");

    if (!kvkk) fail("kvkk", "errConsent");

    if (first) {
      first.focus();
      return;
    }

    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    submitLabel.textContent = T("sending");

    window.setTimeout(() => {
      const record = { ad, firma, mail, telefon, mesaj, zaman: new Date().toISOString() };
      let stored = true;
      try {
        localStorage.setItem("filora-son-not", JSON.stringify(record));
      } catch (error) {
        stored = false;
      }

      lastResult = { ad, firma, stored };
      renderSuccess();

      form.hidden = true;
      success.hidden = false;
      submit.disabled = false;
      submit.removeAttribute("aria-busy");
      submitLabel.textContent = T("cta");
      success.querySelector("h3").focus();
    }, 600);
  });

  let lastResult = null;
  const renderSuccess = () => {
    if (!lastResult) return;
    detail.textContent = Tfill(lastResult.stored ? "successStored" : "successUnstored", {
      name: lastResult.ad,
      company: lastResult.firma
    });
  };

  document.addEventListener("langchange", () => {
    form.querySelectorAll(".error").forEach((error) => {
      if (error.hidden || !error.dataset.errKey) return;
      error.textContent = T(error.dataset.errKey);
    });
    if (submit.getAttribute("aria-busy") === "true") submitLabel.textContent = T("sending");
    renderSuccess();
  });

  reset.addEventListener("click", () => {
    try {
      localStorage.removeItem("filora-son-not");
    } catch (error) {
      /* Depo kapalıysa form yine de yeniden açılır. */
    }
    lastResult = null;
    form.reset();
    clearErrors();
    success.hidden = true;
    form.hidden = false;
    form.elements.ad.focus();
  });
})();
