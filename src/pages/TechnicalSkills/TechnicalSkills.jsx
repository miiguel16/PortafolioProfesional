import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import Photo1 from "../../assets/images/Photo1.jpg";


export function TechnicalSkills() {
  return (
    <main  className="h-dvh">

      {/* <main  className="flex-1 p-4"> */}

    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4 '>
      
        <CardInfo
          title="Habilidades Tecnicas"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."   
          images={[Photo1]}
        />
        <CardInfo
          title="Habilidades Tecnicas"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          images={[Photo1]}
        />
        <CardInfo
          title="Habilidades Tecnicas"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          images={[Photo1]}
        />
        <CardInfo
          title="Habilidades Tecnicas"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          images={[Photo1]}
        />
        <CardInfo
          title="Habilidades Tecnicas"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          images={[Photo1]}
        />
    </div>


    </main>


  )
}
