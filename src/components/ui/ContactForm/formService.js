// Servicio para el manejo del envío de formularios

export const submitContactForm = async (formData) => {
  try {
    // Simulación de delay para mejor UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Integración con Formspree
    const response = await fetch('https://formspree.io/f/xkgzeekp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        _subject: `Nuevo contacto desde portfolio: ${formData.subject}`,
        _replyto: formData.email
      })
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    // Evento personalizado para analytics
    dispatchAnalyticsEvent('contactform_submit', {
      success: true, 
      form: 'portfolio_contact'
    });

    return { success: true };
        
  } catch (error) {
    console.error('Error al enviar formulario:', error);
        
    // Evento de error para analytics
    dispatchAnalyticsEvent('contactform_error', {
      error: error.message
    });
        
    throw new Error('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.');
    }
};

// Función auxiliar para eventos de analytics
const dispatchAnalyticsEvent = (eventName, detail) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  }
};

// Configuración del formulario
export const FORM_CONFIG = {
  endpoint: 'https://formspree.io/f/xkgzeekp',
  emailDirect: 'andresalex983@gmail.com',
  responseTime: '24 horas'
};
