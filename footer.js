// components/site-footer.js
(() => {
  const FA_CDN = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

  const template = `
  <footer class="relative overflow-hidden border-t border-white/10 bg-[#090909] px-6 pt-16 pb-8 md:px-10 md:pt-24 md:pb-10" aria-label="Site footer">
    <div class="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"></div>
    <div class="pointer-events-none absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-accent-2/8 blur-[120px]"></div>

    <div class="relative mx-auto max-w-[1500px]">
      <!-- CTA -->
      <div class="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-12 md:items-end md:pb-20">
        <div class="md:col-span-8">
          <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">(Let's work together)</span>
          <h2 class="mt-4 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
            Have a project<br />in mind?
          </h2>
        </div>
        <div class="md:col-span-4 md:justify-self-end">
          <a href="/contact.html"
             class="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:border-accent hover:text-white hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
            Start a conversation
            <i class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <!-- Sitemap -->
      <div class="grid gap-12 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div class="lg:col-span-4">
          <a href="index.html" class="group relative flex items-center gap-3">
        <span
          class="pointer-events-none absolute -inset-4 rounded-full bg-accent/25 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"></span>
        <img src="./assets/scalixo.png" alt="Scalixo Media"
          class="relative h-8 w-auto object-contain transition-all duration-500 group-hover:brightness-110 md:h-9" />
      </a>
          <p class="mt-5 max-w-xs text-sm leading-6 text-white/50">
            Creative strategy and digital experiences built to move your brand forward.
            Performance marketing, content systems and funnels that compound.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/scalixo.media" aria-label="Instagram" class="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"><i class="fa-brands fa-instagram text-sm" aria-hidden="true"></i></a>

            <a href="https://www.linkedin.com/company/scalixomedia" aria-label="LinkedIn" class="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"><i class="fa-brands fa-linkedin-in text-sm" aria-hidden="true"></i></a>

            <a href="https://www.facebook.com/scalixo.media" aria-label="Facebook"
   class="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1877F2] hover:text-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.25)]">
  <i class="fa-brands fa-facebook-f text-sm" aria-hidden="true"></i>
</a>
          </div>
        </div>

        <nav class="lg:col-span-2" aria-label="Pages">
          <h3 class="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">Pages</h3>
          <ul class="mt-5 space-y-3 text-sm text-white/55">
            <li><a href="/index.html" class="transition-colors hover:text-white">Home</a></li>
            <li><a href="/about.html" class="transition-colors hover:text-white">About</a></li>
            <li><a href="/index.html#services" class="transition-colors hover:text-white">Services</a></li>
            <li><a href="/portfolio.html" class="transition-colors hover:text-white">Work</a></li>
            <li><a href="/contact.html" class="transition-colors hover:text-white">Contact</a></li>
          </ul>
        </nav>

        <nav class="lg:col-span-2" aria-label="Services">
          <h3 class="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">Services</h3>
          <ul class="mt-5 space-y-3 text-sm text-white/55">
            <li><a href="#" class="transition-colors hover:text-white">Brand Strategy</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Performance Marketing</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Social Media</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Web Design</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Content &amp; Creative</a></li>
          </ul>
        </nav>

        <nav class="lg:col-span-2" aria-label="Company">
          <h3 class="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">Company</h3>
          <ul class="mt-5 space-y-3 text-sm text-white/55">
            <li><a href="#" class="transition-colors hover:text-white">Our Story</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Process</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Careers</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Journal</a></li>
            <li><a href="#" class="transition-colors hover:text-white">FAQ</a></li>
          </ul>
        </nav>
      </div>

      <!-- Legal -->
      <div class="flex flex-col gap-5 pt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© <span data-year>2025</span> Scalixo Media Agency <span class="text-white/20">—</span> All rights reserved</span>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="/privacy.html" class="transition-colors hover:text-white">Privacy Policy</a>
          <a href="/terms.html" class="transition-colors hover:text-white">Terms of Service</a>
          <a href="#" class="transition-colors hover:text-white">Cookies</a>
          <a href="#top" class="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-accent">
            Back to top <i class="fa-solid fa-arrow-up text-[10px] transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Marquee -->
    <div class="pointer-events-none relative mt-10 select-none overflow-hidden" aria-hidden="true">
      <div class="flex w-max items-center gap-8 animate-[brand-marquee_45s_linear_infinite] motion-reduce:animate-none md:gap-12">
        <span class="whitespace-nowrap font-display text-[14vw] uppercase leading-[0.8] tracking-tighter text-white/[0.04] md:text-[10vw]">Scalixo Media</span>
        <i class="fa-solid fa-asterisk text-3xl text-accent-2/30 md:text-5xl"></i>
        <span class="whitespace-nowrap font-display text-[14vw] uppercase leading-[0.8] tracking-tighter text-white/[0.04] md:text-[10vw]">Scalixo Media</span>
        <i class="fa-solid fa-asterisk text-3xl text-accent-2/30 md:text-5xl"></i>
        <span class="whitespace-nowrap font-display text-[14vw] uppercase leading-[0.8] tracking-tighter text-white/[0.04] md:text-[10vw]">Scalixo Media</span>
        <i class="fa-solid fa-asterisk text-3xl text-accent-2/30 md:text-5xl"></i>
        <span class="whitespace-nowrap font-display text-[14vw] uppercase leading-[0.8] tracking-tighter text-white/[0.04] md:text-[10vw]">Scalixo Media</span>
        <i class="fa-solid fa-asterisk text-3xl text-accent-2/30 md:text-5xl"></i>
      </div>
    </div>
  </footer>`;

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      // inject markup once
      if (!this.dataset.ready) {
        this.innerHTML = template;
        this.dataset.ready = "true";
      }

      // inject Font Awesome if not present
      if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = FA_CDN;
        document.head.appendChild(link);
      }

      // inject marquee keyframes once
      if (!document.getElementById("brand-marquee-kf")) {
        const style = document.createElement("style");
        style.id = "brand-marquee-kf";
        style.textContent = `@keyframes brand-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`;
        document.head.appendChild(style);
      }

      // clock
      const clock = this.querySelector("[data-clock]");
      if (clock) {
        const tick = () => {
          clock.textContent = new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: false,
          });
        };
        tick();
        setInterval(tick, 1000);
      }

      // year
      const year = this.querySelector("[data-year]");
      if (year) year.textContent = new Date().getFullYear();
    }
  }

  if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
  }
})();