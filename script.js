document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Aktualizacja roku w stopce
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Animacja pojawiania się sekcji (Intersection Observer)
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // element musi być w 10% widoczny, żeby odpalić animację
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animuj tylko raz
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. TŁUMACZENIA (DICTIONARY) ---
    const translations = {
        pl: {
            nav_about: "O mnie",
            nav_projects: "Projekty",
            nav_exp: "Doświadczenie",
            nav_contact: "Kontakt",
            
            hero_greeting: "Cześć, jestem",
            hero_role: "Backend Developer & Student AGH",
            hero_bio: "Jestem studentem Inżynierii Obliczeniowej na AGH. Na co dzień programuję, a w wolnych chwilach działam w samorządzie studenckim. Pasjonują mnie symulacje zjawisk fizycznych. Specjalizuję się w programowaniu w <strong>C/C++</strong> oraz <strong>Javie</strong>.",
            btn_cv: "Pobierz CV",
            btn_contact: "Kontakt",
            
            section_projects: "Moje Projekty",
            
            proj_easyfem_desc: "Aplikacja do symulacji nagrzewania materiału metodą elementów skończonych. Umożliwia tworzenie siatki, definiowanie danych materiałowych i warunków brzegowych oraz wizualizację wyników w czasie.",
            
            proj_fire_title: "Symulacja pożaru lasu",
            proj_fire_desc: "Symulacja oparta o automaty komórkowe. Program wczytuje mapę terenu z pliku PNG i uwzględnia czynniki takie jak kierunek wiatru, wilgotność powietrza oraz ukształtowanie terenu.",
            
            proj_blog_desc: "Platforma blogowa z pełnym uwierzytelnianiem (JWT, Spring Security). Użytkownicy mogą zakładać konta, logować się oraz zarządzać swoimi postami na tablicy głównej.",
            
            proj_edi_desc: "Prosty edytor tekstu oparty o terminal, obsługujący podstawowe operacje. Tylko na system Linux.",
            
            proj_flash_title: "Generator Fiszek",
            proj_flash_desc: "Prosta strona generująca fiszki na podstawie pliku Json. Strona jest hostowana jako github page.",
            
            link_code: "Zobacz kod",
            link_demo: "Przetestuj",
            
            section_exp: "Doświadczenie",
            date_present: "2024 - Obecnie",
            
            exp_gov_vice: "Zastępca Przewodniczącej",
            exp_gov_place: "Wydziałowa Rada Samorządu Studentów WIMiIP (AGH)",
            exp_gov_vice_desc: "Zarządzanie zespołem, koordynacja projektów studenckich oraz reprezentowanie studentów w kontaktach z władzami wydziału.",
            
            exp_gov_mem: "Członek Samorządu",
            exp_gov_mem_desc: "Aktywny udział w organizacji wydarzeń kulturalnych i naukowych dla społeczności akademickiej.",
            
            exp_gls_role: "Magazynier",
            exp_gls_desc: "Logistyka i przygotowywanie przesyłek w centrum przeładunkowym. Praca pod presją czasu.",
            
            section_contact: "Kontakt",
            contact_cta: "Szukasz programisty C++/Java do projektu? Napisz do mnie.",
            contact_email: "Napisz e-mail",
            rights: "Wszelkie prawa zastrzeżone."
        },
        en: {
            nav_about: "About",
            nav_projects: "Projects",
            nav_exp: "Experience",
            nav_contact: "Contact",
            
            hero_greeting: "Hi, I'm",
            hero_role: "Backend Developer & AGH Student",
            hero_bio: "I am a Computational Engineering student at AGH University. I program daily, and in my free time, I am active in the student government. I am passionate about physical simulations. I specialize in <strong>C/C++</strong> and <strong>Java</strong>.",
            btn_cv: "Download CV",
            btn_contact: "Contact me",
            
            section_projects: "My Projects",
            
            proj_easyfem_desc: "Application for simulating material heating using the finite element method. It allows mesh creation, defining material data and boundary conditions, and visualizing results over time.",
            
            proj_fire_title: "Forest Fire Simulation",
            proj_fire_desc: "Simulation based on cellular automata. The program loads a terrain map from a PNG file and considers factors such as wind direction, air humidity, and terrain topography.",
            
            proj_blog_desc: "Blog platform with full authentication (JWT, Spring Security). Users can create accounts, log in, and manage their posts on the main dashboard.",
            
            proj_edi_desc: "Simple terminal-based text editor supporting basic operations. Linux only.",
            
            proj_flash_title: "Flashcards Generator",
            proj_flash_desc: "Simple website generating flashcards based on a JSON file. Hosted as a GitHub Page.",
            
            link_code: "View Code",
            link_demo: "Live Demo",
            
            section_exp: "Experience",
            date_present: "2024 - Present",
            
            exp_gov_vice: "Deputy Chair",
            exp_gov_place: "Faculty Student Government Council WIMiIP (AGH)",
            exp_gov_vice_desc: "Team management, coordination of student projects, and representing students in contacts with faculty authorities.",
            
            exp_gov_mem: "Council Member",
            exp_gov_mem_desc: "Active participation in organizing cultural and scientific events for the academic community.",
            
            exp_gls_role: "Warehouse Associate",
            exp_gls_desc: "Logistics and parcel preparation in a transshipment center. Working under time pressure.",
            
            section_contact: "Contact",
            contact_cta: "Looking for a C++/Java developer? Get in touch.",
            contact_email: "Send e-mail",
            rights: "All rights reserved."
        }
    };

    // --- 2. LOGIKA ZMIANY JĘZYKA ---
    const langToggleBtn = document.getElementById("lang-toggle");
    let currentLang = localStorage.getItem("lang") || "pl"; // Domyślnie PL lub zapisany

    // Funkcja aktualizująca teksty
    const updateTexts = (lang) => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                // Używamy innerHTML, żeby zachować tagi <strong> itp.
                el.innerHTML = translations[lang][key]; 
            }
        });
        
        // Zmień tekst na przycisku
        langToggleBtn.textContent = lang === "pl" ? "EN" : "PL";
    };

    // Inicjalizacja przy starcie
    updateTexts(currentLang);

    // Obsługa kliknięcia
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "pl" ? "en" : "pl";
        localStorage.setItem("lang", currentLang); // Zapamiętaj wybór
        updateTexts(currentLang);
    });

    // --- 3. RESZTA LOGIKI (ROK, SCROLL) ---
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section);
    });
});