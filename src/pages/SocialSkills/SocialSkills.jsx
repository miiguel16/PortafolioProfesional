import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import Photo1 from "../../assets/images/Photo1.jpg";

export function SocialSkills() {
  return (
    <main>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4 flec  '>


        <img className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover" src={Photo1} alt="imagen 1" />


        <CardInfo
          title="Mis habilidades sociales son"
          content={`Comunicación efectiva: Expresión clara y comprensión de ideas en distintos contextos.\n
          Liderazgo: Capacidad de inspirar y guiar a equipos hacia objetivos comunes.\n
          Honestidad: Transparencia y ética en el trabajo y en la toma de decisiones.\n
          Respeto: Consideración y empatía en la colaboración con otros.\n
          Trabajo en equipo: Cooperación efectiva para alcanzar metas colectivas.`}
        />

      </div>
    </main>
  )
}
