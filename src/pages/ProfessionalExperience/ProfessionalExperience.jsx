import React from 'react';
import ExpeLaboral from '../../assets/images/ExpeLaboral.png';

export function ProfessionalExperience() {
  return (
    <main className="flex flex-col items-center justify-center px-4">

      {/* Texto para poner arriba */}
      <div className="w-full md:w-2/4 text-justify md:text-left text-white font-semibold p-8">
        <p className="text-base sm:text-lg md:text-lg pt-4">
          En estos momentos no cuento con experiencia laboral, pero estoy en constante aprendizaje y preparación para enfrentar nuevos retos y oportunidades en el ámbito laboral.
        </p>

        <p className="text-base sm:text-lg md:text-Lg pt-4">
          Estoy dispuesto a adquirir nuevos conocimientos y habilidades, así como a colaborar en proyectos que me permitan crecer profesionalmente y aportar valor a la empresa.
        </p>

      </div>

      {/* Imagen debajo del texto */}
      <div className="h-auto flex justify-center mt-6">
        <img
          className="w-32  sm:w-48 md:w-64 lg:w-96 h-auto object-cover rounded-lg shadow-lg"
          src={ExpeLaboral}
          alt="ExpeLaboral"
        />
      </div>

    </main>
  );
}
