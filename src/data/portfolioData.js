
import { CodeIcon, ServerIcon, WrenchIcon, DatabaseIcon, PaletteIcon, SmartphoneIcon, MailIcon, GithubIcon, LinkedinIcon } from '../components/icons/Icons';

export const personalInfo = {
  name: "Alex Andres",
  fullTitle: "Hola, soy Alex",
  title: "Desarrollador Full-Stack",
  image: "/assets/images/perfil.webp",
  imageAbout: "/assets/images/programming.webp",
  location: "Viedma, Río Negro, Argentina",
  timezone: "America/Argentina/Buenos_Aires",
  status: "Disponible para proyectos",
  availableForWork: true,
};

export const skills = [
  { 
    name: 'Frontend', 
    icon: CodeIcon,
    technologies: 'HTML5, CSS3, JavaScript ES6+, React, Tailwind CSS, Vite, TypeScript, Bootstrap, Figma',
  },
  { 
    name: 'Backend', 
    icon: ServerIcon,
    technologies: 'Node.js, Express.js, Next.js, API REST',
  },
  { 
    name: 'Herramientas', 
    icon: WrenchIcon,
    technologies: 'Git, GitHub, Vercel, Netlify, VSCode, Claude AI, NPM, Yarn',
  },
  {
    name: 'Bases de Datos',
    icon: DatabaseIcon,
    technologies: 'MongoDB, PostgreSQL, MySQL, Supabase, Firebase Firestore',
  },
  {
    name: 'UI/UX Design',
    icon: PaletteIcon,
    technologies: 'Figma, Canva, Principios de UX, Design Systems, Responsive Design',
  },
  {
    name: 'Mobile Development',
    icon: SmartphoneIcon,
    technologies: 'React Native (básico), PWA, Mobile-First Design, Capacitor',
  }
];

export const projects = [
  {
    id: 'blogame',
    title: "BloGame",
    subtitle: "Blog moderno sobre videojuegos",
    description: "Un blog moderno y minimalista sobre videojuegos, construido con Next.js 15 y Tailwind CSS. Cuenta con un sistema de gestión de contenido basado en archivos Markdown, SEO optimizado y despliegue automático en Vercel.",
    fullDescription: "BloGame es una plataforma completa para amantes de los videojuegos que combina contenido de calidad con una experiencia de usuario excepcional. Implementé un sistema de gestión de contenido headless usando Markdown, optimización SEO avanzada y un diseño completamente responsivo.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript", "Markdown", "Vercel", "SEO"],
    image: "/assets/images/blogame.webp",
    link: "https://bloggame.vercel.app/",
    github: "https://github.com/Alex831612/blogame",
    status: "completed",
    featured: true,
    year: "2025",
    category: "Web Development",
    highlights: [
      "Sistema CMS con Markdown",
      "SEO optimizado",
      "Diseño responsive",
      "Performance 95+ en Lighthouse"
    ]
  },
  {
    id: 'portfolio',
    title: "Portfolio Personal",
    subtitle: "Portafolio interactivo con animaciones",
    description: "Mi portafolio personal, diseñado para mostrar mis proyectos y habilidades de manera atractiva. Utiliza React, Tailwind CSS y Framer Motion para crear animaciones fluidas y una experiencia de usuario excepcional.",
    fullDescription: "Este portafolio representa la culminación de mis habilidades en frontend development. Implementé animaciones complejas, un sistema de temas, navegación fluida y optimizaciones de performance para crear una experiencia memorable.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    image: "/assets/images/portfolio.webp",
    link: "https://alexandres.vercel.app/",
    github: "https://github.com/Alex831612/portfolio",
    status: "completed", 
    featured: true,
    year: "2025",
    category: "Portfolio",
    highlights: [
      "Animaciones con Framer Motion",
      "Modo oscuro/claro",
      "Diseño responsivo completo",
      "Performance optimizada"
    ]
  },
  {
    id: 'app-tareas',
    title: "Aplicación de Tareas",
    subtitle: "Gestor de tareas con React",
    description: "Gestor de tareas completo que permite a los usuarios crear, editar y eliminar tareas con una interfaz intuitiva. Utiliza localStorage para persistencia de datos y está optimizada para dispositivos móviles.",
    fullDescription: "Una aplicación de gestión de tareas construida desde cero con React y Tailwind CSS. Implementé funcionalidades completas de CRUD, filtrado por estados, búsqueda avanzada y un diseño completamente responsivo.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript ES6+", "React", "Vite", "LocalStorage"],
    image: "/assets/images/app-tareas.webp",
    link: "https://app-tareaas.netlify.app/",
    github: "https://github.com/Alex831612/app-tareas-react",
    status: "completed",
    featured: false,
    year: "2025",
    category: "Web App",
    highlights: [
      "CRUD completo",
      "Filtros avanzados", 
      "Persistencia local",
      "Mobile-first design"
    ]
  },
  {
    id: 'quiz-app',
    title: "Quiz App",
    subtitle: "Aplicación de cuestionarios interactivos",
    description: "Aplicación de cuestionarios interactivos con preguntas de opción múltiple, temporizador en tiempo real y sistema de puntuación. Incluye diferentes categorías y niveles de dificultad.",
    fullDescription: "Una aplicación de quiz completa con múltiples características avanzadas incluyendo temporizador, puntuación dinámica, diferentes categorías y feedback inmediato. Desarrollada con React y una experiencia de usuario pulida.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "React", "Vite", "Custom Icons"],
    image: "/assets/images/quizapp.webp",
    link: "https://quizappone.vercel.app/",
    github: "https://github.com/Alex831612/quizapp",
    status: "completed",
    featured: false,
    year: "2025",
    category: "Web App",
    highlights: [
      "Sistema de temporizador",
      "Múltiples categorías",
      "Puntuación en tiempo real",
      "Feedback instantáneo"
    ]
  },
  {
    id: 'casa-movil-sur',
    title: "Casa Móvil Sur",
    subtitle: "Sitio web empresarial con WordPress",
    description: "Página web profesional para una empresa de venta de casas móviles, con diseño minimalista y optimizada para conversiones. Desarrollada con WordPress y optimizada para SEO.",
    fullDescription: "Sitio web corporativo completo para Casa Móvil Sur, una empresa especializada en la venta de casas móviles. El proyecto incluyó diseño personalizado, optimización SEO, integración con formularios de contacto y optimización para conversiones.",
    tech: ["WordPress", "PHP", "CSS3", "SEO", "Google Analytics"],
    image: "/assets/images/casamovilsur.webp",
    link: "https://casamovilsur.com/feria-de-mobilhomes-en-madrid-valdemoro/",
    github: null,
    status: "completed",
    featured: false,
    year: "2025",
    category: "WordPress",
    highlights: [
      "Diseño personalizado",
      "SEO optimizado",
      "Formularios de contacto",
      "Optimización conversiones"
    ]
  }  
];

export const contactInfo = [
  { 
    icon: MailIcon, 
    label: "Email", 
    value: "andresalex983@gmail.com",
    href: "mailto:andresalex983@gmail.com",
    primary: true
  },
  { 
    icon: GithubIcon, 
    label: "GitHub", 
    value: "@Alex831612",
    href: "https://github.com/Alex831612",
    primary: true
  },
  { 
    icon: LinkedinIcon, 
    label: "LinkedIn", 
    value: "/in/al3ex-andres",
    href: "https://www.linkedin.com/in/al3ex-andres",
    primary: true
  }
];
