import React from 'react';
import ExpeLaboral from '../../assets/images/ExpeLaboral.png';

export function ProfessionalExperience() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">

      {/* Texto para poner arriba */}
      <div className="md:w-2/4 text-justify md:text-left text-white font-semibold p-8">
        <p className="text-base">
          A lo largo de mi formación académica y experiencia en proyectos, he desarrollado diversas habilidades sociales que me permiten interactuar de manera efectiva en diferentes entornos:
        </p>

        <p className="mt-4">
          Comunicación efectiva: Expreso mis ideas con claridad y comprendo diferentes perspectivas, lo que facilita el trabajo en equipo y la resolución de problemas.
        </p>

        <p className="mt-4">
          Liderazgo: Tengo la capacidad de motivar y guiar a un equipo hacia objetivos comunes, fomentando un ambiente de colaboración y crecimiento.
        </p>

        <p className="mt-4">
          Honestidad: Actúo con transparencia y responsabilidad en cada tarea, priorizando la ética y el compromiso en mi trabajo.
        </p>

        <p className="mt-4">
          Respeto: Valoro las opiniones y el trabajo de los demás, manteniendo siempre una actitud empática y profesional.
        </p>

        <p className="mt-4">
          Trabajo en equipo: Me integro fácilmente en grupos de trabajo, aportando ideas y colaborando para alcanzar metas colectivas de manera eficiente.
        </p>
      </div>

      {/* Imagen debajo del texto */}
      <div className="h-auto flex justify-center mt-6">
        <img
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg shadow-lg"
          src={ExpeLaboral}
          alt="ExpeLaboral"
        />
      </div>
      
    </main>
  );
}
