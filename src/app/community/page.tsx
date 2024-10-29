import React from 'react'
import CommunityCard from './components/CommunityCard'

const page = () => {
  return (
    <div>
      <CommunityCard
        name='Mecatronicos'
        image='/imgs/logo_guinda.png'
        description='Aqui nadie sabe como arreglar nada pero los memes sobran. Mecatronica en modo desmadre.'
        members={250} />
        <CommunityCard
        name='Mecatronicos'
        image='/imgs/logo_guinda.png'
        description='Aqui nadie sabe como arreglar nada pero los memes sobran. Mecatronica en modo desmadre.'
        members={250} />
        <CommunityCard
        name='Mecatronicos'
        image='/imgs/logo_guinda.png'
        description='Aqui nadie sabe como arreglar nada pero los memes sobran. Mecatronica en modo desmadre.'
        members={250} />
        <CommunityCard
        name='Mecatronicos'
        image='/imgs/logo_guinda.png'
        description='Aqui nadie sabe como arreglar nada pero los memes sobran. Mecatronica en modo desmadre.'
        members={250} />
    </div>
  )
}

export default page