fetch('navbar.html')
    .then(res => res.text())
    .then(html => document.getElementById('navbar-placeholder').innerHTML = html);

fetch('footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer-placeholder').innerHTML = html);

// Handle mobile menu toggle and dropdown clicks using event delegation
document.addEventListener('click', function (e) {
    // 1. Mobile Menu Toggle
    const toggleBtn = e.target.closest('.navbar-toggle');
    if (toggleBtn) {
        const navbarMenu = document.getElementById('navbarMenu');
        if (navbarMenu) {
            navbarMenu.classList.toggle('navbar-menu-active');
        }
        return;
    }

    // Handle mobile dropdown clicks (Resources)
    const dropdownItem = e.target.closest('.dropdown');

    // Ensure we don't block clicks on actual dropdown sub-links (IFU, Brochures, Whitepapers)
    const isSubLink = e.target.closest('.dropdown-menu a');

    if (dropdownItem && !isSubLink && window.innerWidth <= 992) {
        const anchor = dropdownItem.querySelector('a');
        const clickedOnAnchor = (e.target === anchor || anchor.contains(e.target));

        // If it's not active, open the dropdown and prevent navigation
        if (!dropdownItem.classList.contains('active')) {
            e.preventDefault();
            dropdownItem.classList.add('active');
        } else {
            // If it is active, and they clicked the link, let it navigate!
            if (!clickedOnAnchor) {
                dropdownItem.classList.remove('active');
            }
        }
    }
});
