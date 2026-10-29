(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  const words = Array.from(document.querySelectorAll(".word"));
  const tagline = document.querySelector(".tagline");
  if (tagline && words.length) {
    if (reduce) {
      words.forEach((word) => word.classList.add("is-on"));
    } else {
      tagline.classList.add("is-armed");
      let lastOn = 0;
      let queued = false;
      const tick = (now) => {
        queued = false;
        const line = window.innerHeight * 0.62;
        for (const word of words) {
          if (word.classList.contains("is-on")) continue;
          if (word.getBoundingClientRect().top >= line) break;
          if (now - lastOn < 80) break;
          word.classList.add("is-on");
          lastOn = now;
          break;
        }
        const pending = words.some(
          (word) => !word.classList.contains("is-on") && word.getBoundingClientRect().top < line
        );
        if (pending) window.requestAnimationFrame(tick);
      };
      const requestTick = () => {
        if (queued) return;
        queued = true;
        window.requestAnimationFrame(tick);
      };
      requestTick();
      window.addEventListener("scroll", requestTick, { passive: true });
      window.addEventListener("resize", requestTick);
    }
  }

  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".mobile-panel");
  if (toggle && panel) {
    const setMenu = (open, returnFocus) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      panel.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", String(!open));
      panel.inert = !open;
      document.body.classList.toggle("nav-open", open);
      if (open) {
        const first = panel.querySelector("a");
        if (first) first.focus();
      } else if (returnFocus) {
        toggle.focus();
      }
    };

    toggle.addEventListener("click", () => {
      setMenu(toggle.getAttribute("aria-expanded") !== "true", true);
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false, false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("is-open")) setMenu(false, true);
    });

    const desk = window.matchMedia("(min-width: 800px)");
    desk.addEventListener("change", () => {
      if (desk.matches) setMenu(false, false);
    });
  }

  const form = document.querySelector(".note-form");
  const confirm = document.querySelector(".confirm");
  if (!form || !confirm) return;

  const storageKey = "silkroute-note";
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const formatDay = (iso) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const readNote = () => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || typeof data.company !== "string" || typeof data.trade !== "string") return null;
      return data;
    } catch (err) {
      return null;
    }
  };

  const fieldBox = (id) => document.getElementById(id).closest(".field");

  const setField = (id, message) => {
    const box = fieldBox(id);
    const control = document.getElementById(id);
    const error = box.querySelector(".error");
    const hint = box.querySelector(".hint");
    if (message) {
      box.classList.add("is-bad");
      error.textContent = message;
      control.setAttribute("aria-invalid", "true");
      control.setAttribute("aria-describedby", error.id);
      return false;
    }
    box.classList.remove("is-bad");
    error.textContent = "";
    control.removeAttribute("aria-invalid");
    if (hint) control.setAttribute("aria-describedby", hint.id);
    else control.removeAttribute("aria-describedby");
    return true;
  };

  form.querySelectorAll("input, select, textarea").forEach((control) => {
    control.addEventListener("input", () => setField(control.id, ""));
    control.addEventListener("change", () => setField(control.id, ""));
  });

  const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

  const validate = () => {
    const name = document.getElementById("who").value.trim();
    const company = document.getElementById("buyer").value.trim();
    const email = document.getElementById("mail").value.trim();
    const trade = document.getElementById("trade").value.trim();
    const goods = document.getElementById("goods").value.trim();
    let firstBad = null;

    const check = (id, message) => {
      const ok = setField(id, message);
      if (!ok && !firstBad) firstBad = document.getElementById(id);
      return ok;
    };

    check("who", name ? "" : "Add your name. The field is empty.");
    check("buyer", company ? "" : "Add the company. The field is empty.");
    check("mail", email ? (emailOk(email) ? "" : "That email is not complete. Use a name, an @ sign, and a domain.") : "Add a work email. The field is empty.");
    check("trade", trade ? "" : "Select a trade.");
    check("goods", goods ? "" : "Describe the goods. The field is empty.");

    if (firstBad) firstBad.focus();
    if (firstBad) return null;
    return { name, company, email, trade, goods, at: new Date().toISOString() };
  };

  const showKept = (data) => {
    form.hidden = true;
    confirm.hidden = false;
    confirm.setAttribute("aria-busy", "false");
    confirm.replaceChildren();

    const title = document.createElement("h3");
    title.textContent = "Note kept in this tab";

    const body = document.createElement("p");
    body.textContent = `${data.company} asked about ${data.trade}. Silkroute has not received it.`;

    const when = document.createElement("p");
    when.className = "hint";
    const day = formatDay(data.at);
    when.textContent = day
      ? `Kept on ${day}. Close the tab and it is gone.`
      : "Close the tab and it is gone.";

    const again = document.createElement("button");
    again.type = "button";
    again.className = "btn";
    again.textContent = "Write another note";
    again.addEventListener("click", () => {
      sessionStorage.removeItem(storageKey);
      confirm.hidden = true;
      confirm.replaceChildren();
      form.reset();
      form.hidden = false;
      document.getElementById("who").focus();
    });

    confirm.append(title, body, when, again);
  };

  const showLoading = () => {
    form.hidden = true;
    confirm.hidden = false;
    confirm.setAttribute("aria-busy", "true");
    confirm.replaceChildren();
    const bones = document.createElement("div");
    bones.className = "skeleton";
    bones.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 3; i += 1) bones.append(document.createElement("span"));
    const live = document.createElement("p");
    live.className = "sr";
    live.textContent = "Keeping the note in this tab.";
    confirm.append(bones, live);
  };

  const existing = readNote();
  if (existing) showKept(existing);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = validate();
    if (!data) return;
    showLoading();
    window.setTimeout(() => {
      sessionStorage.setItem(storageKey, JSON.stringify(data));
      showKept(data);
    }, reduce ? 0 : 700);
  });
})();
