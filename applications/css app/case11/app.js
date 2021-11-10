const app = {
    selector: {
        menuButton: "[menu-button]",
        menu: "[menu]",
        searchButton: "[search-button]",
        search: "[search]",
        mobileMenu: "[mobile-menu]"
    },

    init: () => {
        app.mobileMenu();
        app.mobileSearch();
        app.calcMobileMenuHeight();
    },

    mobileSearch: () => {
        const button = document.querySelector(app.selector.searchButton);
        const search = document.querySelector(app.selector.search);

        if(button) {
            button.addEventListener('click', () => {
                search.classList.toggle("hidden");
            });
        }
    },

    mobileMenu: () => {
        const button = document.querySelector(app.selector.menuButton);
        const menu = document.querySelector(app.selector.menu);

        if(button) {
            button.addEventListener('click', () => {
                menu.classList.toggle("-left-full");
                menu.classList.toggle("left-0");
            });
        }
    },

    calcMobileMenuHeight: () => {
        document.querySelector("main").style.paddingBottom = document.querySelector(app.selector.mobileMenu).offsetHeight + 10 + "px";
    }
};

window.addEventListener('load', () => {
    if(window.matchMedia("(max-width: 1024px)").matches) {
        app.init();
    }
});