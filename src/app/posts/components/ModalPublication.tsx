"use client";
import React from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ModalPublicationProps {
  closeModal: () => void;
}

export const ModalPublication = ({ closeModal }: ModalPublicationProps) => {
  const communities = ["Comunidad a publicar", "Comunidad 1", "Comunidad 2", "Comunidad 3"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 className="text-xl font-bold text-center mb-4">Nueva publicación</h2>

        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black transition-transform duration-700"
          onClick={closeModal}
        >
          <XMarkIcon className="aspect-square w-6" />
        </button>

        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/imgs/perfil.jpeg"
              alt="Avatar"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>

          <h2 className="ml-3 font-semibold">/Bazan99.1</h2>

          <div className="ml-auto">
            <select
              className="bg-[#730022] text-white shadow-md hover:bg-white hover:text-[#730022] border hover:border-[#730022] px-4 py-2 rounded-lg"
            >
              {communities.map((community, index) => (
                <option key={index} value={community}>
                  {community}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Título"
            className="w-full p-3 border rounded-lg border-gray-300"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Texto (opcional)"
            className="w-full p-3 border rounded-lg border-gray-300 h-20"
          ></textarea>
        </div>

        <button className="bg-[#730022] text-white px-4 py-2 rounded-lg w-full">
          Publicar
        </button>
      </div>
    </div>
  );
};

export default ModalPublication;
