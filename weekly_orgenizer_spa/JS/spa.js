const app = {
    pages: [],
    init: function () {
        app.pages = document.querySelectorAll('.page');
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'SignIn', '#signIn');
        window.addEventListener('popstate', app.poppin);
    },

    nav: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
    },
    navOpen: function (currentPage) {
        let activePage = document.querySelector('.active');
        activePage.classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        // document.getElementById(currentPage).dispatchEvent(app.show);
    },
    poppin: function (ev) {
        let hash = location.hash.replace('#', '');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', app.init);



