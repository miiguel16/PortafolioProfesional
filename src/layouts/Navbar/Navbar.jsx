import { ItemNav } from "../../components/ItemNav"

export const Navbar = ( ) => {
    return (
        <>
        <nav>
            <ul className="flex flex-row flex-wrap ">
                <ItemNav
                    
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Inicio"
                    routes="/"
                />
                <ItemNav
                    
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Habilidades tecnicas"
                    routes="/TechnicalSkills"
                />
                <ItemNav
                    
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Habilidades Sociales"
                    routes="/SocialSkills"
                />
                <ItemNav
                    
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Experiencia Profesional"
                    routes="/ProfessionalExperience"
                />
                <ItemNav
                    
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Estudios"
                    routes="/Studies"
                />
            </ul>
        </nav>
        </>
    )
}

