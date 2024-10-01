import React from "react";
import Image from "next/image";
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleBottomCenterTextIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

const HeaderNav: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <button className="text-gray-600 focus:outline-none">
          <AdjustmentsHorizontalIcon className="h-7 w-7 text-gray-600 hover:text-gray-800" />
        </button>
        <h1 className="text-2xl text-opacity-90 font-bold text-[#730022] ">TEConecta</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <FunnelIcon className="h-7 w-7 text-gray-600 hover:text-gray-800" />
        </button>
        <button className="focus:outline-none">
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
