import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import Logo1 from '../../assets/images/Logo1.jpg'
import Logo0 from '../../assets/images/Logo0.jpg'
import Sena1 from '../../assets/images/Sena1.webp'
import Sena2 from '../../assets/images/Sena2.png'

export function Studies() {
  return (
    <main className="p-4 flex flex-grow">
    
          <div className='h-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4'>
    
            <CardInfo
              title="Escuela Primaria"
              content={`<p>Mi desarrollo de la escuela primaria la hice en el colegio Ciudadela del Sur sede Pequeña via a Pueblo Tapado, ubicacda al sur de la ciudad de Armenia</p>`}
              images={[Logo0]}
            />
            <CardInfo
              title="Escuela Secundaria"
              content={`<p>Aunque la secundaria completa tambien la hice en Ciudadela, esta vez cambie para la gran sede principal ubicada en el barrio puerto espejo donde termine toda mi secundaria</p>`}
              images={[Logo1]}
            />
            <CardInfo
              title="Técnico en desarrollo de Software"
              content={`<p> ¡Mi tecniso en desarrolo de software lo hice atraves del Colegio pero, con excelentes profesores del sena en donde comencé a amar la programacion, Diria que ahi fue en donde viene el amor y dedicacion que le tengo a todo este tema!
                  </p>`}
              images={[Sena1]}
            />
            <CardInfo
              title="Desarrollo Web"
              content="<p>En el desarrollo web del lado del cliente, me enfoco en crear interfaces interactivas y atractivas con tecnologías como HTML, CSS, JavaScript y React. Uso Tailwind CSS para diseñar estilos de forma rápida y eficiente.</p>"
              images={[Sena2]}
            />
          </div>
    
    
        </main>
  )
}
