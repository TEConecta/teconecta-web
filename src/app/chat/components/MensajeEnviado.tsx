import React from 'react';

const MensajeEnviado = ({ mensaje }) => {
  return (
    <div className="rounded-full bg-red-900 text-white px-4 py-2 max-w-xs mb-2 self-end">
      <h1>{mensaje}</h1>
    </div>
  );
};

export default MensajeEnviado;
