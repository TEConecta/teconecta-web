"use client";
import React, { useState } from "react";

interface CommunityCardProps {
  name: string;
  image: string;
  description: string;
  members: number;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  name,
  image,
  description,
  members,
}) => {
  const [isMember, setIsMember] = useState(false);

  const handleJoinClick = () => {
    setIsMember(!isMember);
  };

  return (
    <div className="my-6">
      <div className="border border-gray-500 rounded-lg p-4">
        <div className="px-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src={image} alt="icon" className="w-16 h-auto" />
            <section className="ml-2">
              <p className="font-bold">/{name}</p>
              <p className="text-gray-500 text-sm font-semibold">
                {members} miembros.
              </p>
            </section>
          </div>
          <button
            className={`px-6 py-1 cursor-pointer mr-6 rounded-md ${
              isMember
                ? "bg-white text-black border border-black"
                : "bg-blue-950 text-white"
            }`}
            onClick={handleJoinClick}
          >
            {isMember ? "Miembro" : "Unirme"}
          </button>
        </div>
        <div className="px-2 flex items-center mt-2">
          <p className="text-gray-500 font-semibold text-justify text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
