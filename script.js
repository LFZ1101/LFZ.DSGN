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
    rose: {
      title: "Rose Pastéis",
      label: "Social media",
      description:
        "Projeto de social media para reforçar a identidade da Rose Pastéis, pastelaria tradicional de Apucarana desde 1995. Cores quentes, foto de produto e comunicação próxima para gerar desejo e fortalecer a presença digital.",
      media: [
        "images/portfolio/social/rose-pasteis/1.webp",
        "images/portfolio/social/rose-pasteis/2.webp",
        "images/portfolio/social/rose-pasteis/3.webp",
        "images/portfolio/social/rose-pasteis/4.webp",
        "images/portfolio/social/rose-pasteis/5.webp",
        "images/portfolio/social/rose-pasteis/6.webp",
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
    dunamis: {
      title: "Dunamis Wear",
      label: "E-commerce",
      description:
        "E-commerce de moda premium com estética dark luxury. Hero cinematográfico, catálogo limpo e jornada de compra focada em presença e exclusividade — camisetas e polos atemporais.",
      url: "https://dunamiswear.com.br/",
      media: [
        "images/portfolio/web/dunamis/1.webp",
        "images/portfolio/web/dunamis/2.webp",
        "images/portfolio/web/dunamis/3.webp",
        "images/portfolio/web/dunamis/4.webp",
        "images/portfolio/web/dunamis/5.webp",
        "images/portfolio/web/dunamis/6.webp",
      ],
    },
    viane: {
      title: "Viane Brasil",
      label: "Identidade visual",
      description:
        "Identidade completa para consultoria empresarial — logo kit, tipografia, paleta, mockups e social media. Gestão que organiza, estratégia que multiplica.",
      media: [
        "images/portfolio/branding/viane/1.webp",
        "images/portfolio/branding/viane/2.webp",
        "images/portfolio/branding/viane/3.webp",
        "images/portfolio/branding/viane/4.webp",
        { youtube: "https://www.youtube.com/embed/I47O4XmVHog" },
        "images/portfolio/branding/viane/6.webp",
        "images/portfolio/branding/viane/7.webp",
        "images/portfolio/branding/viane/8.webp",
        "images/portfolio/branding/viane/9.webp",
        "images/portfolio/branding/viane/10.webp",
        "images/portfolio/branding/viane/11.webp",
        "images/portfolio/branding/viane/12.webp",
        "images/portfolio/branding/viane/13.webp",
        "images/portfolio/branding/viane/14.webp",
        "images/portfolio/branding/viane/15.webp",
        "images/portfolio/branding/viane/16.webp",
        "images/portfolio/branding/viane/17.webp",
      ],
    },
  };

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Touch detection
  const coarse = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
  if (coarse) document.body.classList.add("is-touch");

  // Intro / loader (Bergh-inspired)
  const loader = document.getElementById("loader");
  const loaderNum = document.getElementById("loader-num");
  const loaderProgress = document.getElementById("loader-progress");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const buildRulers = () => {
    document.querySelectorAll(".loader-ruler").forEach((ruler) => {
      ruler.innerHTML = "";
      for (let i = 0; i < 18; i += 1) {
        const tick = document.createElement("span");
        tick.style.top = `${(i / 17) * 100}%`;
        if (i % 3 === 0) tick.dataset.n = String(i).padStart(2, "0");
        ruler.appendChild(tick);
      }
    });
  };

  const buildThumbs = () => {
    const host = document.getElementById("loader-thumbs");
    if (!host) return;
    const imgs = [
      "images/portfolio/branding/syelle/syelle-logo-principal.webp",
      "images/portfolio/branding/viane/cover.webp",
      "images/portfolio/social/rose-pasteis/cover.webp",
      "images/portfolio/web/dunamis/cover.webp",
    ];
    host.innerHTML = imgs
      .map((src) => `<div class="loader-thumb"><img src="${src}" alt="" loading="eager"></div>`)
      .join("");
  };

  const finishIntro = () => {
    document.body.classList.remove("is-loading");
    loader?.classList.add("is-done");
    if (loader) {
      gsap.set(loader, { clearProps: "opacity" });
      loader.style.visibility = "hidden";
      loader.setAttribute("aria-hidden", "true");
    }
    // Ensure UI is interactive after reveal
    gsap.set([".topbar", ".chrome", ".section-chip", ".stage.is-active", ".frame", ".slide-caption", ".stage-bg", ".nav-item", ".top-cta", ".brand"], {
      clearProps: "opacity,transform,pointerEvents",
    });
  };

  const runIntro = () => {
    buildRulers();
    buildThumbs();

    if (!loader || reduceMotion || typeof gsap === "undefined") {
      if (loaderNum) loaderNum.textContent = "100";
      finishIntro();
      return;
    }

    const state = { value: 0 };
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const thumbs = gsap.utils.toArray(".loader-thumb").filter((el) => getComputedStyle(el).display !== "none");

    gsap.set([".topbar", ".chrome", ".section-chip", ".frame", ".slide-caption", ".stage-bg"], {
      opacity: 0,
    });
    gsap.set(".frame", { scale: 0.94, y: isMobile ? 14 : 18 });
    gsap.set(".topbar", { y: isMobile ? -12 : -18 });
    gsap.set(".chrome", { y: isMobile ? 12 : 18 });
    gsap.set(".section-chip", { y: -8 });
    if (!isMobile) gsap.set(".title-layer", { opacity: 0 });
    gsap.set(".loader-brand", { opacity: 0, y: 10 });
    gsap.set(".loader-meta", { opacity: 0, y: 8 });
    gsap.set(".loader-count", { opacity: 0, y: 20, scale: 0.96 });
    gsap.set(".loader-ruler", { opacity: 0 });
    if (thumbs.length) gsap.set(thumbs, { opacity: 0, scale: 0.92, y: 10 });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: finishIntro,
    });

    const countDur = isMobile ? 1.35 : 1.55;
    const thumbOpacity = isMobile ? 0.62 : 0.55;

    tl.to(".loader-count", { opacity: 1, y: 0, scale: 1, duration: 0.65 }, 0)
      .to(".loader-meta", { opacity: 0.55, y: 0, duration: 0.5 }, 0.12)
      .to(".loader-ruler", { opacity: isMobile ? 0.4 : 0.35, duration: 0.6 }, 0.05)
      .to(
        state,
        {
          value: 100,
          duration: countDur,
          ease: "power2.inOut",
          onUpdate: () => {
            const n = Math.round(state.value);
            if (loaderNum) loaderNum.textContent = String(n);
            if (loaderProgress) loaderProgress.style.width = `${n}%`;
          },
        },
        0.08
      );

    if (thumbs.length) {
      tl.to(
        thumbs,
        {
          opacity: thumbOpacity,
          scale: 1,
          y: 0,
          duration: 0.65,
          stagger: { each: isMobile ? 0.14 : 0.12, from: "random" },
        },
        0.22
      );
    }

    tl.to(".loader-brand", { opacity: 1, y: 0, duration: 0.5 }, isMobile ? 0.95 : 1.05);

    if (thumbs.length) {
      tl.to(thumbs, { opacity: 0, y: -8, duration: 0.32, stagger: 0.04 }, isMobile ? 1.4 : 1.55);
    }

    tl.to([".loader-count", ".loader-meta", ".loader-line", ".loader-ruler"], { opacity: 0, y: -14, duration: 0.4 }, isMobile ? 1.5 : 1.7)
      .to(".loader-brand", { scale: 1.03, duration: 0.3 }, isMobile ? 1.55 : 1.75)
      .to(".loader", { opacity: 0, duration: 0.65, ease: "power2.inOut" }, isMobile ? 1.85 : 2.05)
      .to(".stage-bg", { opacity: 1, duration: 0.85 }, isMobile ? 1.95 : 2.15);

    if (!isMobile) {
      tl.to(".title-layer", { opacity: 1, duration: 0.8 }, 2.25);
    }

    tl.to(".frame", { opacity: 1, scale: 1, y: 0, duration: isMobile ? 0.9 : 1.05 }, isMobile ? 2.0 : 2.2)
      .to(".slide-caption", { opacity: 1, duration: 0.5 }, isMobile ? 2.2 : 2.45)
      .to(".topbar", { opacity: 1, y: 0, duration: 0.65 }, isMobile ? 2.1 : 2.35)
      .to(".section-chip", { opacity: 1, y: 0, duration: 0.5 }, isMobile ? 2.2 : 2.45)
      .to(".chrome", { opacity: 1, y: 0, duration: 0.65 }, isMobile ? 2.25 : 2.5);
  };

  let introStarted = false;
  const startIntroOnce = () => {
    if (introStarted) return;
    introStarted = true;
    runIntro();
  };

  if (document.readyState === "complete") startIntroOnce();
  else window.addEventListener("load", startIntroOnce);
  setTimeout(startIntroOnce, 2800);

  // Swiper
  const bgImage = document.getElementById("bg-image");
  const titleLeft = document.getElementById("title-left");
  const titleRight = document.getElementById("title-right");
  const counter = document.getElementById("counter");

  const fitSideTitle = (el, side = "left") => {
    if (!el || getComputedStyle(el).display === "none") return;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    el.style.transform = "none";
    el.style.fontSize = "";

    const frameEl = document.querySelector(".swiper-slide-active .frame") || document.querySelector(".frame");
    const frameW = frameEl ? frameEl.getBoundingClientRect().width : window.innerWidth * 0.45;
    const edgePad = mobile ? 28 : 48;
    const maxW = mobile
      ? Math.min(window.innerWidth - edgePad * 2, 460)
      : Math.max(100, (window.innerWidth - frameW) / 2 - edgePad * 2);

    // Measure unscaled width
    const natural = Math.max(el.scrollWidth, el.getBoundingClientRect().width);
    if (!natural) return;

    const scale = Math.min(1, (maxW / natural) * 0.94);
    if (mobile) {
      el.style.transform = scale < 0.999 ? `scale(${scale})` : "none";
      el.style.transformOrigin = "center bottom";
      return;
    }
    const base = side === "left" ? "translateX(0)" : "translateX(0)";
    el.style.transform = scale < 0.999 ? `${base} scale(${scale})` : base;
    el.style.transformOrigin = side === "left" ? "left center" : "right center";
  };

  const syncSideTitles = (title, side) => {
    if (titleLeft) {
      titleLeft.textContent = title;
      fitSideTitle(titleLeft, "left");
    }
    if (titleRight) {
      titleRight.textContent = side;
      fitSideTitle(titleRight, "right");
    }
  };

  const syncSlide = (swiper) => {
    const slide = swiper.slides[swiper.activeIndex];
    if (!slide) return;
    const img = slide.querySelector("img");
    const title = slide.dataset.title || "";
    const side = slide.dataset.side || "";
    const total = String(swiper.slides.filter((s) => !s.classList.contains("swiper-slide-hidden")).length || swiper.slides.length).padStart(2, "0");
    const current = String(swiper.realIndex + 1).padStart(2, "0");

    if (titleLeft || titleRight) {
      titleLeft?.classList.add("is-swap");
      titleRight?.classList.add("is-swap");
      setTimeout(() => {
        syncSideTitles(title, side);
        titleLeft?.classList.remove("is-swap");
        titleRight?.classList.remove("is-swap");
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
    centeredSlides: true,
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

  const refitTitles = () => {
    fitSideTitle(titleLeft, "left");
    fitSideTitle(titleRight, "right");
  };
  window.addEventListener("resize", refitTitles);
  if (document.fonts?.ready) document.fonts.ready.then(refitTitles);
  else setTimeout(refitTitles, 300);

  // Views
  const stages = {
    slider: document.getElementById("view-slider"),
    list: document.getElementById("view-list"),
    services: document.getElementById("view-services"),
    about: document.getElementById("view-about"),
    contact: document.getElementById("view-contact"),
  };

  const sectionMeta = {
    slider: { num: "01", label: "Projetos", hint: "— portfólio selecionado" },
    list: { num: "01", label: "Projetos", hint: "— lista completa" },
    services: { num: "02", label: "Serviços", hint: "— o que eu entrego" },
    about: { num: "03", label: "Sobre", hint: "— quem faz o trabalho" },
    contact: { num: "04", label: "Contato", hint: "— vamos conversar" },
  };

  const chip = document.getElementById("section-chip");
  const chrome = document.getElementById("chrome");

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
      if (active) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    });

    document.querySelectorAll(".mode-toggle button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.view === name);
    });

    const meta = sectionMeta[name] || sectionMeta.slider;
    if (chip) {
      chip.querySelector(".section-chip-num").textContent = meta.num;
      chip.querySelector(".section-chip-label").textContent = meta.label;
      chip.querySelector(".section-chip-hint").textContent = meta.hint;
    }

    chrome?.classList.toggle("is-panel-mode", name === "services" || name === "about" || name === "contact");
    document.body.classList.toggle("is-panel-scroll", name === "services" || name === "about" || name === "contact");

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
  const lbLink = document.getElementById("lb-link");
  const lbGallery = document.getElementById("lb-gallery");

  const openProject = (id) => {
    const project = projects[id];
    if (!project || !lightbox) return;
    lbTitle.textContent = project.title;
    lbDesc.textContent = project.description;
    lbLabel.textContent = project.label;
    if (lbLink) {
      if (project.url) {
        lbLink.href = project.url;
        lbLink.hidden = false;
        lbLink.textContent = "Visitar site oficial →";
      } else {
        lbLink.hidden = true;
        lbLink.removeAttribute("href");
      }
    }
    lbGallery.innerHTML = "";
    project.media.forEach((item, i) => {
      if (item && typeof item === "object" && item.youtube) {
        const wrap = document.createElement("div");
        wrap.className = "lb-video";
        const iframe = document.createElement("iframe");
        iframe.src = item.youtube;
        iframe.title = `${project.title} — vídeo`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        );
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        iframe.allowFullscreen = true;
        wrap.appendChild(iframe);
        lbGallery.appendChild(wrap);
        return;
      }
      const img = document.createElement("img");
      img.src = item;
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
    if (project.url) {
      const end = document.createElement("div");
      end.className = "lb-end";
      end.innerHTML = `<p>Projeto no ar</p><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.url.replace(/^https?:\/\//, "")}</a>`;
      lbGallery.appendChild(end);
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
})();
