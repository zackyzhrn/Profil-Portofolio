window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    //const sideNav = document.body.querySelector('#sideNav');
    //if (sideNav) {
      //  new bootstrap.ScrollSpy(document.body, {
        //    target: '#sideNav',
          //  rootMargin: '0px 0px -40%',
        //});
    //};

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Script untuk preview gambar
    document.querySelectorAll('#licenceGallery img').forEach(function(img) {
        img.addEventListener('click', function() {
            document.getElementById('imgModalSrc').src = this.src;
            var modal = new bootstrap.Modal(document.getElementById('imgModal'));
            modal.show();
        });
    });

    // Script untuk preview gambar Experience
    document.querySelectorAll('#experienceGallery img').forEach(function(img) {
        img.addEventListener('click', function() {
            document.getElementById('imgModalSrc').src = this.src;
            var modal = new bootstrap.Modal(document.getElementById('imgModal'));
            modal.show();
        });
    });

});
