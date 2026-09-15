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

  // Mobile drawer
  const burger = document.querySelector(".nav-burger");
  const drawer = document.getElementById("drawer");
  const closeDrawer = () => {
    if (!drawer) return;
    drawer.hidden = true;
    burger?.setAttribute("aria-expanded", "false");
  };
  burger?.addEventListener("click", (e) => {
    e.preventDefault();
    const open = drawer.hidden;
    drawer.hidden = !open;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  drawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

  // Panel inview + progress
  const panels = [...document.querySelectorAll(".panel.project")];
  const progress = document.getElementById("progress-label");
  const total = String(panels.length).padStart(2, "0");

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            const num = entry.target.getAttribute("data-panel");
            if (progress && num) progress.textContent = `${num} / ${total}`;
          }
        });
      },
      { threshold: 0.45 }
    );
    panels.forEach((p) => io.observe(p));
  } else {
    panels.forEach((p) => p.classList.add("is-inview"));
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
    project.media.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} — ${i + 1}`;
      img.loading = i < 2 ? "eager" : "lazy";
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

  document.querySelectorAll(".open-project").forEach((el) => {
    el.addEventListener("click", () => openProject(el.dataset.project));
  });

  lightbox?.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeDrawer();
    }
  });
})();
