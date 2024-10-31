'use client'
import React, { useState } from 'react'
import CommunityCard from '../components/CommunityCard'

const page = () => {

  const [search, setSearch] = useState('')

  const communities = [
    {
      name: 'Mecatronicos',
      image: '/imgs/logo_guinda.png',
      description: 'Aquí nadie sabe como arreglar nada pero los memes sobran. Mecatrónica en modo desmadre.',
      members: 250,
    },
    {
      name: 'Pelos y cebolla',
      image: '',
      description: 'Aqui vamos a hablar de puros pelos huevo cebolla. O sea es una comunidad de cocina.',
      members: 666,
    },
    {
      name: 'Peditas tec',
      image: '/imgs/logo_guinda.png',
      description: 'Comunidad hecha exclusivamente para programarse unas peditas bien maquiavelicas bien aca bien asi',
      members: 250,
    },
    {
      name: 'Mecatronicos',
      image: '/imgs/logo_guinda.png',
      description: 'Aquí nadie sabe como arreglar nada pero los memes sobran. Mecatrónica en modo desmadre.',
      members: 250,
    },
    {
      name: 'Pelos y cebolla',
      image: '',
      description: 'Aqui vamos a hablar de puros pelos huevo cebolla. O sea es una comunidad de cocina.',
      members: 666,
    },
    {
      name: 'Peditas tec',
      image: '/imgs/logo_guinda.png',
      description: 'Comunidad hecha exclusivamente para programarse unas peditas bien maquiavelicas bien aca bien asi',
      members: 250,
    },
  ]

  const filteredCommunities = communities.filter(community =>
    community.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className='p-6'>
      <div className='flex rounded-full px-4 py-2 bg-gray-200'>
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 3.5a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={search}
          placeholder="Buscar comunidad..."
          className="outline-none bg-transparent w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredCommunities.map((community, index) => (
        <CommunityCard
          key={index}
          name={community.name}
          image={community.image}
          description={community.description}
          members={community.members}
        />
      ))}
    </div>
  )
}

export default page