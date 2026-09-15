(() => {
  const projects = {
    syelle: {
      title: "Syelle",
      description: "Identidade visual completa — logo, cores, manual e aplicações.",
      media: [
        "images/portfolio/branding/syelle/syelle-logo-principal.webp",
        "images/portfolio/branding/syelle/syelle-paleta-cores.webp",
        "images/portfolio/branding/syelle/syelle-manual-marca.webp",
        "images/portfolio/branding/syelle/syelle-aplicacoes-marca.webp",
        "images/portfolio/branding/syelle/syelle-detalhes-logo.webp",
        "images/portfolio/branding/syelle/syelle-processo-criativo.webp",
        "images/portfolio/branding/syelle/syelle-aplicacoes-suportes.webp",
        "images/portfolio/branding/syelle/syelle-resultado-final.webp",
        "images/portfolio/branding/syelle/syelle-aplicacoes-praticas.webp",
      ],
    },
    cheetos: {
      title: "Cheetos Sweetos",
      description: "Manipulação digital com narrativa visual e antes/depois.",
      media: [
        "images/portfolio/branding/cheetos/2.webp",
        "images/portfolio/branding/cheetos/1.webp",
        "images/portfolio/branding/cheetos/3.webp",
        "images/portfolio/branding/cheetos/4.webp",
        "images/portfolio/branding/cheetos/5.webp",
        "images/portfolio/branding/cheetos/6.webp",
        "images/portfolio/branding/cheetos/7.webp",
      ],
    },
    valhalla: {
      title: "Assassin's Creed Valhalla — Eivor",
      description: "Série de manipulações digitais com clima épico e composição cinematográfica.",
      media: [
        "images/portfolio/digital/assassins-creed-valhalla/1.webp",
        "images/portfolio/digital/assassins-creed-valhalla/2.webp",
        "images/portfolio/digital/assassins-creed-valhalla/3.webp",
        "images/portfolio/digital/assassins-creed-valhalla/4.webp",
        "images/portfolio/digital/assassins-creed-valhalla/5.webp",
        "images/portfolio/digital/assassins-creed-valhalla/6.webp",
        "images/portfolio/digital/assassins-creed-valhalla/7.webp",
        "images/portfolio/digital/assassins-creed-valhalla/8.webp",
        "images/portfolio/digital/assassins-creed-valhalla/10.webp",
      ],
      video: "images/portfolio/digital/assassins-creed-valhalla/VIDEO FINAL 9.mp4",
    },
    granvita: {
      title: "Granvita Fertilizantes",
      description: "Material publicitário para outdoor e comunicação impressa.",
      media: [
        "images/portfolio/print/vulcano-material-publicitario/4.webp",
        "images/portfolio/print/vulcano-material-publicitario/1.webp",
        "images/portfolio/print/vulcano-material-publicitario/2.webp",
        "images/portfolio/print/vulcano-material-publicitario/3.webp",
      ],
    },
    trots: {
      title: "Trot's",
      description: "Campanha para redes sociais com linguagem direta e memorável.",
      media: [
        "images/portfolio/social/campanhas/1.webp",
        "images/portfolio/social/campanhas/2.webp",
        "images/portfolio/social/campanhas/3.webp",
        "images/portfolio/social/campanhas/4.webp",
      ],
    },
    audi: {
      title: "Audi RS7",
      description: "Conceito de página principal para lançamento do modelo.",
      media: [
        "images/portfolio/web/landing-pages/CAPA.webp",
        "images/portfolio/web/landing-pages/1.webp",
        "images/portfolio/web/landing-pages/2.webp",
        "images/portfolio/web/landing-pages/3.webp",
        "images/portfolio/web/landing-pages/4.webp",
        "images/portfolio/web/landing-pages/6.webp",
      ],
    },
  };

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");

  const closeNav = () => {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  };

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  // Reveal works on scroll
  const works = document.querySelectorAll(".work");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    works.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 80, 320)}ms`;
      io.observe(el);
    });
  } else {
    works.forEach((el) => el.classList.add("is-visible"));
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");
  const galleryEl = document.getElementById("lightbox-gallery");
  let lastFocus = null;

  const openProject = (id) => {
    const project = projects[id];
    if (!project || !lightbox) return;

    lastFocus = document.activeElement;
    titleEl.textContent = project.title;
    descEl.textContent = project.description;
    galleryEl.innerHTML = "";

    project.media.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} — peça ${index + 1}`;
      img.loading = index < 2 ? "eager" : "lazy";
      galleryEl.appendChild(img);
    });

    if (project.video) {
      const video = document.createElement("video");
      video.src = project.video;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      galleryEl.appendChild(video);
    }

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close")?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
    galleryEl.innerHTML = "";
    lastFocus?.focus?.();
  };

  document.querySelectorAll("[data-project]").forEach((el) => {
    if (el.tagName === "BUTTON" || el.classList.contains("work-trigger")) {
      el.addEventListener("click", () => openProject(el.dataset.project));
    }
  });

  lightbox?.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      closeNav();
    }
  });

  // Compact header shadow on scroll
  const onScroll = () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 8 ? "0 1px 0 var(--line)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
