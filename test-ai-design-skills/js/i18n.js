(function () {
  const taglines = {
    en: [
      ["Quality", "dress,", "within", "reach."],
      ["In", "every", "part", "of", "the", "day."]
    ],
    tr: [
      ["Kaliteli", "şık", "moda,"],
      ["günün", "her", "anında."]
    ]
  };

  const dict = {
    en: {
      langLabel: "Language",
      skip: "Skip to content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navWeaving: "Scarves",
      navBenefits: "The firm",
      navProcess: "Values",
      navProof: "Proof",
      navQuestions: "Questions",
      navRequest: "Note",
      navHome: "Home",
      navPrivacy: "Privacy",
      navTerms: "Terms",
      navMissing: "Missing",
      navSample: "Note form",
      cta: "Send a note",
      back: "Back to home",
      docTitleHome: "FILORA Group | Scarf weaving in Bursa",
      docDescHome: "FILORA Group weaves scarves in a 9,600 m² plant in Bursa. 640 people. Head office in Eyüp since 2011. Send a note.",
      docTitlePrivacy: "Privacy | FILORA Group",
      docDescPrivacy: "Where a personal note stays on this FILORA Group page.",
      docTitleTerms: "Terms | FILORA Group",
      docDescTerms: "What this FILORA Group page says, and what a note does not do.",
      docTitleMissing: "Page not found | FILORA Group",
      docDescMissing: "This address is not on the FILORA Group page.",
      navSections: "Page sections",
      navPage: "Page",
      navFooter: "Footer pages",
      heroPlace: "Bursa",
      hero1: "For the conservative woman",
      hero2: "dress within reach.",
      heroLede: "FILORA Group weaves scarves in a 9,600 m² plant in Bursa. 640 people work in the company. The head office has been in Eyüp since 2011.",
      proof: "In 2008 FILORA sold more scarves than any other firm in Turkey.",
      buyersLabel: "Places",
      altLoom: "Side view of an industrial weaving loom, with metal gears and a roll of cloth.",
      ticketLabel: "FILORA plant card",
      ticketRoll: "Plant",
      ticketWidth: "Floor",
      ticketShade: "Team",
      ticketWeight: "Office",
      ticketRollValue: "Bursa",
      ticketWidthValue: "9,600 m²",
      ticketShadeValue: "640",
      ticketWeightValue: "Eyüp",
      caption: "Loom photograph: Bergstrand Consultancy, Unsplash.",
      taglineLabel: "Line",
      problemEye: "Mission",
      problemTitle: "Quality, modern, and elegant fashion, within reach.",
      problemBody: "The mission is to make that fashion reachable for the conservative woman, in every part of social life.",
      benefitEye: "The firm",
      benefitTitle: "What the company holds in one place.",
      b1t: "A scarf plant of 9,600 m².",
      b1p: "Scarf weaving runs in Bursa, in a plant fitted for that work.",
      b2t: "640 people on one team.",
      b2p: "The plant and the head office belong to the same company.",
      b3t: "Head office in Eyüp since 2011.",
      b3p: "FILORA has kept this centre from 2011 through today.",
      b4t: "Training stays inside the firm.",
      b4p: "People study communication, customer focus, and commercial thinking. Future managers study leadership, teamwork, and how a group is organised.",
      processEye: "Values",
      processTitle: "Seven lines the company keeps.",
      s1t: "We are trustworthy.",
      s1p: "We know our social duties.",
      s2t: "We have a team spirit.",
      s2p: "We lead.",
      s3t: "We focus on the customer.",
      s3p: "We look for new work. We like to add value.",
      millEye: "Company",
      millTitle: "Scarves in Bursa, centre in Eyüp.",
      millBody: "FILORA Group weaves scarves in a plant in Bursa with 9,600 m² of floor. 640 people work in the company. The head office has stood in Eyüp since 2011. In 2008 FILORA sold more scarves than any other firm in Turkey. Staff study communication, customer focus, and commercial thinking. Future managers study leadership, teamwork, and how a group is organised.",
      statFloorValue: "9,600 m²",
      statLooms: "scarf plant in Bursa",
      statMetresValue: "640",
      statMetres: "people",
      statDaysValue: "2008",
      statDays: "most scarves in Turkey",
      statShadeValue: "2011",
      statShade: "head office in Eyüp",
      q1: "Make quality, modern, and elegant fashion reachable for the conservative woman, in every part of social life.",
      q1p: "Mission",
      q2: "Be the best known and highest quality conservative clothing brand in the world.",
      q2p: "Vision",
      q3: "People study communication, customer focus, and commercial thinking. Future managers study leadership, teamwork, and how a group is organised.",
      q3p: "Training",
      faqEye: "Questions",
      faqTitle: "Asked about the company.",
      faq1q: "What does FILORA weave?",
      faq1a: "Scarves. The plant is in Bursa and has 9,600 m² of floor.",
      faq2q: "Where is the head office?",
      faq2a: "In Eyüp. FILORA has kept this centre since 2011.",
      faq3q: "How many people work at FILORA?",
      faq3a: "640 people work in the company.",
      faq4q: "What happened in 2008?",
      faq4a: "FILORA sold more scarves than any other firm in Turkey.",
      faq5q: "What is the mission?",
      faq5a: "Make quality, modern, and elegant fashion reachable for the conservative woman, in every part of social life.",
      faq6q: "What is the vision?",
      faq6a: "Be the best known and highest quality conservative clothing brand in the world.",
      faq7q: "How does training work?",
      faq7a: "Staff study communication, customer focus, and commercial thinking. Future managers study leadership, teamwork, and how a group is organised.",
      faq8q: "Does this note reach FILORA?",
      faq8a: "No. The note stays in this browser. It is not sent to the company.",
      requestEye: "Note",
      requestLede: "Write who you are and what you need. The note stays in this browser. It is not sent to FILORA.",
      noscript: "The form check needs a script. If it is off, the note cannot leave this page.",
      labelName: "Full name",
      labelCompany: "Company",
      labelMail: "Mail",
      labelPhone: "Phone",
      labelUse: "Use",
      labelMetres: "Metres",
      labelNote: "Note",
      usePlaceholder: "Choose a use",
      useShirt: "Shirting poplin",
      useTwill: "Workwear twill",
      useCanvas: "Home textile canvas",
      notePlaceholder: "A note about scarf cloth.",
      consent: "I have read the privacy note. I accept that this page keeps my note in the browser.",
      privacyLink: "Open the privacy note",
      successTitle: "This note is kept in this browser.",
      newRequest: "Write another note",
      sending: "Sending",
      successStored: "{name}, {company}. The note stays in this browser. It is not sent to FILORA.",
      successUnstored: "{name}, {company}. The note checked out. It could not be written to browser storage. It was not sent on.",
      errNameEmpty: "Name is missing. Write who the note is from.",
      errNameShort: "The name is too short. Write your given name and surname.",
      errCompanyEmpty: "Company is missing. Write the firm the note is for.",
      errCompanyShort: "The company name is too short. Write the trading name.",
      errMailEmpty: "Mail is missing. Write an address that can be read.",
      errMailBad: "This mail format is not valid. Write it as name@mail.com.",
      errPhoneBad: "The phone looks short. Write a full number, or leave the field empty.",
      errNoteLong: "The note is over 1000 characters. Shorten it and write it again.",
      errConsent: "Consent is missing. Accept the privacy note so the page can keep the note.",
      pagesEye: "Pages",
      disclaimer: "The note stays in this browser. It is not sent to FILORA Group.",
      credits: "Icons: Phosphor. Type: Manrope and Geist Mono.",
      disclaimerShort: "The note stays in this browser. It is not sent to FILORA Group.",
      footerMill: "Scarf plant, Bursa, 9,600 m²",
      footerOffice: "Head office, Eyüp, since 2011",
      privacyH1: "How personal notes stay",
      privacyLede: "This page keeps a note in the browser. It does not send that note to FILORA Group.",
      privacyH2a: "Which fields exist",
      privacyPa: "The form asks for name, company, mail, phone, and a note. Phone and note are optional.",
      privacyH2b: "Where it goes",
      privacyPb: "The note is not sent to a server. The latest note stays only in your browser storage. Writing another note deletes the previous one. You can also clear it in the browser settings.",
      privacyH2c: "Cookies",
      privacyPc: "We do not set a required cookie or an advertising cookie. Browser storage is not a cookie. It stays only on your device.",
      privacyH2d: "No inbox on this page",
      privacyPd: "This page does not publish a phone number or a mail inbox. The way to write is the note form, and that note stays on your device.",
      termsH1: "What this page says",
      termsLede: "A note on this page is not an order. It stays in the browser and is not sent to FILORA Group.",
      termsH2a: "Scarves",
      termsPa: "FILORA Group weaves scarves in a plant in Bursa with 9,600 m² of floor.",
      termsH2b: "Head office",
      termsPb: "The head office has been in Eyüp since 2011.",
      termsH2c: "Team",
      termsPc: "640 people work in the company.",
      termsH2d: "Training",
      termsPd: "Staff study communication, customer focus, and commercial thinking. Future managers study leadership, teamwork, and how a group is organised.",
      termsH2e: "Mission",
      termsPe: "Make quality, modern, and elegant fashion reachable for the conservative woman, in every part of social life.",
      termsH2f: "Vision",
      termsPf: "Be the best known and highest quality conservative clothing brand in the world.",
      missingH1: "This address is not ours.",
      missingLede: "The link may be old, or it may have been typed short."
    },
    tr: {
      langLabel: "Dil",
      skip: "İçeriğe geç",
      menuOpen: "Menüyü aç",
      menuClose: "Menüyü kapat",
      navWeaving: "Eşarp",
      navBenefits: "Firma",
      navProcess: "Değerler",
      navProof: "Kanıt",
      navQuestions: "Sorular",
      navRequest: "Not",
      navHome: "Ana sayfa",
      navPrivacy: "Gizlilik",
      navTerms: "Koşullar",
      navMissing: "Bulunamadı",
      navSample: "Not formu",
      cta: "Not gönderin",
      back: "Ana sayfaya dön",
      docTitleHome: "FILORA Group | Bursa’da eşarp dokuma",
      docDescHome: "FILORA Group Bursa’da 9.600 m² tesiste eşarp dokur. 640 kişi. Merkez 2011’den beri Eyüp’te. Not gönderin.",
      docTitlePrivacy: "Gizlilik | FILORA Group",
      docDescPrivacy: "FILORA Group sayfasında kişisel notun nerede durduğu.",
      docTitleTerms: "Koşullar | FILORA Group",
      docDescTerms: "FILORA Group sayfasının ne söylediği ve notun ne yapmadığı.",
      docTitleMissing: "Sayfa bulunamadı | FILORA Group",
      docDescMissing: "Bu adres FILORA Group sayfasında yok.",
      navSections: "Sayfa bölümleri",
      navPage: "Sayfa",
      navFooter: "Alt sayfalar",
      heroPlace: "Bursa",
      hero1: "Muhafazakar kadın için",
      hero2: "ulaşılır şık moda.",
      heroLede: "FILORA Group Bursa’da 9.600 m² tesiste eşarp üretir. Şirkette 640 kişi çalışır. Merkez 2011’den beri Eyüp’tedir.",
      proof: "2008 yılında FILORA, Türkiye’de en çok eşarp satan firma oldu.",
      buyersLabel: "Yerler",
      altLoom: "Endüstriyel dokuma tezgahının yan görünüşü, metal dişliler ve kumaş topu.",
      ticketLabel: "FILORA tesis kartı",
      ticketRoll: "Tesis",
      ticketWidth: "Alan",
      ticketShade: "Ekip",
      ticketWeight: "Merkez",
      ticketRollValue: "Bursa",
      ticketWidthValue: "9.600 m²",
      ticketShadeValue: "640",
      ticketWeightValue: "Eyüp",
      caption: "Tezgah görüntüsü: Bergstrand Consultancy, Unsplash.",
      taglineLabel: "Söz",
      problemEye: "Misyon",
      problemTitle: "Kaliteli, modern ve şık moda, ulaşılır olsun.",
      problemBody: "Misyon, sosyal yaşamın her anında olan muhafazakar kadına bu modayı ulaşılır kılmaktır.",
      benefitEye: "Firma",
      benefitTitle: "Şirketin bir arada tuttuğu şeyler.",
      b1t: "Bursa’da 9.600 m² eşarp tesisi.",
      b1p: "Eşarp üretimi Bursa’daki tesiste yürür. Tesis bu iş için donatılmıştır.",
      b2t: "640 kişilik tek ekip.",
      b2p: "Tesis ve merkez aynı şirketin içindedir.",
      b3t: "2011’den beri Eyüp’te merkez.",
      b3p: "FILORA bu merkezi 2011’den bugüne kullanır.",
      b4t: "Eğitim şirketin içinde kalır.",
      b4p: "Çalışanlar iletişim, müşteri odağı ve ticari düşünme üzerine çalışır. Yönetici adayları liderlik, takım çalışması ve organizasyon eğitimi alır.",
      processEye: "Değerler",
      processTitle: "Şirketin tuttuğu yedi satır.",
      s1t: "Güveniriz.",
      s1p: "Sosyal sorumluluklarımızı biliriz.",
      s2t: "Takım ruhluyuz.",
      s2p: "Lideriz.",
      s3t: "Müşteri odaklıyız.",
      s3p: "Yenilikçiyiz. Değer katmayı severiz.",
      millEye: "Firma",
      millTitle: "Bursa’da eşarp, Eyüp’te merkez.",
      millBody: "FILORA Group Bursa’da 9.600 m² kullanım alanlı tesiste eşarp üretir. Şirkette 640 kişi çalışır. Merkez 2011’den beri Eyüp’tedir. 2008’de Türkiye’de en çok eşarp satan firma olmuştur. Çalışanlara iletişim, müşteri odağı ve ticari düşünme eğitimi verilir. Yönetici adayları liderlik, takım çalışması ve organizasyon eğitimi alır.",
      statFloorValue: "9.600 m²",
      statLooms: "Bursa’da eşarp tesisi",
      statMetresValue: "640",
      statMetres: "kişi",
      statDaysValue: "2008",
      statDays: "Türkiye’de en çok eşarp",
      statShadeValue: "2011",
      statShade: "Eyüp’te merkez",
      q1: "Sosyal yaşamın her anında olan muhafazakar kadına kaliteli, modern ve şık modayı ulaşılır kılmak.",
      q1p: "Misyon",
      q2: "Dünyada bilinen en iyi ve en kaliteli muhafazakar giyim markası olmak.",
      q2p: "Vizyon",
      q3: "Çalışanlar iletişim, müşteri odağı ve ticari düşünme üzerine çalışır. Yönetici adayları liderlik, takım çalışması ve organizasyon eğitimi alır.",
      q3p: "Eğitim",
      faqEye: "Sorular",
      faqTitle: "Firma hakkında sorulanlar.",
      faq1q: "FILORA ne dokur?",
      faq1a: "Eşarp. Tesis Bursa’dadır ve 9.600 m² kullanım alanı vardır.",
      faq2q: "Merkez nerede?",
      faq2a: "Eyüp’te. FILORA bu merkezi 2011’den beri kullanır.",
      faq3q: "FILORA’da kaç kişi çalışır?",
      faq3a: "Şirkette 640 kişi çalışır.",
      faq4q: "2008’de ne oldu?",
      faq4a: "FILORA, Türkiye’de en çok eşarp satan firma oldu.",
      faq5q: "Misyon nedir?",
      faq5a: "Sosyal yaşamın her anında olan muhafazakar kadına kaliteli, modern ve şık modayı ulaşılır kılmak.",
      faq6q: "Vizyon nedir?",
      faq6a: "Dünyada bilinen en iyi ve en kaliteli muhafazakar giyim markası olmak.",
      faq7q: "Eğitim nasıl işler?",
      faq7a: "Çalışanlar iletişim, müşteri odağı ve ticari düşünme üzerine çalışır. Yönetici adayları liderlik, takım çalışması ve organizasyon eğitimi alır.",
      faq8q: "Bu not FILORA’ya gider mi?",
      faq8a: "Hayır. Not bu tarayıcıda kalır. Şirkete gönderilmez.",
      requestEye: "Not",
      requestLede: "Kim olduğunuzu ve ne istediğinizi yazın. Not bu tarayıcıda kalır. FILORA’ya gitmez.",
      noscript: "Form kontrolü için komut dosyası gerekir. Kapalıysa not bu sayfadan çıkmaz.",
      labelName: "Ad soyad",
      labelCompany: "Firma",
      labelMail: "Mail",
      labelPhone: "Telefon",
      labelUse: "Kullanım",
      labelMetres: "Metraj",
      labelNote: "Not",
      usePlaceholder: "Kullanım seçin",
      useShirt: "Gömleklik poplin",
      useTwill: "İş kıyafeti dimi",
      useCanvas: "Ev tekstili kanvas",
      notePlaceholder: "Eşarp kumaşı hakkında bir not.",
      consent: "Aydınlatma metnini okudum. Notumun bu sayfada tarayıcıda tutulmasını kabul ediyorum.",
      privacyLink: "Gizlilik metnini aç",
      successTitle: "Notunuz bu tarayıcıda tutuldu.",
      newRequest: "Başka bir not yazın",
      sending: "Gönderiliyor",
      successStored: "{name}, {company}. Not bu tarayıcıda kalır. FILORA’ya gönderilmez.",
      successUnstored: "{name}, {company}. Not doğrulandı. Tarayıcı deposuna yazılamadı. İletilmedi.",
      errNameEmpty: "Ad eksik. Notun kimden olduğunu yazın.",
      errNameShort: "Ad çok kısa. Adınızı ve soyadınızı yazın.",
      errCompanyEmpty: "Firma eksik. Notun hangi firma adına olduğunu yazın.",
      errCompanyShort: "Firma adı çok kısa. Ticari unvanı yazın.",
      errMailEmpty: "Mail eksik. Okunabilecek bir adres yazın.",
      errMailBad: "Bu mail biçimi geçersiz. ad@mail.com şeklinde yazın.",
      errPhoneBad: "Telefon eksik görünüyor. Tam bir numara yazın ya da alanı boş bırakın.",
      errNoteLong: "Not 1000 karakteri aştı. Kısaltıp yeniden yazın.",
      errConsent: "Onay eksik. Notu tutmamız için aydınlatma metnini kabul edin.",
      pagesEye: "Sayfalar",
      disclaimer: "Not bu tarayıcıda kalır. FILORA Group’a gönderilmez.",
      credits: "İkonlar: Phosphor. Yazı: Manrope ve Geist Mono.",
      disclaimerShort: "Not bu tarayıcıda kalır. FILORA Group’a gönderilmez.",
      footerMill: "Eşarp tesisi, Bursa, 9.600 m²",
      footerOffice: "Merkez, Eyüp, 2011’den beri",
      privacyH1: "Kişisel notlar nasıl durur",
      privacyLede: "Bu sayfa notu tarayıcıda tutar. Notu FILORA Group’a göndermez.",
      privacyH2a: "Hangi alanlar var",
      privacyPa: "Form ad, firma, mail, telefon ve not ister. Telefon ve not zorunlu değildir.",
      privacyH2b: "Nereye gider",
      privacyPb: "Not bir sunucuya gönderilmez. Son kayıt yalnızca tarayıcınızın yerel deposunda durur. Başka bir not yazınca bir önceki silinir. Depoyu tarayıcı ayarından da temizleyebilirsiniz.",
      privacyH2c: "Çerez",
      privacyPc: "Zorunlu ya da reklam çerezi kurmuyoruz. Yerel depo çerez değildir. Yalnızca sizin cihazınızda kalır.",
      privacyH2d: "Bu sayfada kutu yok",
      privacyPd: "Bu sayfa bir telefon ya da mail kutusu yayımlamaz. Yazmanın yolu not formudur ve not cihazınızda kalır.",
      termsH1: "Bu sayfa ne söyler",
      termsLede: "Bu sayfadaki not bir sipariş değildir. Tarayıcıda kalır ve FILORA Group’a gönderilmez.",
      termsH2a: "Eşarp",
      termsPa: "FILORA Group Bursa’da 9.600 m² kullanım alanlı tesiste eşarp üretir.",
      termsH2b: "Merkez",
      termsPb: "Merkez 2011’den beri Eyüp’tedir.",
      termsH2c: "Ekip",
      termsPc: "Şirkette 640 kişi çalışır.",
      termsH2d: "Eğitim",
      termsPd: "Çalışanlar iletişim, müşteri odağı ve ticari düşünme üzerine çalışır. Yönetici adayları liderlik, takım çalışması ve organizasyon eğitimi alır.",
      termsH2e: "Misyon",
      termsPe: "Sosyal yaşamın her anında olan muhafazakar kadına kaliteli, modern ve şık modayı ulaşılır kılmak.",
      termsH2f: "Vizyon",
      termsPf: "Dünyada bilinen en iyi ve en kaliteli muhafazakar giyim markası olmak.",
      missingH1: "Bu adres bizde yok.",
      missingLede: "Bağlantı eski ya da eksik yazılmış olabilir."
    }
  };

  function currentLang() {
    try {
      return localStorage.getItem("filora-lang") === "tr" ? "tr" : "en";
    } catch (error) {
      return "en";
    }
  }

  function pack(lang) {
    return dict[lang] || dict.en;
  }

  function t(key) {
    const value = pack(currentLang())[key];
    return value != null ? value : dict.en[key];
  }

  function fill(template, map) {
    return String(template).replace(/\{(\w+)\}/g, function (_, key) {
      return map[key] != null ? map[key] : "";
    });
  }

  function buildTagline(lang) {
    const root = document.querySelector(".tagline-text");
    if (!root) return;
    const lines = taglines[lang] || taglines.en;
    root.replaceChildren();
    lines.forEach(function (line) {
      const row = document.createElement("span");
      row.className = "line";
      line.forEach(function (word, index) {
        if (index) row.appendChild(document.createTextNode(" "));
        const node = document.createElement("span");
        node.className = "word";
        node.textContent = word;
        row.appendChild(node);
      });
      root.appendChild(row);
    });
  }

  function apply(next) {
    const lang = next === "tr" ? "tr" : "en";
    try {
      localStorage.setItem("filora-lang", lang);
    } catch (error) {
      /* Depo kapalıysa dil yine bu oturumda değişir. */
    }
    document.documentElement.lang = lang;
    const strings = pack(lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const value = strings[el.getAttribute("data-i18n")];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const value = strings[el.getAttribute("data-i18n-placeholder")];
      if (value != null) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const value = strings[el.getAttribute("data-i18n-aria")];
      if (value != null) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const value = strings[el.getAttribute("data-i18n-alt")];
      if (value != null) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      const value = strings[el.getAttribute("data-i18n-content")];
      if (value != null) el.setAttribute("content", value);
    });

    const title = document.querySelector("title[data-i18n]");
    if (title) document.title = title.textContent;

    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.setAttribute("content", lang === "tr" ? "tr_TR" : "en_US");

    buildTagline(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === lang));
    });

    document.dispatchEvent(new CustomEvent("langchange"));
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-set-lang"));
    });
  });

  window.Tanriverdi = { t: t, lang: currentLang, fill: fill, apply: apply };
  apply(currentLang());
})();
