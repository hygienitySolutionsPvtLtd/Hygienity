const pageLabels = {
  home: "index.html",
  technology: "technology.html",
  impact: "impact.html",
  "use-cases": "use-cases.html",
  "case-studies": "case-studies.html",
  about: "about.html",
  contact: "contact.html"
};

const navItems = [
  ["home", "Home"],
  ["technology", "Technology"],
  ["impact", "Impact"],
  ["use-cases", "Use Cases"],
  ["case-studies", "Case Studies"],
  ["about", "About / R&D"],
  ["contact", "Contact"]
];

function buildHeader(activeKey) {
  const desktopLinks = navItems.map(([key, label]) => {
    const activeClass = key === activeKey ? "nav-link active" : "nav-link";
    return `<a class="${activeClass}" href="${pageLabels[key]}">${label}</a>`;
  }).join("");

  const mobileLinks = navItems.map(([key, label]) => {
    const activeClass = key === activeKey
      ? "rounded-2xl bg-brand-50 px-4 py-3 font-semibold text-brand-700"
      : "rounded-2xl px-4 py-3 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700";
    return `<a class="${activeClass}" href="${pageLabels[key]}">${label}</a>`;
  }).join("");

  return `
    <header class="sticky top-0 z-50 px-4 pt-4">
      <div class="glass-nav mx-auto max-w-7xl rounded-[2rem] px-6 py-4">
        <div class="flex items-center justify-between gap-4">
          <a href="index.html" class="flex items-center gap-3">
            <span class="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 via-brand-500 to-violet-300 text-lg font-bold text-white shadow-soft">H</span>
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">Hygienity</p>
              <p class="text-sm text-slate-500">Solutions</p>
            </div>
          </a>
          <nav class="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            ${desktopLinks}
          </nav>
          <div class="flex items-center gap-3">
            <a href="contact.html" class="hidden rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 lg:inline-flex">Contact</a>
            <button id="mobile-menu-button" type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-brand-700 transition hover:bg-brand-50 lg:hidden" aria-label="Open navigation" aria-expanded="false">
              <span class="text-xl leading-none">+</span>
            </button>
          </div>
        </div>
        <div id="mobile-menu" class="hidden pt-4 lg:hidden">
          <div class="grid gap-2 rounded-3xl border border-brand-100 bg-white p-3 shadow-soft">
            ${mobileLinks}
          </div>
        </div>
      </div>
    </header>
  `;
}

function buildFooter() {
  return `
    <footer class="site-footer px-4 py-12 text-white">
      <div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">Hygienity Solutions</p>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-violet-50/85">Nanotechnology-based preventive coating solutions for toilets, basins, and sanitation systems. Currently in R&amp;D with pilots in progress.</p>
        </div>
        <div class="grid gap-3 text-sm text-violet-100">
          <a href="technology.html" class="transition hover:text-white">Technology</a>
          <a href="impact.html" class="transition hover:text-white">Impact</a>
          <a href="use-cases.html" class="transition hover:text-white">Use Cases</a>
          <a href="case-studies.html" class="transition hover:text-white">Case Studies</a>
          <a href="about.html" class="transition hover:text-white">About / R&amp;D</a>
          <a href="contact.html" class="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  const activePage = headerMount?.dataset.page || "home";

  if (headerMount) {
    headerMount.innerHTML = buildHeader(activePage);
  }

  if (footerMount) {
    footerMount.innerHTML = buildFooter();
  }

  const button = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  if (button && menu) {
    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      button.setAttribute("aria-expanded", String(!menu.classList.contains("hidden")));
    });
  }
});
