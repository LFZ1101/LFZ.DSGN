(() => {
  const projects = {
    syelle: {
      title: "Syelle",
      label: "Identidade visual",
      description: "Sistema de marca completo — logo, paleta, manual e aplicações.",
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
      label: "Manipulação digital",
      description: "Peça digital com narrativa visual e composição de alto impacto.",
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
      title: "Valhalla — Eivor",
      label: "Manipulação digital",
      description: "Série de key arts com clima cinematográfico e tratamento de imagem.",
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
      title: "Granvita",
      label: "Material publicitário",
      description: "Outdoor e impressos com linguagem forte para o agronegócio.",
      media: [
        "images/portfolio/print/vulcano-material-publicitario/4.webp",
        "images/portfolio/print/vulcano-material-publicitario/1.webp",
        "images/portfolio/print/vulcano-material-publicitario/2.webp",
        "images/portfolio/print/vulcano-material-publicitario/3.webp",
      ],
    },
    trots: {
      title: "Trot's",
      label: "Social media",
      description: "Campanha para posts e stories com mensagem direta e memorável.",
      media: [
        "images/portfolio/social/campanhas/1.webp",
        "images/portfolio/social/campanhas/2.webp",
        "images/portfolio/social/campanhas/3.webp",
        "images/portfolio/social/campanhas/4.webp",
      ],
    },
    audi: {
      title: "Audi RS7",
      label: "Landing page",
      description: "Conceito de página de lançamento com foco em presença e conversão.",
      media: [
        "images/portfolio/web/landing-pages/2.webp",
        "images/portfolio/web/landing-pages/CAPA.webp",
        "images/portfolio/web/landing-pages/1.webp",
        "images/portfolio/web/landing-pages/3.webp",
        "images/portfolio/web/landing-pages/4.webp",
        "images/portfolio/web/landing-pages/6.webp",
      ],
    },
  };

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Touch detection
  const coarse = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
  if (coarse) document.body.classList.add("is-touch");

  // Loader
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("is-done"), 900);
  });
  setTimeout(() => loader?.classList.add("is-done"), 1800);

  // Custom cursor
  const cursor = document.getElementById("cursor");
  if (!coarse && cursor) {
    let x = 0, y = 0, tx = 0, ty = 0;
    window.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      cursor.classList.add("is-on");
    });
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll(".frame, .list-row, .open-project").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
    });
  }

  // Swiper
  const bgImage = document.getElementById("bg-image");
  const titleLeft = document.getElementById("title-left");
  const titleRight = document.getElementById("title-right");
  const counter = document.getElementById("counter");

  const syncSlide = (swiper) => {
    const slide = swiper.slides[swiper.activeIndex];
    if (!slide) return;
    const img = slide.querySelector("img");
    const title = slide.dataset.title || "";
    const side = slide.dataset.side || "";
    const total = String(swiper.slides.filter((s) => !s.classList.contains("swiper-slide-hidden")).length || swiper.slides.length).padStart(2, "0");
    const current = String(swiper.realIndex + 1).padStart(2, "0");

    if (titleLeft && titleRight) {
      titleLeft.classList.add("is-swap");
      titleRight.classList.add("is-swap");
      setTimeout(() => {
        titleLeft.textContent = title;
        titleRight.textContent = side;
        titleLeft.classList.remove("is-swap");
        titleRight.classList.remove("is-swap");
      }, 220);
    }

    if (bgImage && img) {
      gsap.to(bgImage, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          bgImage.src = img.src;
          gsap.to(bgImage, { opacity: 1, duration: 0.45 });
        },
      });
    }

    if (counter) counter.textContent = `${current} / ${total}`;
  };

  const swiper = new Swiper("#work-swiper", {
    direction: "vertical",
    slidesPerView: 1.35,
    centeredSlides: true;
    spaceBetween: 28,
    mousewheel: { forceToAxis: true, sensitivity: 0.85, releaseOnEdges: true },
    speed: 750,
    grabCursor: !coarse,
    keyboard: { enabled: true },
    on: {
      init(sw) { syncSlide(sw); },
      slideChange(sw) { syncSlide(sw); },
    },
    breakpoints: {
      0: { slidesPerView: 1.15, spaceBetween: 18 },
      900: { slidesPerView: 1.35, spaceBetween: 28 },
    },
  });

  // Views
  const stages = {
    slider: document.getElementById("view-slider"),
    list: document.getElementById("view-list"),
    about: document.getElementById("view-about"),
    contact: document.getElementById("view-contact"),
  };

  const setView = (name) => {
    Object.entries(stages).forEach(([key, el]) => {
      if (!el) return;
      const on = key === name;
      el.classList.toggle("is-active", on);
      el.hidden = !on;
    });

    document.querySelectorAll(".nav-item").forEach((btn) => {
      const active =
        btn.dataset.view === name ||
        (btn.dataset.view === "slider" && (name === "slider" || name === "list"));
      btn.classList.toggle("is-active", active);
    });

    document.querySelectorAll(".mode-toggle button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.view === name);
    });

    if (name === "slider") requestAnimationFrame(() => swiper.update());
  };

  document.querySelectorAll("[data-view]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const view = el.dataset.view;
      if (!view || !stages[view]) return;
      if (el.tagName === "A" && view === "slider") e.preventDefault();
      if (el.tagName === "BUTTON") e.preventDefault();
      setView(view);
    });
  });

  // Filters
  const filterButtons = document.querySelectorAll(".filters button");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach((b) => b.classList.toggle("is-active", b === btn));

      swiper.slides.forEach((slide) => {
        const match = filter === "all" || slide.dataset.cat === filter;
        slide.style.display = match ? "" : "none";
      });
      document.querySelectorAll(".list-row").forEach((row) => {
        const match = filter === "all" || row.dataset.cat === filter;
        row.classList.toggle("is-filtered-out", !match);
      });
      swiper.update();
      swiper.slideTo(0);
      syncSlide(swiper);
    });
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lbTitle = document.getElementById("lb-title");
  const lbDesc = document.getElementById("lb-desc");
  const lbLabel = document.getElementById("lb-label");
  const lbGallery = document.getElementById("lb-gallery");

  const openProject = (id) => {
    const project = projects[id];
    if (!project || !lightbox) return;
    lbTitle.textContent = project.title;
    lbDesc.textContent = project.description;
    lbLabel.textContent = project.label;
    lbGallery.innerHTML = "";
    project.media.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} ${i + 1}`;
      img.loading = i < 2 ? "eager" : "lazy";
      lbGallery.appendChild(img);
    });
    if (project.video) {
      const video = document.createElement("video");
      video.src = project.video;
      video.controls = true;
      video.playsInline = true;
      lbGallery.appendChild(video);
    }
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    gsap.fromTo(".lightbox-dialog", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" });
  };

  const closeLightbox = () => {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
    lbGallery.innerHTML = "";
  };

  document.querySelectorAll(".open-project").forEach((el) => {
    el.addEventListener("click", () => openProject(el.dataset.project));
  });
  lightbox?.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Entrance
  gsap.from(".topbar", { y: -16, opacity: 0, duration: 0.8, delay: 0.95, ease: "power3.out" });
  gsap.from(".chrome", { y: 16, opacity: 0, duration: 0.8, delay: 1.05, ease: "power3.out" });
  gsap.from(".frame", { scale: 0.92, opacity: 0, duration: 1, delay: 1, ease: "power3.out" });
})();
