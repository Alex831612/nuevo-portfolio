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

// ===========================================
// ANIMACIONES ESPECÍFICAS DEL PORTFOLIO
// ===========================================

export const heroAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const projectCard = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.bounce
    }
  },
  hover: {
    y: -10,
    scale: 1.03,
    rotateY: 5,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut
    }
  }
};

export const skillCard = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.spring
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: durations.fast
    }
  }
};

export const navigationItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut
    }
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2
    }
  }
};

export const mobileMenu = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: durations.fast,
      ease: easings.easeInOut
    }
  }
}

export const aboutSectionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: durations.normal
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.normal,
        ease: easings.smooth
      }
    }
  },
  image: {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: durations.slow,
        ease: easings.easeOut
      }
    }
  }
};

export const iconVariants = {
  initial: { 
    scale: 0, 
    rotate: -180, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    rotate: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.6
    }
  },
  exit: { 
    scale: 0, 
    rotate: 180, 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
