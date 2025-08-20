import React from 'react';
import { motion, useTransform } from 'framer-motion';

const ProgressBar = ({ scrollYProgress }) => {
  // Transformaciones para la barra de progreso
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const height = useTransform(scrollYProgress, [0, 0.1], [1, 3]);

  return (
    <>
      {/* Progress Bar Principal */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] origin-left"
        style={{ 
          scaleX: scrollYProgress,
          opacity,
          height: height
        }}
      >
        {/* Gradiente principal */}
        <div className="h-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-600" />
                
        {/* Efecto de brillo animado */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 3
          }}
        />
      </motion.div>
    </>
  );
};

export default ProgressBar;
