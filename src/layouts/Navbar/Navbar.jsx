import { ItemNav } from "../../components/ItemNav/ItemNav"
import React, { useEffect, useState } from 'react';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location]);


    return (
        <nav>
            <button
                onClick={toggMenu}
                className="sm:hidden bg-blue-600 text-black py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out"
            >
                {isOpen ? 'Cerrar' : 'Menú'}
            </button>

            {isOpen && (
                <ul className="sm:hidden absolute top-16 left-0 right-0 bg-gray-800 py-4 px-6 rounded-b-lg shadow-lg flex flex-col space-y-4 mt-2">
                    <ItemNav routes={'/'} contentItem='Inicio' />
                    <ItemNav routes={'/TechnicalSkills'} contentItem='Habilidades Técnicas' />
                    <ItemNav routes={'/SocialSkills'} contentItem='Habilidades Sociales ' />
                    <ItemNav routes={'/ProfessionalExperience'} contentItem='Experiencia Profesional ' />
                    <ItemNav routes={'/Studies'} contentItem='Estudios ' />
                </ul>
            )}

            <ul className="hidden sm:flex space-x-8 font-extralight">
                <ItemNav routes={'/'} contentItem= 'Home ' />
                <ItemNav routes={'/TechnicalSkills'} contentItem='Habilidades Técnicas ' />
                <ItemNav routes={'/SocialSkills'} contentItem='Habilidades Sociales ' />
                <ItemNav routes={'/ProfessionalExperience'} contentItem='Experiencia Profesional ' />
                <ItemNav routes={'/Studies'} contentItem='Estudios ' />
            </ul>
        </nav>
    )
}

