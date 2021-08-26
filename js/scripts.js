

window.addEventListener('DOMContentLoaded', event => {

    
    const token = "EAAakJDuiZCGkBAC96fi6IGd9SRchS2wpeZCLhDvf1cznLCPhdI4q56KG2rhd6AJrP7YvmxWqo3tRCkxasuh1g6B4AZCmk4JNdZBlRd1IHWaq4UI8WBa2k48XOlB4fZBGygUhYFeW4sHeWCKfwCSUWkFZCFAN2uL66podEuGZBtZBHOTW4veiIm6RfQv6T79QO4R6EZCyB0DDltcllM6pkg0R1cSgubZBSi4EHSqkZAXMbg9k7bvh8nPFG9kRSKfFg4ILOcZD";
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink";
                
    console.log("token"+token);
    
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

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
                
             
  
     
});

