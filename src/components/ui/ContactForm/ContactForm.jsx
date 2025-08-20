import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon, MailIcon, HashIcon, MessageSquareIcon } from '../../icons/Icons';

// Componentes
import FormInputField from './FormInputField';
import FormErrorMessage from './FormErrorMessage';
import FormSuccessMessage from './FormSuccessMessage';
import FormSubmitButton from './FormSubmitButton';
import FormTipsSection from './FormTipsSection';

// Utilidades y servicios
import { validateField, validateForm } from './formValidationUtils';
import { submitContactForm, FORM_CONFIG } from './formService';

// Mapeo de iconos
const ICONS = {
  name: UserIcon,
  email: MailIcon,
  subject: HashIcon,
  message: MessageSquareIcon
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const formRef = useRef(null);

  // Manejo de cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
        
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar errores cuando el usuario empiece a escribir
    if (error) setError('');
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Manejo de blur para validación en tiempo real
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, ...errors }));
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validar formulario completo
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await submitContactForm(formData);
            
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFieldErrors({});
            
      // Scroll al mensaje de éxito
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
            
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resetear el formulario y estados
  const resetForm = () => {
    setSubmitted(false);
    setError('');
    setFieldErrors({});
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const hasFieldErrors = Object.keys(fieldErrors).length > 0;

  return (
    <div ref={formRef} className="relative">
      <AnimatePresence mode="wait">
        {/* Mensaje de error general */}
        <FormErrorMessage 
          error={error} 
          onClose={() => setError('')} 
        />

        {/* Mensaje de éxito */}
        {submitted ? (
          <FormSuccessMessage onResetForm={resetForm} />
        ) : (
          /* Formulario principal */
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              {/* Header del formulario */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Envíame un mensaje
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Completa el formulario y me pondré en contacto contigo pronto
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <FormInputField
                  name="name"
                  label="Nombre"
                  placeholder="Tu nombre completo"
                  icon={ICONS.name}
                  required
                  formData={formData}
                  fieldErrors={fieldErrors}
                  isSubmitting={isSubmitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {/* Email */}
                <FormInputField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="tu@email.com"
                  icon={ICONS.email}
                  required
                  formData={formData}
                  fieldErrors={fieldErrors}
                  isSubmitting={isSubmitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              {/* Asunto */}
              <FormInputField
                name="subject"
                label="Asunto"
                placeholder="¿De qué quieres hablar?"
                icon={ICONS.subject}
                required
                formData={formData}
                fieldErrors={fieldErrors}
                isSubmitting={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Mensaje */}
              <FormInputField
                name="message"
                label="Mensaje"
                type="textarea"
                placeholder="Cuéntame sobre tu proyecto, ideas o cualquier consulta que tengas..."
                icon={ICONS.message}
                rows={5}
                required
                formData={formData}
                fieldErrors={fieldErrors}
                isSubmitting={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <FormTipsSection />

              <FormSubmitButton
                isSubmitting={isSubmitting}
                hasErrors={hasFieldErrors}
                onClick={handleSubmit}
              />

              {/* Nota de privacidad */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                Tu información está segura conmigo. No comparto datos personales con terceros.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Elementos decorativos */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-sky-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default ContactForm;
