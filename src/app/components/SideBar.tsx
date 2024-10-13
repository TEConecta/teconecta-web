"use client";
import {
  HomeIcon,
  UsersIcon,
  BellIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/solid";

const SideBar: React.FC = () => {
  return (
    <aside className="hidden md:block border border-gray-200 rounded-lg shadow-xl p-4 h-screen w-48  
    fixed  left-0  bg-white"> 
      <ul className="space-y-4 relative flex flex-col items-start justify-center h-full w-full">
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
    </aside>
  );
};

export default SideBar;
