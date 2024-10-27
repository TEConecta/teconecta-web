import React from "react";

import { NewPublication, PostComponent } from "./components";
const page = () => {
  return(
   <div>
    <NewPublication />
     <div className="  scrollable-container relative h-screen  ">
      
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
)};

export default page;
