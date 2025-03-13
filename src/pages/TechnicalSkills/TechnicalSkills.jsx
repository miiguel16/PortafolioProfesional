import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import Photo1 from "../../assets/images/Photo1.jpg";
import Github from "../../assets/images/Github.jpg";



export function TechnicalSkills() {
  return (
    <main className="p-4 flex flex-grow">

      <div className='h-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4'>

        <CardInfo
          title="Frontend"
          content={`<p>HTML: En estructuras semánticas y accesibles.</p>
                  <p>CSS y Tailwind: Diseño adaptativo y responsive usando Flexbox, Grid y estilos utilitarios.</p>
                  <p>JavaScript: Manejo de eventos, manipulación del DOM junto a sincronía, asincronía y promesas.</p>
                  <p>React: Creación de componentes reutilizables, manejo de estado y consumo de APIs.</p>`}
          images={[Photo1]}
        />
        <CardInfo
          title="Control de Versiones"
          content={`<p>Git: Control de cambios y gestión de ramas.</p>
                  <p>GitHub: Repositorios, pull requests y despliegue con GitHub Pages.</p>`}
          images={[Github]}
        />
        <CardInfo
          title="Educación y Liderazgo"
          content={`<p>Lógica de Programación: Aplicación de estructuras de datos, algoritmos y buenas prácticas para la resolución eficiente de problemas.</p>
                  <p>Pensamiento Computacional: Desarrollo de habilidades analíticas para descomponer problemas complejos en soluciones programables.</p>
                  <p>Trabajo en equipo y colaboración: Participación activa en proyectos grupales.</p>`}
          images={[Photo1]}
        />
        <CardInfo
          title="Desarrollo Web"
          content="<p>Aplicaciones del lado del cliente.</p>"
          images={[Photo1]}
        />
      </div>


    </main>


  )
}