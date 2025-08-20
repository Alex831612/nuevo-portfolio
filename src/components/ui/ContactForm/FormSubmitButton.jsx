import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SendIcon, Loader2Icon } from '../../icons/Icons';

const FormSubmitButton = ({ isSubmitting, hasErrors, onClick }) => {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting || hasErrors}
      onClick={onClick}
      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      className={`
        w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden cursor-pointer
        ${isSubmitting 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 hover:shadow-lg hover:shadow-sky-500/25 text-white'
        }
        disabled:opacity-50
      `}
    >
      <AnimatePresence mode="wait">
        {isSubmitting ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader2Icon size={22} />
            </motion.div>
            Enviando mensaje...
          </motion.div>
        ) : (
          <motion.div
            key="send"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3"
          >
            Enviar mensaje
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <SendIcon size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Efecto de brillo en hover */}
      {!isSubmitting && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full"
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
    </motion.button>
  );
};

export default FormSubmitButton;
