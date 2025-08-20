import React from 'react';

const FormTipsSection = () => {
  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 my-4">
      <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
        Para una respuesta más rápida, incluye:
      </h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
        <li>• Tipo de proyecto (web, app, landing, etc.)</li>
        <li>• Presupuesto estimado</li>
        <li>• Timeline o fecha límite</li>
        <li>• Tecnologías preferidas (si las tienes)</li>
      </ul>
    </div>
  );
};

export default FormTipsSection;
