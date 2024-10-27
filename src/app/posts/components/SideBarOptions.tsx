"use client";
import {
  HomeIcon,
  UsersIcon,
  BellIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import { communitiesData } from "../../mocks";
import Image from "next/image";

export const SideBar = () => {
  const communities = communitiesData
  return (
    <aside
    className="hidden md:block border border-gray-200 rounded-lg shadow-xl p-4 h-screen right-0 w-64    bg-white"
    >
      <div className="flex flex-col items-center justify-start h-full bg ">
        <ul className="space-y-4 relative flex flex-col items-start justify-center h-auto w-full">
          <li className="w-full hover:bg-gray-200">
            <button className="flex items-center space-x-2 w-full h-auto">
              <HomeIcon className="h-6 w-6 text-gray-500" />
              <span className="text-gray-700">Inicio</span>
            </button>
          </li>
          <li className="w-full hover:bg-gray-200">
            <button className="flex items-center space-x-2 w-full">
              <UsersIcon className="h-6 w-6 text-gray-500" />
              <span className="text-gray-700">Comunidades</span>
            </button>
          </li>
          <li className="w-full hover:bg-gray-200">
            <button className="flex items-center space-x-2 w-full">
              <BellIcon className="h-6 w-6 text-gray-500" />
              <span className="text-gray-700">Notificaciones</span>
            </button>
          </li>
          <li className="w-full hover:bg-gray-200">
            <button className="flex items-center space-x-2 w-full">
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-500" />
              <span className="text-gray-700">Mensajes</span>
            </button>
          </li>
          <li className="w-full hover:bg-gray-200">
            <button className="flex items-center space-x-2 w-full">
              <CogIcon className="h-6 w-6 text-gray-500" />
              <span className="text-gray-700">Configuración</span>
            </button>
          </li>
        </ul>
        <div className="h-[1px] bg-gray-700 w-full my-4"></div>
        <h2 className="font-semibold">Mis comunidades</h2>
        <div className="scrollable-container  h-1/2 space-y-4 p-2   w-full">
          {communities.map((community) => (
            <div key={community.id} className="flex items-center space-x-1">
              <Image
                width={1000}
                height={1000}
                src={community.imageUrl}
                alt={community.name}
                className="aspect-square w-7 rounded-full"
              />
              <span className="text-sm text-gray-700">{community.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

