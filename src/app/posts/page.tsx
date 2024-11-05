import React from "react";

import { NewPublication, PostComponent } from "./components";
const page = () => {
  return (
    <div className="flex flex-col max-h-full">
      <NewPublication />
      <div className="scrollable-container relative mb-16 md:mb-0">
        {[...Array(5)].map((_, index) => (
          <PostComponent
            key={index}
            username="ItsDragon"
            alias="itsdragon09"
            timeAgo="3h"
            question="¿Cuál es el peor maestro que les ha tocado?"
            content="Hugo nos daba demasiados proyectos difíciles y nunca explicaba bien los temas en clase."
            likes={300}
            imageUrl={"/imgs/perfil.jpeg"}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
