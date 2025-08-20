// Utilidades de validación para el formulario de contacto

export const validateField = (name, value) => {
  const errors = {};
    
  switch (name) {
    case 'name':
      if (!value.trim()) {
        errors.name = 'El nombre es requerido';
      } else if (value.trim().length < 2) {
        errors.name = 'El nombre debe tener al menos 2 caracteres';
      }
    break;
            
    case 'email':
    {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        errors.email = 'El email es requerido';
      } else if (!emailRegex.test(value)) {
        errors.email = 'Ingresa un email válido';
      }
    break;
    }
            
    case 'subject':
      if (!value.trim()) {
        errors.subject = 'El asunto es requerido';
      } else if (value.trim().length < 5) {
        errors.subject = 'El asunto debe tener al menos 5 caracteres';
      }
    break;
            
    case 'message':
      if (!value.trim()) {
        errors.message = 'El mensaje es requerido';
      } else if (value.trim().length < 10) {
        errors.message = 'El mensaje debe tener al menos 10 caracteres';
      }
    break;
            
    default:
    break;
  }
    
  return errors;
};

export const validateForm = (formData) => {
  const errors = {};
    
  Object.keys(formData).forEach(key => {
    const fieldErrors = validateField(key, formData[key]);
    Object.assign(errors, fieldErrors);
  });
    
  return errors;
};

// Configuración de campos del formulario
export const FORM_FIELDS = [
  {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Tu nombre completo',
    required: true,
    gridColumn: 'sm:col-span-1'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'tu@email.com',
    required: true,
    gridColumn: 'sm:col-span-1'
  },
  {
    name: 'subject',
    type: 'text',
    label: 'Asunto',
    placeholder: '¿De qué quieres hablar?',
    required: true,
    gridColumn: 'col-span-full'
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Mensaje',
    placeholder: 'Cuéntame sobre tu proyecto, ideas o cualquier consulta que tengas...',
    rows: 5,
    required: true,
    gridColumn: 'col-span-full'
  }
];

// Configuración de iconos para cada campo
export const FIELD_ICONS = {
  name: 'UserIcon',
  email: 'MailIcon',
  subject: 'HashIcon',
  message: 'MessageSquareIcon'
};
