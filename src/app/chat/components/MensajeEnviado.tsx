import React from "react";

const MensajeEnviado = ({ mensaje }: { mensaje: string }) => {
  return (
    <div className="absolute bottom-16 right-0 p-4 z-10">
      <div className="rounded-full bg-red-900 text-white px-4 py-2 max-w-xs">
        <h1>{mensaje}</h1>
      </div>
    </div>
  );
};

export default MensajeEnviado;
