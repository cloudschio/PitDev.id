const siteConfig = {
  name: "Chio",
  brand: "Chio.dev",
  role: "Full-Stack Web Developer",
  typingRoles: [
    "Graphic designer",
    "freelancer",
    "web developer"
  ],
  shortBio: "Saya membantu membangun website, sistem POS, e-commerce, dan produk digital dengan tampilan elegan, cepat, dan fokus ke hasil bisnis.",
  email: "cloudschio@gmail.com",
  whatsapp: "+62 881081912121",
  whatsappLink: "https://wa.me/62881081912121",
  location: "Surabaya, Indonesia",
  cvLink: "#",
  github: "https://github.com/",
  profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  socials: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Email", url: "mailto:hello@chio.dev" }
  ],
  skills: [
    "PHP",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Responsive Design",
    "Dark Mode UI",
    "cPanel Deployment",
    "GitHub",
    "Vercel",
    "REST API",
    "POS System",
    "E-commerce",
    "Landing Page"
  ],
  filters: ["Semua", "Web App", "E-commerce", "POS", "UI/UX"],
  projects: [
    {
      title: "POS Kasir UMKM",
      category: "POS",
      desc: "Sistem kasir dengan manajemen produk, transaksi, stok, laporan penjualan, dan dashboard admin yang mudah dipahami.",
      tags: ["PHP", "MySQL", "Dashboard"],
      demo: "https://example.com",
      code: "#"
    },
    {
      title: "Website Toko Online",
      category: "E-commerce",
      desc: "Website katalog dan penjualan online dengan desain modern, mobile friendly, serta CTA yang fokus ke konversi.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://example.com",
      code: "#"
    },
    {
      title: "Portfolio Personal Premium",
      category: "UI/UX",
      desc: "Website personal brand dengan hero premium, section project, testimonial, FAQ, dan dark mode toggle.",
      tags: ["Vercel", "GitHub", "Responsive"],
      demo: "https://example.com",
      code: "#"
    },
    {
      title: "Dashboard Percetakan",
      category: "Web App",
      desc: "Aplikasi internal untuk manajemen pesanan, status produksi, invoice, dan monitoring progres kerja.",
      tags: ["Admin", "Table", "Workflow"],
      demo: "https://example.com",
      code: "#"
    },
    {
      title: "Landing Page Jasa",
      category: "UI/UX",
      desc: "Landing page premium untuk jasa profesional dengan copy yang lebih meyakinkan dan visual yang clean.",
      tags: ["SEO", "CTA", "Branding"],
      demo: "https://example.com",
      code: "#"
    },
    {
      title: "Sistem Order Produk",
      category: "Web App",
      desc: "Aplikasi custom order sederhana dengan data pelanggan, detail pesanan, status proses, dan rekap transaksi.",
      tags: ["Custom App", "Forms", "Reports"],
      demo: "https://example.com",
      code: "#"
    }
  ],
  certificates: [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2025",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Online Course",
      year: "2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      link: "#"
    }
  ],
  timeline: [
    {
      year: "2022 — Sekarang",
      title: "Full-Stack Developer untuk project bisnis & UMKM",
      desc: "Mengembangkan aplikasi POS, e-commerce, sistem percetakan, financial tracking, dan website company profile."
    },
    {
      year: "2021 — 2022",
      title: "Mendalami frontend & responsive design",
      desc: "Fokus pada layout modern, dark mode, optimasi tampilan mobile, dan struktur komponen yang reusable."
    },
    {
      year: "2020 — 2021",
      title: "Membangun project personal & eksperimen web",
      desc: "Mulai dari landing page, undangan digital, portfolio, hingga aplikasi sederhana berbasis PHP dan MySQL."
    }
  ],
  testimonials: [
    {
      quote: "Hasil websitenya terasa rapi, profesional, dan cepat dipahami user. Revisi juga enak karena strukturnya jelas.",
      name: "Client UMKM",
      role: "Owner Bisnis"
    },
    {
      quote: "Dashboard yang dibuat membantu operasional jadi lebih teratur. Tampilan admin juga tidak membingungkan.",
      name: "Project Internal",
      role: "Tim Operasional"
    },
    {
      quote: "Desainnya modern, mobile-friendly, dan terasa lebih premium dibanding template biasa.",
      name: "Personal Brand Client",
      role: "Freelance Professional"
    }
  ]
};

const skillCloud = document.getElementById("skillCloud");
const filterBar = document.getElementById("filterBar");
const projectsGrid = document.getElementById("projectsGrid");
const certificateGrid = document.getElementById("certificateGrid");
const timelineList = document.getElementById("timelineList");
const testimonialGrid = document.getElementById("testimonialGrid");

function renderSkills() {
  if (!skillCloud) return;
  skillCloud.innerHTML = siteConfig.skills
    .map(skill => `<span class="skill-pill">${skill}</span>`)
    .join("");
}

function renderFilters() {
  if (!filterBar) return;
  filterBar.innerHTML = siteConfig.filters
    .map((item, index) => `
      <button class="filter-btn ${index === 0 ? "active" : ""}" data-filter="${item}" type="button">
        ${item}
      </button>
    `)
    .join("");
}

function renderProjects(filter = "Semua") {
  if (!projectsGrid) return;

  const data = filter === "Semua"
    ? siteConfig.projects
    : siteConfig.projects.filter(project => project.category === filter);

  projectsGrid.innerHTML = data.map(project => `
    <article class="project-card reveal show premium-float">
      <div class="project-cover">
        <span class="project-badge">${project.category}</span>
      </div>

      <div class="project-body">
        <div>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
        </div>

        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <div class="project-links">
          <button
            class="text-link preview-trigger"
            data-title="${project.title}"
            data-url="${project.demo}"
            type="button"
          >
            Live Preview
          </button>

          <a class="text-link" href="${project.demo}" target="_blank" rel="noopener noreferrer">
            Buka Demo
          </a>

          <a class="text-link" href="${project.code}" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </article>
  `).join("");

  bindPreviewButtons();
}

function renderCertificates() {
  if (!certificateGrid) return;

  certificateGrid.innerHTML = siteConfig.certificates.map(item => `
    <article class="certificate-card reveal premium-float">
      <div class="certificate-cover">
        <img src="${item.image}" alt="${item.title}" width="1200" height="800" loading="lazy">
        <span class="certificate-badge">${item.year}</span>
      </div>

      <div class="certificate-body">
        <div>
          <h3>${item.title}</h3>
          <p>${item.issuer}</p>
        </div>

        <div class="certificate-links">
          <a class="text-link" href="${item.link}" target="_blank" rel="noopener noreferrer">
            Lihat Sertifikat
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  if (!timelineList) return;

  timelineList.innerHTML = siteConfig.timeline.map(item => `
    <article class="timeline-item reveal">
      <div class="timeline-year">${item.year}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join("");
}

function renderTestimonials() {
  if (!testimonialGrid) return;

  testimonialGrid.innerHTML = siteConfig.testimonials.map(item => `
    <article class="testimonial-card reveal premium-float">
      <p>“${item.quote}”</p>
      <div class="testimonial-footer">
        <strong>${item.name}</strong>
        <p>${item.role}</p>
      </div>
    </article>
  `).join("");
}

function bindFilters() {
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function applyConfig() {
  document.title = `${siteConfig.name} — ${siteConfig.role}`;

  const profileName = document.getElementById("profileName");
  const heroDesc = document.getElementById("heroDesc");
  const emailText = document.getElementById("emailText");
  const waText = document.getElementById("waText");
  const locationText = document.getElementById("locationText");
  const contactButton = document.getElementById("contactButton");
  const githubButton = document.getElementById("githubButton");
  const cvButton = document.getElementById("cvButton");
  const waFloat = document.getElementById("waFloat");
  const profilePhoto = document.getElementById("profilePhoto");
  const yearNow = document.getElementById("yearNow");
  const socialWrap = document.getElementById("socialLinks");

  if (profileName) profileName.textContent = siteConfig.name;
  if (heroDesc) heroDesc.textContent = siteConfig.shortBio;
  if (emailText) emailText.textContent = siteConfig.email;
  if (waText) waText.textContent = siteConfig.whatsapp;
  if (locationText) locationText.textContent = siteConfig.location;
  if (contactButton) contactButton.href = siteConfig.whatsappLink;
  if (githubButton) githubButton.href = siteConfig.github;
  if (cvButton) cvButton.href = siteConfig.cvLink;
  if (waFloat) waFloat.href = siteConfig.whatsappLink;
  if (profilePhoto) profilePhoto.src = siteConfig.profilePhoto;
  if (yearNow) yearNow.textContent = new Date().getFullYear();

  if (socialWrap) {
    socialWrap.innerHTML = siteConfig.socials.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>
    `).join("");
  }
}

function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.setAttribute("data-theme", savedTheme);

  btn.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
  });
}

function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

function bindPreviewButtons() {
  const modal = document.getElementById("previewModal");
  const frame = document.getElementById("previewFrame");
  const title = document.getElementById("previewTitle");
  const wrap = document.getElementById("previewFrameWrap");

  if (!modal || !frame || !title || !wrap) return;

  document.querySelectorAll(".preview-trigger").forEach(button => {
    button.addEventListener("click", () => {
      title.textContent = button.dataset.title || "Preview Project";
      frame.src = button.dataset.url || "";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      wrap.className = "preview-frame-wrap desktop";

      document.querySelectorAll(".device-btn").forEach(btn => btn.classList.remove("active"));
      const desktopBtn = document.querySelector('[data-device="desktop"]');
      if (desktopBtn) desktopBtn.classList.add("active");
    });
  });
}

function initPreviewModal() {
  const modal = document.getElementById("previewModal");
  const frame = document.getElementById("previewFrame");
  const closeBtn = document.getElementById("previewClose");
  const backdrop = document.getElementById("previewBackdrop");
  const wrap = document.getElementById("previewFrameWrap");

  if (!modal || !frame || !closeBtn || !backdrop || !wrap) return;

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    frame.src = "";
  }

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  document.querySelectorAll(".device-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".device-btn").forEach(item => item.classList.remove("active"));
      btn.classList.add("active");
      wrap.className = `preview-frame-wrap ${btn.dataset.device}`;
    });
  });
}

function initTypingRole() {
  const typingTarget = document.getElementById("typingRoleText");
  if (!typingTarget || !siteConfig.typingRoles || !siteConfig.typingRoles.length) return;

  const words = siteConfig.typingRoles;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentWord = words[wordIndex];
    typingTarget.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      speed = 1400;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 320;
    }

    setTimeout(typeLoop, speed);
  }

  typeLoop();
}

applyConfig();
renderSkills();
renderFilters();
renderProjects();
renderCertificates();
renderTimeline();
renderTestimonials();
bindFilters();
initTheme();
initMenu();
initHeader();
initPreviewModal();
initReveal();
initTypingRole();
