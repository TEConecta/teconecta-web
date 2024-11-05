"use client";
import React, { useState } from 'react';
import HeaderChat from './HeaderChat';
import MensajeEnviado from './MensajeEnviado';

const Chat = () => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const handleEnviarMensaje = () => {
    if (mensaje.trim() !== "") {
      setMensajes([...mensajes, mensaje]);
      setMensaje("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderChat />

      <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-end">
        {mensajes.map((msg, index) => (
          <MensajeEnviado key={index} mensaje={msg} />
        ))}
      </div>

      <div className="sticky bottom-0 flex items-center p-4 bg-white border-t border-gray-200">
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleEnviarMensaje}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
