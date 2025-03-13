import React from 'react';
import Photo1 from "../../assets/images/Photo1.jpg";

export function SocialSkills() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-between p-6">

        <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto">
          {/* Imagen a la izquierda */}
          <div className="h-auto flex justify-center w-full md:w-1/3 mb-6 md:mb-0 mt-20 sm:mt-24 md:mt-0">
            <img
              className="w-24 sm:w-32 md:w-64 lg:w-80 h-auto object-cover rounded-lg shadow-lg"
              src={Photo1}
              alt="imagen 1"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="md:w-2/3 text-center md:text-left text-white font-semibold p-7">
            <p className="text-sm sm:text-base md:text-lg">
              A lo largo de mi formación académica y experiencia en proyectos, he desarrollado diversas habilidades sociales que me permiten interactuar de manera efectiva en diferentes entornos:
            </p>

            <p className="mt-4 text-sm sm:text-base">
              Comunicación efectiva: Expreso mis ideas con claridad y comprendo diferentes perspectivas, lo que facilita el trabajo en equipo y la resolución de problemas.
            </p>

            <p className="mt-4 text-sm sm:text-base">
              Liderazgo: Tengo la capacidad de motivar y guiar a un equipo hacia objetivos comunes, fomentando un ambiente de colaboración y crecimiento.
            </p>

            <p className="mt-4 text-sm sm:text-base">
              Honestidad: Actúo con transparencia y responsabilidad en cada tarea, priorizando la ética y el compromiso en mi trabajo.
            </p>

            <p className="mt-4 text-sm sm:text-base">
              Respeto: Valoro las opiniones y el trabajo de los demás, manteniendo siempre una actitud empática y profesional.
            </p>

            <p className="mt-4 text-sm sm:text-base">
              Trabajo en equipo: Me integro fácilmente en grupos de trabajo, aportando ideas y colaborando para alcanzar metas colectivas de manera eficiente.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
