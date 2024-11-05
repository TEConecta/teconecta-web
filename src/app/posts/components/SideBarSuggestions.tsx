import React from "react";
import Image from "next/image";
interface Community {
  name: string;
  members: number;
  description: string;
  imageUrl: string;
}

const communities: Community[] = [
  {
    name: "/Mecatrónica",
    members: 250,
    description:
      "Aquí sabes cómo arreglar nada, pero los memes sobran. Mecatrónica en modo desmadre. ¡Únete al meme!",
    imageUrl: "/imgs/perfil.jpeg",
  },
  {
    name: "/CosasPerdidas",
    members: 120,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/imgs/perfil.jpeg",
  },
  {
    name: "/Administración",
    members: 75,
    description: "Pellentesque habitant morbi tristique senectus et netus.",
    imageUrl: "/imgs/perfil.jpeg",
  },
  {
    name: "/Electrónica",
    members: 212,
    description: "Donec vitae nulla ac nunc pulvinar tincidunt non nec odio.",
    imageUrl: "/imgs/perfil.jpeg",
  },
  {
    name: "/Mecatrónica",
    members: 250,
    description:
      "Aquí sabes cómo arreglar nada, pero los memes sobran. Mecatrónica en modo desmadre. ¡Únete al meme!",
    imageUrl: "/imgs/perfil.jpeg",
  },
  {
    name: "/Administración",
    members: 75,
    description: "Pellentesque habitant morbi tristique senectus et netus.",
    imageUrl: "/imgs/perfil.jpeg",
  },
  {
    name: "/Electrónica",
    members: 212,
    description: "Donec vitae nulla ac nunc pulvinar tincidunt non nec odio.",
    imageUrl: "/imgs/perfil.jpeg",
  },
];

export const SideBarSuggestions = () => {
  return (
    <aside className="hidden lg:block p-4 right-0 w-80 bg-white border-l border-gray-500">
      <h2 className="text-lg font-bold ">Comunidades para seguir</h2>
      <ul className="scrollable-container">
        {communities.map((community) => (
          <li key={community.name} className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  width={1000}
                  height={1000}
                  src={community.imageUrl}
                  alt={`${community.name} image`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="text-sm font-semibold">{community.name}</h3>
                  <p className="text-xs text-gray-500">
                    {community.members} miembros
                  </p>
                </div>
              </div>
              <button className="bg-black text-white  text-sm p-2 rounded hover:bg-slate-600">
                Unirme
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {community.description}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
};
