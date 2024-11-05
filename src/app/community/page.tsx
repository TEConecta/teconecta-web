import React from "react";
import ComunityOverview from "./components/CommunityOverview";
import { HeaderNav, NewPublication, PostComponent } from "../posts/components";

const page = () => {
  return (
    <div>
      <HeaderNav />
      <div className="px-2">
        <ComunityOverview
          name="Mecatronicos"
          image="/imgs/perfil.jpeg"
          description="Aquí nadie sabe como arreglar nada pero los memes sobran. Mecatrónica en modo desmadre."
          members={250}
        />
      </div>
      <div className="h-1 bg-red-900 shadow-md my-2"></div>
      <div>
        <NewPublication />
        <div className="  scrollable-container relative h-screen  ">
          {[...Array(5)].map((_, index) => (
            <PostComponent
              key={index}
              username="OliverElGuapo666"
              alias="Mecatronicos"
              timeAgo="3h"
              question="¿Cuál es el peor maestro que les ha tocado?"
              content="Hugo nos daba demasiados proyectos difíciles y nunca explicaba bien los temas en clase."
              likes={300}
              imageUrl={"/imgs/perfil.jpeg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
