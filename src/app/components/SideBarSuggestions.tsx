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
];

const SideBarSuggestions: React.FC = () => {
  return (
    <aside
      className="hidden md:block border border-gray-200 rounded-lg shadow-xl p-4 h-screen w-64 
    fixed  right-0  bg-white"
    >
      <h2 className="text-lg font-bold mb-4">Comunidades para seguir</h2>
      <ul>
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

export default SideBarSuggestions;
