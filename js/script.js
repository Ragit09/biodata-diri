document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate on Scroll) - Simplified
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // 2. Navbar Background Change on Scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = '10px 0';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.padding = '15px 0';
        }
    });

    // 3. Scrollspy - Highlight navbar links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Jika kita di section hobbies, aktifkan link about (About & Hobbies)
            if (link.getAttribute('href').includes(current) || (current === 'hobbies' && link.getAttribute('href').includes('about'))) {
                link.classList.add('active');
            }
        });
    });

    // 4. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Header offset
                    behavior: 'smooth'
                });
            }
        });
    });
});
