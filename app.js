(function () {
  "use strict";
  const config = window.BUSINESS_CONFIG;
  if (!config) return;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const fullAddress = [config.address.streetAddress, config.address.addressLocality, config.address.addressRegion, config.address.postalCode, "India"].join(", ");
  const whatsappUrl = (message = config.whatsappGreeting) => `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const setLink = (selector, href) => $$(selector).forEach((link) => { link.href = href; });

  function buildServices() {
    const grid = $("#services-grid");
    const select = $("#service-required");
    if (!grid || !select) return;
    config.services.forEach((service) => {
      const card = document.createElement("article");
      card.className = "service-card";
      const icon = document.createElement("span"); icon.className = "service-icon"; icon.setAttribute("aria-hidden", "true"); icon.textContent = service.icon;
      const title = document.createElement("h3"); title.textContent = service.name;
      const description = document.createElement("p"); description.textContent = service.description;
      const enquiry = document.createElement("a"); enquiry.className = "service-enquiry"; enquiry.target = "_blank"; enquiry.rel = "noopener"; enquiry.href = whatsappUrl(`${config.whatsappGreeting}\n\nI would like to ask about: ${service.name}.`); enquiry.innerHTML = "Enquire on WhatsApp <span aria-hidden=\"true\">→</span>";
      card.append(icon, title, description, enquiry); grid.append(card);
      const option = document.createElement("option"); option.value = service.name; option.textContent = service.name; select.append(option);
    });
    const other = document.createElement("option"); other.value = "Other tailoring enquiry"; other.textContent = "Other tailoring enquiry"; select.append(other);
  }

  function renderBusinessDetails() {
    $("#business-address").textContent = fullAddress;
    $("#business-hours").textContent = config.hoursText;
    $("#business-phone").textContent = config.telephoneDisplay;
    $("#business-phone").href = `tel:${config.telephone}`;
    $("#business-email").textContent = config.email;
    $("#business-email").href = `mailto:${config.email}`;
    $("#business-map").src = config.mapEmbedUrl;
    $("#instagram-link").href = config.instagram;
    $("#footer-instagram").href = config.instagram;
    setLink(".js-call", `tel:${config.telephone}`);
    setLink(".js-directions", config.mapsUrl);
    setLink(".js-whatsapp", whatsappUrl());
    $("#current-year").textContent = String(new Date().getFullYear());
  }

  function addStructuredData() {
    const data = {
      "@context": "https://schema.org", "@type": "ClothingStore", name: config.name, alternateName: config.alternateName,
      description: "Tailoring and alteration services in Thanjavur, Tamil Nadu.", url: config.siteUrl, image: config.image,
      telephone: config.telephone, email: config.email, address: { "@type": "PostalAddress", ...config.address }, sameAs: [config.instagram],
      areaServed: { "@type": "City", name: config.address.addressLocality },
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Tailoring services", itemListElement: config.services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.name, description: service.description } })) }
    };
    const script = document.createElement("script"); script.type = "application/ld+json"; script.textContent = JSON.stringify(data); document.head.append(script);
  }

  function initialiseNavigation() {
    const toggle = $(".menu-toggle"), nav = $(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("is-open", !open); });
    $$("a", nav).forEach((link) => link.addEventListener("click", () => { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }));
  }

  function initialiseForm() {
    const form = $("#enquiry-form"), status = $("#form-status");
    if (!form || !status) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault(); status.textContent = ""; status.className = "form-status";
      if (form.website.value.trim()) { status.textContent = "Unable to send this enquiry."; status.classList.add("is-error"); return; }
      const name = form.name.value.trim(), phone = form.phone.value.trim(), service = form.service.value, message = form.message.value.trim();
      if (name.length < 2 || phone.replace(/\D/g, "").length < 10 || !service || message.length < 10) { status.textContent = "Please enter your name, a valid phone number, the required service, and a message of at least 10 characters."; status.classList.add("is-error"); return; }
      const enquiry = `${config.whatsappGreeting}\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
      status.textContent = "Opening WhatsApp with your enquiry…"; status.classList.add("is-success"); window.open(whatsappUrl(enquiry), "_blank", "noopener"); form.reset();
    });
  }
  buildServices(); renderBusinessDetails(); addStructuredData(); initialiseNavigation(); initialiseForm();
})();
