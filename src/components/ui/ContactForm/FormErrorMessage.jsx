import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircleIcon } from '../../icons/Icons';

const FormErrorMessage = ({ error, onClose }) => {
  if (!error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 'auto' }}
      exit={{ opacity: 0, y: -20, height: 0 }}
      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <AlertCircleIcon size={20} className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-red-800 dark:text-red-300 font-medium mb-1">
              Error al enviar mensaje
            </h4>
            <p className="text-red-700 dark:text-red-300 text-sm">
              {error}
            </p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors"
            aria-label="Cerrar mensaje de error"
          >
            ×
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default FormErrorMessage;
