const siteConfig = {
  name: "Chio",
  brand: "Chio.dev",
  role: "Full-Stack Web Developer",
  shortBio: "Saya membantu membangun website, sistem POS, e-commerce, dan produk digital dengan tampilan elegan, cepat, dan fokus ke hasil bisnis.",
  email: "hello@chio.dev",
  whatsapp: "+62 812-3456-7890",
  whatsappLink: "https://wa.me/6281234567890",
  location: "Surabaya, Indonesia",
  cvLink: "#",
  github: "https://github.com/",
  socials: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Email", url: "mailto:hello@chio.dev" }
  ],
  skills: [
    "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap",
    "Tailwind CSS", "Responsive Design", "Dark Mode UI",
    "cPanel Deployment", "GitHub", "Vercel", "REST API",
    "POS System", "E-commerce", "Landing Page"
  ],
  filters: ["Semua", "Web App", "E-commerce", "POS", "UI/UX"],
  projects: [
    {
      title: "POS Kasir UMKM",
      category: "POS",
      desc: "Sistem kasir dengan manajemen produk, transaksi, stok, laporan penjualan, dan dashboard admin yang mudah dipahami.",
      tags: ["PHP", "MySQL", "Dashboard"],
      demo: "#",
      code: "#"
    },
    {
      title: "Website Toko Online",
      category: "E-commerce",
      desc: "Website katalog dan penjualan online dengan desain modern, mobile friendly, serta CTA yang fokus ke konversi.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      code: "#"
    },
    {
      title: "Portfolio Personal Premium",
      category: "UI/UX",
      desc: "Website personal brand dengan hero premium, section project, testimonial, FAQ, dan dark mode toggle.",
      tags: ["Vercel", "GitHub", "Responsive"],
      demo: "#",
      code: "#"
    },
    {
      title: "Dashboard Percetakan",
      category: "Web App",
      desc: "Aplikasi internal untuk manajemen pesanan, status produksi, invoice, dan monitoring progres kerja.",
      tags: ["Admin", "Table", "Workflow"],
      demo: "#",
      code: "#"
    },
    {
      title: "Landing Page Jasa",
      category: "UI/UX",
      desc: "Landing page premium untuk jasa profesional dengan copy yang lebih meyakinkan dan visual yang clean.",
      tags: ["SEO", "CTA", "Branding"],
      demo: "#",
      code: "#"
    },
    {
      title: "Sistem Order Produk",
      category: "Web App",
      desc: "Aplikasi custom order sederhana dengan data pelanggan, detail pesanan, status proses, dan rekap transaksi.",
      tags: ["Custom App", "Forms", "Reports"],
      demo: "#",
      code: "#"
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
  ],
  articles: [
    {
      title: "Cara bikin website personal yang tidak terlihat template",
      desc: "Fokus pada hierarchy, copy, spacing, dan section yang relevan untuk personal branding developer.",
      link: "#"
    },
    {
      title: "Landing page premium untuk jasa: elemen yang wajib ada",
      desc: "Mulai dari hero, credibility block, service cards, project showcase, hingga CTA yang kuat.",
      link: "#"
    },
    {
      title: "Deploy static portfolio ke GitHub dan Vercel",
      desc: "Workflow sederhana untuk upload source code, push repo, lalu publish website online dengan cepat.",
      link: "#"
    }
  ],
  faqs: [
    {
      q: "Apakah website ini mudah dikustomisasi?",
      a: "Ya. Semua data utama disimpan di objek siteConfig, jadi kamu cukup edit teks, link, project, skill, dan section tanpa ubah struktur besar."
    },
    {
      q: "Apakah cocok untuk GitHub dan Vercel?",
      a: "Cocok. Ini adalah static HTML, CSS, dan JavaScript, jadi sangat mudah di-upload ke repository GitHub lalu di-deploy ke Vercel."
    },
    {
      q: "Apakah bisa ditambah blog atau halaman lain?",
      a: "Bisa. Kamu dapat pecah jadi beberapa file HTML, atau migrasikan ke Next.js nanti kalau ingin lebih scalable."
    },
    {
      q: "Apakah bisa ganti warna dan font?",
      a: "Bisa banget. Tinggal ubah variabel CSS di bagian :root untuk warna, radius, shadow, dan nuansa desain."
    }
  ]
};

const skillCloud = document.getElementById("skillCloud");
const filterBar = document.getElementById("filterBar");
const projectsGrid = document.getElementById("projectsGrid");
const timelineList = document.getElementById("timelineList");
const testimonialGrid = document.getElementById("testimonialGrid");
const blogGrid = document.getElementById("blogGrid");
const faqList = document.getElementById("faqList");

function renderSkills() {
  skillCloud.innerHTML = siteConfig.skills
    .map(skill => `<span class="skill-pill">${skill}</span>`)
    .join("");
}

function renderFilters() {
  filterBar.innerHTML = siteConfig.filters
    .map((item, index) => `
      <button class="filter-btn ${index === 0 ? "active" : ""}" data-filter="${item}">
        ${item}
      </button>
    `).join("");
}

function renderProjects(filter = "Semua") {
  const data = filter === "Semua"
    ? siteConfig.projects
    : siteConfig.projects.filter(project => project.category === filter);

  projectsGrid.innerHTML = data.map(project => `
    <article class="project-card reveal show">
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
          <a class="text-link" href="${project.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a class="text-link" href="${project.code}" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
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
  testimonialGrid.innerHTML = siteConfig.testimonials.map(item => `
    <article class="testimonial-card reveal">
      <p>“${item.quote}”</p>
      <div class="testimonial-footer">
        <strong>${item.name}</strong>
        <p>${item.role}</p>
      </div>
    </article>
  `).join("");
}

function renderArticles() {
  blogGrid.innerHTML = siteConfig.articles.map(item => `
    <article class="blog-card reveal">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div style="margin-top:18px;">
        <a class="text-link" href="${item.link}" target="_blank" rel="noopener noreferrer">Baca selengkapnya</a>
      </div>
    </article>
  `).join("");
}

function renderFaq() {
  faqList.innerHTML = siteConfig.faqs.map((item, index) => `
    <article class="faq-item reveal">
      <button class="faq-question" data-faq="${index}">
        <span>${item.q}</span>
        <span>+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </article>
  `).join("");
}

function bindFaq() {
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.maxHeight;

      document.querySelectorAll(".faq-answer").forEach(item => item.style.maxHeight = null);
      document.querySelectorAll(".faq-question span:last-child").forEach(el => el.textContent = "+");

      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        button.querySelector("span:last-child").textContent = "−";
      }
    });
  });
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
  document.getElementById("profileName").textContent = siteConfig.name;
  document.getElementById("profileRole").textContent = siteConfig.role;
  document.getElementById("heroDesc").textContent = siteConfig.shortBio;
  document.getElementById("emailText").textContent = siteConfig.email;
  document.getElementById("waText").textContent = siteConfig.whatsapp;
  document.getElementById("locationText").textContent = siteConfig.location;
  document.getElementById("contactButton").href = siteConfig.whatsappLink;
  document.getElementById("githubButton").href = siteConfig.github;
  document.getElementById("cvButton").href = siteConfig.cvLink;
  document.getElementById("yearNow").textContent = new Date().getFullYear();

  const socialWrap = document.getElementById("socialLinks");
  socialWrap.innerHTML = siteConfig.socials.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>
  `).join("");
}

function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const saved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.setAttribute("data-theme", saved);

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
  });
}

function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

function initHeader() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

applyConfig();
renderSkills();
renderFilters();
renderProjects();
renderTimeline();
renderTestimonials();
renderArticles();
renderFaq();
bindFilters();
bindFaq();
initTheme();
initMenu();
initHeader();
initReveal();
