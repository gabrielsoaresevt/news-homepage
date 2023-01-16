window.onload = function() {
    class MobileNavBar {
        constructor(mobileMenu, navMenu, navList) {
            this.mobileMenu = document.querySelectorAll(mobileMenu);
            this.navMenu = document.querySelector(navMenu);
            this.navList = document.querySelector(navList)
            this.activeClass = "active";
            this.handleClick = this.handleClick.bind(this);
            this.overflowY = true;
        }
        disableOverflowY() {
            document.body.style.overflowY = this.overflowY ? "hidden" : "visible";
            this.overflowY = !this.overflowY;
        }
        handleClick() {
            this.navMenu.classList.toggle(this.activeClass);
            this.navList.classList.toggle(this.activeClass);
            this.disableOverflowY();
        }
        addClickEvent() {
            this.mobileMenu.forEach((item) => {
                item.addEventListener("click", this.handleClick);
            });
        }
        init() {
            if(this.mobileMenu) {
                this.addClickEvent();
            }
            return this;
        }
    }
    const mobileNavBar = new MobileNavBar(
        ".mobile-menu",
        ".header__menu",
        ".header__menu__list"
    )
    mobileNavBar.init();
}

