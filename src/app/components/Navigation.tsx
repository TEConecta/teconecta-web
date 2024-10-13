
"use client"
import {
  HomeIcon,
  BellIcon,
  CogIcon,
  UsersIcon,
  
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState("/imgs/logo_guinda.png");

  const logoHover = () => {
    setLogoSrc("/imgs/logo_blanco.png");
  };

  const logoNormal = () => {
    setLogoSrc("/imgs/logo_negro.png");
  };

  return (
    <nav className="block md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <ul className="flex justify-around items-center py-3">
        <li>
          <button className="flex flex-col items-center focus:outline-none">
            <HomeIcon className="h-6 w-6 text-gray-500 hover:text-gray-800" />
            <span className="text-xs text-gray-500">Inicio</span>
          </button>
        </li>

        <li>
          <button className="flex flex-col items-center focus:outline-none">
            <UsersIcon className="h-6 w-6 text-gray-500 hover:text-gray-800" />
            <span className="text-xs text-gray-500">Comunidades</span>
          </button>
        </li>

        <li className="flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-2 border-[#730022] flex items-center justify-center ">
            <Image
              src={logoSrc}
              alt="Logo Guinda"
              width={50}
              height={50}
              className="h-10 w-10 rounded-full hover:bg-[#730022] "
              onMouseEnter={logoHover}
              onMouseLeave={logoNormal}
            />
          </div>
        </li>

        <li>
          <button className="flex flex-col items-center focus:outline-none">
            <BellIcon className="h-6 w-6 text-gray-500 hover:text-gray-800" />
            <span className="text-xs text-gray-500">Notificaciones</span>
          </button>
        </li>

        <li>
          <button className="flex flex-col items-center focus:outline-none">
            <CogIcon className="h-6 w-6 text-gray-500 hover:text-gray-800" />
            <span className="text-xs text-gray-500">Configuración</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;