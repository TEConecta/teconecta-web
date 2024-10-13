import {
  HeaderNav,
  Navigation,
  PostComponent,
  SideBar,
} from "@/app/components";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <div className="flex w-full p-2">
        <SideBar />
        <div className=" grid md:flex-1 md:ml-48  md:py-4 md:px-2">
          <PostComponent
            username="ItsDragon"
            alias="itsdragon09"
            timeAgo="3h"
            question="¿Cuál es el peor maestro que les ha tocado?"
            content="Hugo nos daba demasiados proyectos difíciles y nunca explicaba bien los temas en clase."
            likes={300}
            imageUrl={"/imgs/perfil.jpeg"}
          />
          {[...Array(4)].map((_, index) => (
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

      <Navigation />
    </>
  );
}
