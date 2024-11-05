"use client";
import {
  HomeIcon,
  BellIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

export const Navigation = () => {
  const [logoSrc, setLogoSrc] = useState("/imgs/logo_guinda.png");

  const logoHover = () => {
    setLogoSrc("/imgs/logo_blanco.png");
  };

  const logoNormal = () => {
    setLogoSrc("/imgs/logo_negro.png");
  };

  return (
    <div>
      <nav className="block md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
        <ul className="flex justify-around items-center py-1">
          <li>
            <button className="flex flex-col items-center focus:outline-none">
              <HomeIcon className="h-9 w-9 text-gray-500 hover:text-gray-800" />
            </button>
          </li>

          <li>
            <button className="flex flex-col items-center focus:outline-none">
              <UsersIcon className="h-9 w-9 text-gray-500 hover:text-gray-800" />
            </button>
          </li>

          <li className="flex items-center justify-center">
            <div className="h-14 w-14 rounded-full border-2 border-[#730022] flex items-center justify-center">
              <Image
                src={logoSrc}
                alt="Logo Guinda"
                width={64}
                height={64}
                className="rounded-full hover:bg-[#730022] pt-1"
                onMouseEnter={logoHover}
                onMouseLeave={logoNormal}
              />
            </div>
          </li>

          <li>
            <button className="flex flex-col items-center focus:outline-none">
              <BellIcon className="h-9 w-9 text-gray-500 hover:text-gray-800" />
            </button>
          </li>

          <li>
            <button className="flex flex-col items-center focus:outline-none">
              <Cog6ToothIcon className="h-9 w-9 text-gray-500 hover:text-gray-800" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
