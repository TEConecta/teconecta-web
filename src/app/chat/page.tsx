import React from 'react'
import HeaderChat from './components/HeaderChat'
import MensajeEnviado from './components/MensajeEnviado'
import { Navigation } from '../posts/components'

const page = () => {
  return (
    <div>
        <HeaderChat />
        <MensajeEnviado 
        mensaje={"xd"} />
        <Navigation />
    </div>
  )
}

export default page