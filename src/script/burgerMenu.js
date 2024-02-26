class OpenCloseMenu {
  constructor(selectorBurger, selectorMenu) {
    this.burgerMenu = document.querySelector(selectorBurger);
    this.menuNav = document.querySelector(selectorMenu);
    this.burgerMenu.addEventListener("click", this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuNav.classList.toggle("side-menu--open");
  }
}

const burgerMenu = new OpenCloseMenu(
  ".header-contact__hamburger-menu",
  ".side-menu"
);

const burgerCloseMenu = new OpenCloseMenu(
  ".side-menu__button-close-menu",
  ".side-menu"
);
