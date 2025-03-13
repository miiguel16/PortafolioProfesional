import Photo1 from "../../assets/images/Photo1.jpg";

export const Main = () => {
    return (
        <>
            <main className=" flex flex-col md:flex-row items-center justify-center p-6">
                {/* Imagen a la izquierda */}
                <div className="md:w-1/3 flex justify-center">
                    <img
                        className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg shadow-lg"
                        src={Photo1}
                        alt="imagen 1"
                    />
                </div>

                {/* Texto par poner a la derecha */}
                <div className="md:w-2/4 text-center md:text-left text-white font-semibold p-5">
                    <p className="text-base">
                        Soy Miguel Ángel Chilito Herrera, estudiante de Análisis y Desarrollo de Software (ADSO) en el Servicio Nacional de Aprendizaje (SENA). Actualmente, estoy en busca de oportunidades para aplicar y ampliar mis conocimientos en programación. Me caracterizo por ser una persona capaz de aprender nuevas cosas de manera rapida y practico así como mi compromiso con el aprendizaje continuo y el crecimiento profesional, respaldado por mi formación en el SENA.
                    </p>
                    <p className="mt-4">
                        Tengo experiencia en JavaScript utilizando React.js, complementado con el framework de estilos Tailwind CSS. Me destaco por mi capacidad para trabajar en equipo, mi atención al detalle y mi habilidad para resolver problemas a través de soluciones innovadoras en el ámbito tecnológico.
                    </p>
                    <p className="mt-4">
                        Mi objetivo es especializarme tanto en el desarrollo back-end como en el front-end , poder llegar a ser uno de los mejores "full stack" y formar parte de un entorno laboral que me permita seguir aprendiendo y contribuir a proyectos significativos.
                    </p>



                    
                </div>
            </main>

        </>
    )
}