"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Filter } from "./";
import {
  ArrowDownCircleIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

export const HeaderNav = () => {
  const [isFilter, setIsFilter] = useState(false);

  const showFilter = () => {
    setIsFilter(!isFilter);
  };

  return (
    <header className="sticky w-full z-20 flex items-center justify-between h-[8vh] px-4 bg-white border-b border-gray-500">
      <div className="flex items-center justify-center space-x-2">
        <button className="text-gray-600 md:hidden focus:outline-none">
          <Bars3Icon className="h-7 w-7 text-gray-600 hover:text-gray-800" />
        </button>
        <h1 className="text-2xl text-opacity-90 font-bold text-[#730022] ">
          TEConecta
        </h1>
      </div>

      <div className="hidden md:block">
        <button onClick={showFilter}>
          <p className="flex items-center justify-center w-40 text-xl font-bold">
            Para ti
            <ArrowDownCircleIcon className=" aspect-square ml-2 w-5 text-white bg-slate-600 rounded-full " />
          </p>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="focus:outline-none md:hidden" onClick={showFilter}>
          <FunnelIcon className="h-7 w-7 text-gray-600 hover:text-gray-800" />
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

      {isFilter && <Filter />}
    </header>
  );
};
