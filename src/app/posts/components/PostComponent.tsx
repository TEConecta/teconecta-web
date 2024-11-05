"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleBottomCenterTextIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

interface PostProps {
  username: string;
  alias: string;
  timeAgo: string;
  question: string;
  content: string;
  likes: number;
  imageUrl?: string;
}

export const PostComponent = ({
  username,
  alias,
  timeAgo,
  question,
  content,
  likes,
  imageUrl,
}: PostProps) => {
  const [isDelete, setIsDelete] = useState(false);

  const showOptionDelete = () => {
    setIsDelete(!isDelete);
  };

  return (
    <div className="py-4 px-4 sm:px-8 border-b border-gray-200 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Image
              src="/imgs/perfil.jpeg"
              alt="Perfil"
              width={40}
              height={40}
              className="rounded-full border border-gray-300"
            />
          </div>
          <div>
            <div className="flex items-center justify-center space-x-2">
              <h1 className="font-semibold">{username}</h1>
              <p className="text-gray-400 text-xs">{timeAgo}</p>
            </div>

            <h2 className="text-gray-500 text-sm">{`/${alias}`}</h2>
          </div>
        </div>
        <div className="relative">
          <EllipsisHorizontalIcon
            className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer"
            onClick={showOptionDelete}
          />

          {isDelete && (
            <div
              className="absolute flex items-center right-0 mt-1 w-24 bg-white border 
            border-gray-200 rounded-lg shadow-lg z-10 hover:bg-red-100"
            >
              <button
                onClick={() => alert("¿Quiere eliminar este post?")}
                className="  w-full text-left px-4 py-2 text-sm text-red-600 "
              >
                Borrar
              </button>
              <TrashIcon className="mr-2 aspect-square w-8 text-red-600 " />
            </div>
          )}
        </div>
      </div>

      <h2 className="font-bold mt-2">{question}</h2>
      <p className="text-gray-700 mt-1">{content}</p>

      {imageUrl && (
        <div className=" p-2 w-full  flex items-center justify-center">
          <Image
            src={imageUrl}
            alt=""
            width={400}
            height={200}
            className=" rounded-lg aspect-square w-56"
          />
        </div>
      )}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center">
            <HandThumbUpIcon className="h-5 w-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
            <span className="text-gray-500">{likes}</span>
          </div>

          <div className="flex items-center justify-center">
            <HandThumbDownIcon className="h-5 w-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
          </div>

          <div className="flex items-center">
            <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
