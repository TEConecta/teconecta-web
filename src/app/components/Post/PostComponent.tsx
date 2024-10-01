import React from "react";
import Image from "next/image";
import {
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

interface PostProps {
  username: string;
  alias: string;
  timeAgo: string;
  question: string;
  content: string;
  likes: number;
}

const Post: React.FC<PostProps> = ({
  username,
  alias,
  timeAgo,
  question,
  content,
  likes,
}) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-md mb-4">
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
        <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer" />
      </div>

      <h2 className="font-bold mt-2">{question}</h2>
      <p className="text-gray-700 mt-1">{content}</p>

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

export default Post;
