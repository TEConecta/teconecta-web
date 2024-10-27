"use client";
import React, { useState } from "react";

export const Filter = () => {
  const communities = ["comunidad1", "comunidad2", "comunidad3"];
  const [optionFilter, setOptionFilter] = useState<string[]>([]);

  const handleOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      setOptionFilter((prev) => [...prev, name]);
    } else {
      setOptionFilter((prev) => prev.filter((option) => option !== name));
    }
  };
  return (
    <div className="absolute right-10 top-20 md:right-[39vw] w-48 bg-white border border-gray-700 rounded-md shadow-md z-50 p-2">
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
  );
};
