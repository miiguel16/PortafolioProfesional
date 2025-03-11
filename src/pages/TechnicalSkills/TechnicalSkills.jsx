import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import Photo1 from "../../assets/images/Photo1.jpg";
import Github from "../../assets/images/Github.jpg";



export function TechnicalSkills() {
  return (
    <main  className="h-dvh">

      {/* <main  className="flex-1 p-4"> */}

    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4 flec  '>
      
        <CardInfo
          title="Frontend"
          content="HTML: En estructuras semánticas y accesibles.
          CSS y Tailwind: Diseño adaptativo y responsive usando Flexbox, Grid y estilos utilitarios.
          JavaScript: Manejo de eventos, manipulación del DOM junto a sincronía, asincronía y promesas.
          React: Creación de componentes reutilizables, manejo de estado y consumo de APIs."   
          images={[Photo1]}
        />
        <CardInfo
          title="Control de Versiones"
          content="Git: Control de cambios y gestión de ramas.
          GitHub: Repositorios, pull requests y despliegue con GitHub Pages."
          images={[Github]}
        />
        <CardInfo
          title="Educación y Liderazgo"
          content="Lógica de Programación: Aplicación de estructuras de datos, algoritmos y buenas prácticas para la resolución eficiente de problemas.
          Pensamiento Computacional: Desarrollo de habilidades analíticas para descomponer problemas complejos en soluciones programables.
          Trabajo en equipo y colaboración: Participación activa en proyectos grupales.
"
          images={[Photo1]}
        />
        <CardInfo
          title="Desarrollo Web"
          content="Aplicaciones del lado del cliente."
          images={[Photo1]}
        />
    </div>


    </main>


  )
}
