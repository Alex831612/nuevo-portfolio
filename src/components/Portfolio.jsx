import React, { useState, useRef, useEffect, useMemo, useCallback, Suspense, lazy } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Navigation from './layout/Navigation';
import HeroSection from './sections/HeroSection';
const ProgressBar = lazy(() => import('./layout/ProgressBar'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

const Portfolio = () => {
  // Estado para modo oscuro con persistencia en localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
        
    try {
      const stored = localStorage.getItem('darkMode'); 
      if (stored !== null) {
        return JSON.parse(stored);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.error('Error reading darkMode from localStorage:', error);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });
    
  // Estado para la sección actual con optimización de rendimiento
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
    
  // Hook de Framer Motion para el progreso del scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false
  });

  // Definición de secciones con useMemo para evitar recreación en cada render
  const sections = useMemo(() => [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ], []);

  // Función para alternar el modo oscuro con manejo de errores
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode;
            
      try {
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      } catch (error) {
        console.error('Error saving darkMode to localStorage:', error);
      }
            
      return newDarkMode;
    });
  }, []);

  // Función para desplazar a una sección específica
  const scrollToSection = useCallback((index) => {
    const sectionId = sections[index]?.id;
    const element = document.getElementById(sectionId);
        
    if (element) {
      const offset = 80;
      const elementTop = element.offsetTop - offset;
            
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
        
    setCurrentSection(index);
  }, [sections]);

  // Efecto para aplicar el modo oscuro al HTML
  useEffect(() => {
    const htmlElement = document.documentElement;
        
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
        
    return () => {};
  }, [darkMode]);

  // Efecto para observar las secciones y actualizar la sección actual
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sections.findIndex(
            section => section.id === entry.target.id
          );
          if (sectionIndex !== -1) {
            setCurrentSection(sectionIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Efecto para manejar atajos de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Alt + D para toggle dark mode
      if (event.altKey && event.key === 'd') {
        event.preventDefault();
        toggleDarkMode();
      }
            
      // ArrowDown para ir a la siguiente sección
      if (event.key === 'ArrowDown' && event.ctrlKey) {
        event.preventDefault();
        const nextSection = Math.min(currentSection + 1, sections.length - 1);
        scrollToSection(nextSection);
      }
            
      // ArrowUp para volver a la sección anterior
      if (event.key === 'ArrowUp' && event.ctrlKey) {
        event.preventDefault();
        const prevSection = Math.max(currentSection - 1, 0);
        scrollToSection(prevSection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, toggleDarkMode, scrollToSection, sections.length]);

  // Componente de Loading
  const SectionSkeleton = () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div 
        ref={containerRef}
        className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white transition-all duration-700 ease-out overflow-x-hidden"
        role="main"
        aria-label="Portfolio principal"
      >
        <Navigation 
          currentSection={currentSection}
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />             
        
        <Suspense fallback={<SectionSkeleton />}>
          <ProgressBar scrollYProgress={scrollYProgress} />
        </Suspense>

        <main>
          <section id="hero" aria-label="Sección principal - Presentación">
            <HeroSection 
              scrollToSection={scrollToSection}
            />
          </section>

          <Suspense fallback={<SectionSkeleton />}>
            <section id="about" aria-label="Acerca de mí">
              <AboutSection />
            </section>
          </Suspense>
        
          <Suspense fallback={<SectionSkeleton />}>
            <section id="projects" aria-label="Mis proyectos">
              <ProjectsSection />
            </section>
          </Suspense>
        
          <Suspense fallback={<SectionSkeleton />}>
            <section id="contact" aria-label="Información de contacto">
              <ContactSection />
            </section>
          </Suspense>
        </main>

        {/* Botón de volver arriba */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 bg-blue-600 hover:bg-blue-700  dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-blue-300 opacity-0 pointer-events-none [&.visible]:opacity-100 [&.visible]:pointer-events-auto"
          style={{
            opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
            pointerEvents: scrollYProgress.get() > 0.1 ? 'auto' : 'none'
          }}
          aria-label="Volver al inicio"
          title="Volver arriba (Ctrl + ↑)"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
