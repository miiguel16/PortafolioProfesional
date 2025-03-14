import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import Lenguajes from "../../assets/images/Lenguajes.png";
import Reeact from "../../assets/images/Reeact.png";
import Tailwind from "../../assets/images/Tailwind.png";
import Java from "../../assets/images/Java.png";
import Github from "../../assets/images/Github.jpg"
import Git from "../../assets/images/Git.png"
import Education from "../../assets/images/Education.jpg"
import Education2 from "../../assets/images/Education2.jpg"
import Web from "../../assets/images/Web.jpg"
import Web2 from "../../assets/images/Web2.jpg"


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
          images={[Reeact,Lenguajes,Tailwind,Java]}
        />
        <CardInfo
          title="Control de Versiones"
          content={`<p>Git: Control de cambios y gestión de ramas.</p>
                  <p>GitHub: Repositorios, pull requests y despliegue con GitHub Pages.</p>`}
          images={[Github, Git]}
        />
        <CardInfo
          title="Educación y Liderazgo"
          content={`<p>Lógica de Programación: Aplicación de estructuras de datos, algoritmos y buenas prácticas para la resolución eficiente de problemas.</p>
                  <p>Pensamiento Computacional: Desarrollo de habilidades analíticas para descomponer problemas complejos en soluciones programables.</p>
                  <p>Trabajo en equipo y colaboración: Participación activa en proyectos grupales.</p>`}
          images={[Education2, Education]}
        />
        <CardInfo
          title="Desarrollo Web"
          content="<p>En el desarrollo web del lado del cliente, me enfoco en crear interfaces interactivas y atractivas con tecnologías como HTML, CSS, JavaScript y React. Uso Tailwind CSS para diseñar estilos de forma rápida y eficiente.</p>"
          images={[Web,Web2]}
        />
      </div>


    </main>


  )
}