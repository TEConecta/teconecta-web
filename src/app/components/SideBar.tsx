"use client";
import {
  HomeIcon,
  UsersIcon,
  BellIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

const SideBar: React.FC = () => {
  const communities = [
    {
      id: 1,
      name: "Comunidad de Programadores",
      imageUrl: "/imgs/perfil.jpeg",
    },
    {
      id: 2,
      name: "Comunidad de Diseño",
      imageUrl: "/imgs/perfil.jpeg",
    },
    {
      id: 3,
      name: "Comunidad de Fotografía",
      imageUrl: "/imgs/perfil.jpeg",
    },
    {
      id: 4,
      name: "Comunidad de Música",
      imageUrl: "/imgs/perfil.jpeg",
    },
    {
      id: 5,
      name: "Comunidad de Videojuegos",
      imageUrl: "/imgs/perfil.jpeg",
    },
    {
      id: 6,
      name: "Comunidad de Viajes",
      imageUrl: "/imgs/perfil.jpeg",
    },
  ];
  return (
    <aside
      className="hidden md:block border border-gray-200 rounded-lg shadow-xl p-4 h-full w-48  
    fixed  left-0  bg-white"
    >
      <div className="flex flex-col items-center justify-center h-full ">
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
        <div className="scrollable-container  h-64 space-y-4 p-2  w-full">
          {communities.map((community) => (
            <div key={community.id} className="flex items-center space-x-1">
              <img
                src={community.imageUrl}
                alt={community.name}
                className="aspect-square w-7 rounded-full"
              />
              <span className="text-gray-700">{community.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
