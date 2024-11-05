"use client";
import { useState } from "react";
import Image from "next/image";
import { ModalPublication } from "./";

export const NewPublication = () => {
  const [modalPublication, setModalPublication] = useState(false);

  const actionModalPublication = () => {
    setModalPublication(!modalPublication);
  };
  return (
    <div>
      {modalPublication && (
        <ModalPublication closeModal={actionModalPublication} />
      )}
      <div className="hidden md:block border-b border-gray-200 py-4 px-4 sm:px-8 bg-white">
        <div className="flex items-center justify-between gap-2">
          <Image
            width={1000}
            height={1000}
            src="/imgs/perfil.jpeg"
            alt={`$ image`}
            className="w-10 h-10 rounded-full mr-3"
          />
          <input
            type="text"
            placeholder={"¿Que esta pasando?"}
            className="w-5/6 p-2  border rounded-lg"
            onClick={actionModalPublication}
          />
          <button
            onClick={actionModalPublication}
            className="bg-[#730022] text-white hover:bg-black  p-2 shadow-lg  border rounded-lg"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};
