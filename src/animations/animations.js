// Configuración de easing personalizada
export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: [0.175, 0.885, 0.32, 1.275],
  easeOut: "easeOut",
  easeInOut: "easeInOut"
};

// Duraciones estándar
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  verySlow: 1.2
};

// Animacion de entrada simple
export const fadeIn = { //
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: durations.normal,
      ease: easings.easeOut 
    } 
  }
};

// Animación de entrada hacia arriba
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Animación de entrada desde la izquierda
export const slideInLeft = { 
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: durations.slow,
      ease: easings.smooth
    } 
  }
};

// Animación de entrada desde la derecha
export const slideInRight = { 
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: durations.slow,
      ease: easings.smooth
    } 
  }
};

// Animación de entrada con escala
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleInCenter = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: durations.normal,
      ease: easings.spring
    } 
  }
};

export const imageVariants = {
  loading: { scale: 1.1, opacity: 0.7 },
  loaded: { scale: 1, opacity: 1 }
};

// Animación de contenedor con stagger 
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: durations.normal
    }
  }
};

// Animación de hover con escala
export const hoverScale = {
  hover: {
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut
    }
  },
  tap: {
    scale: 0.95
  }
};

// Animación de hover con elevación
export const hoverLift = { 
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut
    }
  }
};

export const float = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: easings.easeInOut
  }
};

export const pulse = {
  scale: [1, 1.1, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: easings.easeInOut
  }
};

export const rotate360 = {
  rotate: 360,
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
};

export const wiggle = {
  rotate: [0, 10, -10, 0],
  scale: [1, 1.1, 1],
  transition: {
    repeat: Infinity,
    duration: 8,
    ease: easings.easeInOut
  }
};

export const bounce = {
  rotate: [0, -15, 15, 0],
  y: [0, -10, 10, 0],
  transition: {
    repeat: Infinity,
    duration: 6,
    ease: easings.easeInOut
  }
};
