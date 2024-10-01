import { HeaderNav, Navigation, PostComponent } from "@/app/components";

export default function Home() {
  return (
    <>
      <HeaderNav></HeaderNav>
      <PostComponent
        username="ItsDragon"
        alias="itsdragon09"
        timeAgo="3h"
        question="¿Cuál es el peor maestro que les ha tocado?"
        content="Hugo nos daba demasiados proyectos difíciles y nunca explicaba bien los temas en clase."
        likes={300}
      />
      <Navigation></Navigation>
    </>
  );
}
