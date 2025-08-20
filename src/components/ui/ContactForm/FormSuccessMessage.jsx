import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, RefreshCwIcon, MailIcon } from '../../icons/Icons';

const FormSuccessMessage = ({ onResetForm }) => {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <CheckCircleIcon size={32} className="text-white" />
      </motion.div>
            
      <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-3">
        ¡Mensaje enviado con éxito!
      </h3>
      <p className="text-green-700 dark:text-green-300 mb-6 leading-relaxed">
        Gracias por contactarme. He recibido tu mensaje y me pondré en contacto contigo dentro de las próximas 24 horas.
      </p>
            
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onResetForm}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
        >
          <RefreshCwIcon size={18} />
          Enviar otro mensaje
        </motion.button>
                
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:andresalex983@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl font-medium transition-all duration-300"
        >
          <MailIcon size={18} />
          Email directo
        </motion.a>
      </div>
    </motion.div>
  );
};

export default FormSuccessMessage;
