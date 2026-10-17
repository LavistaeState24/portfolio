async function loadNavbar() {
  const currentHeader = document.querySelector('header');
  if (!currentHeader) {
    throw new Error('Could not find a header element to replace with the shared navbar.');
  }

  const navbarUrl = new URL('components/navbar.html', document.currentScript.src);
  const response = await fetch(navbarUrl);
  if (!response.ok) {
    throw new Error(`Could not load the shared navbar: ${response.status} ${response.statusText}`);
  }

  const template = document.createElement('template');
  template.innerHTML = await response.text();
  const navbar = template.content.querySelector('#siteHeader');
  if (!navbar) {
    throw new Error('The shared navbar component does not contain #siteHeader.');
  }

  currentHeader.replaceWith(navbar);
  initializeNavbar(navbar);
}

function initializeNavbar(navbar) {
  const menuButton = navbar.querySelector('#menuBtn');
  const mobileMenu = navbar.querySelector('#mobileMenu');
  const mobileBreakpoint = window.matchMedia('(min-width: 1024px)');

  const setMenuOpen = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.dataset.open = String(open);
    mobileMenu.dataset.open = String(open);
    mobileMenu.classList.toggle('pointer-events-auto', open);
    mobileMenu.classList.toggle('pointer-events-none', !open);
    mobileMenu.classList.toggle('opacity-100', open);
    mobileMenu.classList.toggle('opacity-0', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  mobileBreakpoint.addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });

  navbar.querySelectorAll('[data-dropdown]').forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    const panel = dropdown.querySelector('[data-dropdown-panel]');
    const setDropdownOpen = (open) => {
      trigger.setAttribute('aria-expanded', String(open));
      panel.dataset.open = String(open);
    };

    trigger.addEventListener('click', () => {
      setDropdownOpen(trigger.getAttribute('aria-expanded') !== 'true');
    });
    dropdown.addEventListener('focusout', (event) => {
      if (!dropdown.contains(event.relatedTarget)) setDropdownOpen(false);
    });
  });

  navbar.querySelectorAll('[data-mobile-dd]').forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-mobile-dd-trigger]');
    const panel = dropdown.querySelector('[data-mobile-dd-panel]');
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(open));
      panel.dataset.open = String(open);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      navbar.querySelectorAll('[data-dropdown-trigger]').forEach((trigger) => {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.nextElementSibling?.removeAttribute('data-open');
      });
    }
  });

  const currentPath = window.location.pathname.toLowerCase();
  navbar.querySelectorAll('[data-nav]').forEach((link) => {
    const linkPath = new URL(link.getAttribute('href'), window.location.href).pathname.toLowerCase();
    if (linkPath === currentPath) {
      link.dataset.active = 'true';
      link.setAttribute('aria-current', 'page');
    }
  });

  const headerBar = navbar.querySelector('[data-header-bar]');
  const updateScrolledState = () => {
    headerBar.dataset.scrolled = String(window.scrollY > 8);
  };
  window.addEventListener('scroll', updateScrolledState, { passive: true });
  updateScrolledState();
}

loadNavbar().catch((error) => {
  console.error('Failed to initialize the shared navbar.', error);
});
