let currentIndex = 0;
const serviceItems = document.querySelectorAll('.service-item');
const dots = document.querySelectorAll('.dot');

function showService(index) {
    // Ensure index is within bounds
    if (index < 0) {
        index = serviceItems.length - 1;
    } else if (index >= serviceItems.length) {
        index = 0;
    }

    // Hide all items and remove active class
    serviceItems.forEach((item, i) => {
        item.classList.remove('active');
    });

    // Show the selected item
    serviceItems[index].classList.add('active');

    // Update the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // Update the current index
    currentIndex = index;
}

// Add event listeners for the arrows
document.querySelector('.left-arrow').addEventListener('click', () => {
    showService(currentIndex - 1);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    showService(currentIndex + 1);
});

// Initialize the slider
showService(currentIndex);





// now navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.top-right-nav ul li a');

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.top-right-nav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});


// responsive
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
});


