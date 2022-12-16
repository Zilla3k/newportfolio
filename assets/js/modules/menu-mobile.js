import outsideClick from './click-outside.js';

export default class MenuMobile {
  constructor(menuButton, menuList, classElement, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    // define o evento padrao ou a ser definida pelo dev
    if (classElement === undefined) {
      this.activeClass = 'active';
    } else {
      this.activeClass = classElement;
    }

    // define o evento padrao ou a ser definida pelo dev
    this.events = ['click', 'touchstart'];

    if (events === undefined) {
      this.events;
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuButtonEvent() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuButtonEvent();
    }
  }
}
