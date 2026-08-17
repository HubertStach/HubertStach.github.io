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
            hero_bio: "Jestem studentem Inżynierii Obliczeniowej na AGH. Na co dzień programuję, a w wolnych chwilach działam w samorządzie studenckim. Pasjonują mnie symulacje zjawisk fizycznych. Programuję głównie w <strong>C/C++</strong>, <strong>Javie</strong> i <strong>Pythonie</strong>.",
            btn_cv: "Pobierz CV",
            btn_contact: "Kontakt",
            
            section_projects: "Moje Projekty",
            
            proj_easyfem_desc: "Aplikacja symulująca nieustalone przewodzenie ciepła w 2D metodą elementów skończonych. Własny solver FEM oraz generacja siatki oparta na triangulacji Delaunaya. Obliczenia na bibliotece Eigen, wizualizacja wyników w oknie (ImGui + Raylib), a operacje liczone asynchronicznie, by nie blokować UI.",

            proj_fire_title: "Symulacja pożaru lasu",
            proj_fire_desc: "Symulacja oparta o automaty komórkowe. Program wczytuje mapę terenu z pliku PNG i uwzględnia czynniki takie jak kierunek wiatru, wilgotność powietrza oraz ukształtowanie terenu.",

            proj_blog_desc: "REST API do obsługi postów (CRUD z paginacją i wyszukiwaniem). Rejestracja i logowanie użytkowników z uwierzytelnianiem JWT oraz kontrolą dostępu opartą na rolach (RBAC). Wdrożone przez Docker Compose (PostgreSQL + kontener aplikacji).",

            proj_latexflat_desc: "Narzędzie CLI w Pythonie, które spłaszcza wieloplikowe repozytorium LaTeX do jednego pliku .tex. Opublikowane na PyPI, instalowane przez pip.",

            proj_edi_desc: "Prosty edytor tekstu oparty o terminal, obsługujący podstawowe operacje. Tylko na system Linux.",
            
            proj_flash_title: "Generator Fiszek",
            proj_flash_desc: "Prosta strona generująca fiszki na podstawie pliku Json. Strona jest hostowana jako github page.",
            
            link_code: "Zobacz kod",
            link_demo: "Przetestuj",
            
            section_exp: "Doświadczenie",
            date_present: "2024 - Obecnie",
            date_pega: "Lipiec 2026 - Wrzesień 2026",

            exp_pega_role: "Performance & Resilience Engineer (Praktyka)",
            exp_pega_desc: "Praca nad pipeline'ami CI/CD (Jenkins, GitHub Actions) – testowanie i wdrażanie nowych funkcji. Diagnozowanie problemów na poziomie usług oraz wdrożenie narzędzia Speedscale do nagrywania, mockowania i testowania usług.",

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
            hero_bio: "I am a Computational Engineering student at AGH University. I program daily, and in my free time, I am active in the student government. I am passionate about physical simulations. I mainly program in <strong>C/C++</strong>, <strong>Java</strong> and <strong>Python</strong>.",
            btn_cv: "Download CV",
            btn_contact: "Contact me",
            
            section_projects: "My Projects",
            
            proj_easyfem_desc: "Application simulating transient 2D heat conduction using the finite element method. Custom FEM solver and mesh generation based on Delaunay triangulation. Linear algebra powered by Eigen, in-window result visualization (ImGui + Raylib), with computations run asynchronously so the UI stays responsive.",

            proj_fire_title: "Forest Fire Simulation",
            proj_fire_desc: "Simulation based on cellular automata. The program loads a terrain map from a PNG file and considers factors such as wind direction, air humidity, and terrain topography.",

            proj_blog_desc: "REST API handling CRUD operations for posts, including pagination and search. User management with JWT authentication and role-based access control (RBAC). Deployed via Docker Compose (PostgreSQL + application container).",

            proj_latexflat_desc: "A Python CLI tool that flattens a multi-file LaTeX repository into a single .tex file. Published on PyPI, installable via pip.",

            proj_edi_desc: "Simple terminal-based text editor supporting basic operations. Linux only.",
            
            proj_flash_title: "Flashcards Generator",
            proj_flash_desc: "Simple website generating flashcards based on a JSON file. Hosted as a GitHub Page.",
            
            link_code: "View Code",
            link_demo: "Live Demo",
            
            section_exp: "Experience",
            date_present: "June 2024 - August 2026",
            date_pega: "July 2026 - September 2026",

            exp_pega_role: "Performance & Resilience Engineer Intern",
            exp_pega_desc: "Worked on CI/CD pipelines (Jenkins, GitHub Actions) – testing and implementing new features. Investigated and troubleshot service-level issues, and helped adopt Speedscale for recording, mocking and testing services.",

            exp_gov_vice: "Vice President",
            exp_gov_place: "WIMiIP Student Government, AGH University",
            exp_gov_vice_desc: "Leading a team of 20 people, running biweekly meetings and handling conflict resolution. Organized large-scale events: the 56th and 57th \"Metallurgist Rally\" (120–180 participants) and an orienteering race, coordinating logistics and teams under deadlines.",
            
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