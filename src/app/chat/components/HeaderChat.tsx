"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeaderChat = () => {
    return (
        <header className=" sticky w-full z-20 flex items-center justify-between p-4 bg-white shadow-md">
            <ArrowLeftIcon className="h-6 w-6  cursor-pointer" />
            <div className="flex flex-col items-center">
                <h1 className="text-2xl text-opacity-90 font-bold text-[#730022] ">
                    Juls.R
                </h1>
                <h1 className="text-sm">En linea</h1>
            </div>
            <div className="relative">
                <Image
                    src="/imgs/perfil.jpeg"
                    alt="Perfil"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-300"
                />
            </div>
        </header>
    )
}

export default HeaderChat