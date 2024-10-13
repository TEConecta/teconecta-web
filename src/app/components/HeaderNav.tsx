"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDownCircleIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

const HeaderNav: React.FC = () => {
  const [isFilter, setIsFilter] = useState(false);

  const showFilter = () => {
    setIsFilter(!isFilter);
  };
  const [optionFilter, setOptionFilter] = useState<string[]>([]);

  const handleOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      setOptionFilter((prev) => [...prev, name]);
    } else {
      setOptionFilter((prev) => prev.filter((option) => option !== name));
    }
  };
  const communities = ["comunidad1", "comunidad2", "comunidad3"];
  return (
    <header className="z-20 flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center justify-center space-x-2">
        <button className="text-gray-600 md:hidden focus:outline-none">
          <Bars3Icon className="h-7 w-7 text-gray-600 hover:text-gray-800" />
        </button>
        <h1 className="text-2xl text-opacity-90 font-bold text-[#730022] ">
          TEConecta
        </h1>
      </div>

      <div className="hidden md:block">
        <p className="flex items-center justify-center w-40 text-xl font-bold">
          Para ti
          <ArrowDownCircleIcon className=" aspect-square ml-2 w-5 text-white bg-slate-600 rounded-full " />
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <button className="focus:outline-none md:hidden" onClick={showFilter}>
          <FunnelIcon className="h-7 w-7 text-gray-600 hover:text-gray-800" />

          {isFilter && (
            <div className="absolute mt-2 -ml-16 w-48 bg-white border border-gray-700 rounded-md shadow-md z-50 p-2">
              <h2 className="font-semibold mb-1">Filtrar por:</h2>
              <div>
                <label className="flex items-center justify-start">
                  <input
                    type="checkbox"
                    name="amigos"
                    checked={optionFilter.includes("amigos")}
                    onChange={handleOption}
                    className="mr-2"
                  />
                  Amigos
                </label>
                <div className="h-[1px] bg-gray-700 w-full mt-1"></div>

                <h2 className="font-semibold">Mis comunidades</h2>
                {communities.map((community) => (
                  <label className="flex items-center" key={community}>
                    <input
                      type="checkbox"
                      name={community} 
                      checked={optionFilter.includes(community)}
                      onChange={handleOption}
                      className="mr-2"
                    />
                    {community}
                  </label>
                ))}
              </div>
            </div>
          )}
        </button>

        <button className="focus:outline-none md:hidden">
          <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-gray-600 hover:text-gray-800 " />
        </button>

        <div className="relative">
          <Image
            src="/imgs/perfil.jpeg"
            alt="Perfil"
            width={40}
            height={40}
            className="rounded-full border border-gray-300"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
