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

    // 5. Hobby Modal Logic
    const hobbiesData = {
        'Sepak Bola': {
            image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop',
            description: 'Bermain sepak bola melatih kerja sama tim, strategi, dan menjaga kebugaran fisik.'
        },
        'Futsal': {
            image: 'assets/img/futsal.png',
            description: 'Futsal adalah rutinitas olahraga yang menyenangkan untuk menjaga stamina dan refleks yang cepat.'
        },
        'Basket': {
            image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
            description: 'Bermain basket membangun kedisiplinan, fokus, dan koordinasi yang baik.'
        },
        'Game': {
            image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop',
            description: 'Bermain game bukan sekadar hiburan, tapi juga melatih problem solving dan pemikiran taktis.'
        },
        'Desain Visual': {
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
            description: 'Menciptakan karya visual yang menarik dan komunikatif untuk berbagai kebutuhan.'
        },
        'Editing Video': {
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
            description: 'Merangkai momen dan visual menjadi cerita yang menarik melalui proses editing.'
        },
        'Bisnis': {
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
            description: 'Mengeksplorasi strategi bisnis dan mengamati perkembangan pasar untuk inovasi baru.'
        },
        'Coding': {
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
            description: 'Mengubah ide menjadi kenyataan melalui baris-baris kode dan logika pemrograman.'
        }
    };

    const hobbyBadges = document.querySelectorAll('.hobby-badge');
    const hobbyModalEl = document.getElementById('hobbyModal');
    
    if (hobbyModalEl) {
        const hobbyModalInstance = new bootstrap.Modal(hobbyModalEl);
        const hobbyModalLabel = document.getElementById('hobbyModalLabel');
        const hobbyImage = document.getElementById('hobbyImage');
        const hobbyDescription = document.getElementById('hobbyDescription');

        hobbyBadges.forEach(badge => {
            // Ubah kursor jadi pointer agar terlihat bisa diklik
            badge.style.cursor = 'pointer';
            
            badge.addEventListener('click', () => {
                const hobbyName = badge.textContent.trim();
                const data = hobbiesData[hobbyName];
                
                if (data) {
                    hobbyModalLabel.textContent = hobbyName;
                    hobbyImage.src = data.image;
                    hobbyDescription.textContent = data.description;
                    hobbyModalInstance.show();
                }
            });
        });
    }

    // 6. Project Modal Logic
    const projectCards = document.querySelectorAll('.project-card');
    const projectModalEl = document.getElementById('projectModal');
    
    if (projectModalEl) {
        const projectModalInstance = new bootstrap.Modal(projectModalEl);
        const projectModalLabel = document.getElementById('projectModalLabel');
        const projectImage = document.getElementById('projectImage');
        const projectTechStack = document.getElementById('projectTechStack');
        const projectDescription = document.getElementById('projectDescription');
        const projectGithub = document.getElementById('projectGithub');
        const projectLive = document.getElementById('projectLive');

        const projectsData = {
            'edufunkids': {
                title: 'Edufunkids',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
                description: 'Web edukasi interaktif untuk anak-anak yang dirancang dengan metode pembelajaran yang menyenangkan. Dilengkapi dengan materi bergambar, kuis interaktif, dan animasi menarik.',
                tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                github: 'https://github.com/Ragit09',
                live: '#'
            },
            'finflow': {
                title: 'Finflow',
                image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
                description: 'Aplikasi manajemen keuangan modern untuk memantau arus kas, pengeluaran, dan pemasukan. Memiliki fitur visualisasi data berbentuk grafik yang mudah dipahami.',
                tech: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js'],
                github: 'https://github.com/Ragit09',
                live: '#'
            },
            'ipb': {
                title: 'IPB Web App',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?q=80&w=1000&auto=format&fit=crop',
                description: 'Sistem Instruksi Pemindahan Barang (IPB) untuk PTPN 4. Dibangun untuk mengoptimalkan alur distribusi dan pencatatan pemindahan barang secara digital dan akurat.',
                tech: ['Laravel', 'MySQL', 'Bootstrap'],
                github: 'https://github.com/Ragit09',
                live: '#'
            },
            'akademic': {
                title: 'Akademic Data',
                image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
                description: 'Platform manajemen data nilai mahasiswa. Memudahkan dosen dalam menginput nilai dan mahasiswa untuk melihat rekapitulasi hasil studi secara real-time.',
                tech: ['PHP', 'MySQL', 'CSS'],
                github: 'https://github.com/Ragit09',
                live: '#'
            }
        };

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                const data = projectsData[projectId];
                
                if (data) {
                    projectModalLabel.textContent = data.title;
                    projectImage.src = data.image;
                    projectDescription.textContent = data.description;
                    
                    projectTechStack.innerHTML = '';
                    data.tech.forEach(tech => {
                        const span = document.createElement('span');
                        span.className = 'badge bg-accent-soft px-3 py-2';
                        span.textContent = tech;
                        projectTechStack.appendChild(span);
                    });

                    projectGithub.href = data.github;
                    if(data.live === '#') {
                        projectLive.style.display = 'none';
                    } else {
                        projectLive.style.display = 'inline-flex';
                        projectLive.href = data.live;
                    }
                    
                    projectModalInstance.show();
                }
            });
        });
    }

    // 7. Contact Form Logic (WhatsApp)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman
            
            const name = this.name.value;
            const email = this.email.value;
            const message = this.message.value;
            
            // GANTI NOMOR INI DENGAN NOMOR WA KAMU (Gunakan awalan 62 tanpa tanda + atau angka 0)
            const whatsappNumber = "6287887242409"; 
            
            // Format pesan agar rapi di WA
            const text = `Halo Ragit,\nSaya ${name} (${email}) menghubungi dari website portofolio Anda.\n\n*Pesan:*\n${message}`;
            const encodedText = encodeURIComponent(text);
            
            // Membuka tab baru ke WhatsApp
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            window.open(whatsappUrl, '_blank');
            
            // Reset form setelah dikirim
            this.reset();
        });
    }
});
