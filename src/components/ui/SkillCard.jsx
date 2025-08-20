import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon } from '../icons/Icons';
import { hoverScale, rotate360, wiggle } from '../../animations/animations';
import { skillCard } from '../../animations/portfolioAnimations';

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={skillCard}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, threshold: 0.3 }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                
        {/* Background Gradient Effect */}
        <motion.div
          variants={hoverScale}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 dark:to-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/10 to-sky-100/20 dark:from-blue-900/20 dark:to-sky-900/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-10 translate-x-10"
          variants={rotate360}
        />
                
        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div
            variants={wiggle}
            className={`w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
          >
            {skill?.icon ? (
              React.createElement(skill.icon, { 
                size: 24, 
                strokeWidth: 2.5 
              })
            ) : (
              <CodeIcon size={24} strokeWidth={2.5} />
            )}
                        
            {/* Icon Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-xl"
            />
          </motion.div>

          {/* Title */}
          <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {skill?.name || 'Skill Name'}
          </h4>

          {/* Technologies */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
            {skill?.technologies}
          </p>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor'
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
