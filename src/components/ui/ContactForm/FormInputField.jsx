import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircleIcon } from '../../icons/Icons';

const FormInputField = ({ 
  name, 
  type = 'text', 
  label, 
  placeholder, 
  icon: Icon,
  required = false,
  rows,
  formData,
  fieldErrors,
  isSubmitting,
  onChange,
  onBlur
}) => {
  const hasError = fieldErrors[name];
  const Component = rows ? 'textarea' : 'input';
    
  return (
    <div className="space-y-2">
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
            
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400 z-10">
          <Icon size={18} />
        </div>
                
        <Component
          id={name}
          type={type}
          name={name}
          required={required}
          rows={rows}
          value={formData[name]}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={isSubmitting}
          className={`
            w-full pl-11 pr-4 py-3 border rounded-xl transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed
            ${hasError 
              ? 'border-red-300 dark:border-red-600 focus:ring-red-500' 
              : 'border-gray-300 dark:border-gray-600'
            }
            ${rows ? 'resize-y min-h-[120px]' : ''}
          `}
        />
      </div>
            
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
          >
            <AlertCircleIcon size={14} />
            {hasError}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormInputField;
