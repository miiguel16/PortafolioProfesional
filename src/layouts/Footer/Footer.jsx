import { ItemNav } from "../../components/ItemNav"

import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaLinkedin
} from "react-icons/fa"


export const Footer = () => {
    return (
        <>
            <footer className="bg-blue-950 w-full h-[30px] flex flex-row justify-center items-center">
                <ItemNav
                    contentItem="Hecho por: Miguel Chilito"
                    myStyle={"list-none pr-4 text-white"}
                />

                <ItemNav
                    contentItem={<FaFacebook className="text-white hover:text-blue-500 transition duration-300" />}
                    myStyle={"list-none pr-4"}
                    routes={"https://www.facebook.com/miguel.chilitoo/about?locale=es_LA"}
                />

                <ItemNav
                    contentItem={<FaInstagram className="text-white hover:text-pink-500 transition duration-300" />}
                    myStyle={"list-none pr-4"}
                    routes={"https://www.instagram.com/herreraaa.16?fbclid=IwY2xjawI8wphleHRuA2FlbQIxMAABHe096IVc040Lw9S888BdiavcR1Qw_MSwQ-OovOz9tDycs6qiZLAfETj_og_aem_VGLegcTDEs6suRZBo-bcTw"}
                />

                <ItemNav
                    contentItem={<FaGithub className="text-white hover:text-gray-600 transition duration-300" />}
                    myStyle={"list-none pr-4"}
                    routes={"https://github.com/miiguel16"}
                />

                <ItemNav
                    contentItem={<FaLinkedin className="text-white hover:text-blue-700 transition duration-300" />}
                    myStyle={"list-none pr-4"}
                    routes={"https://www.linkedin.com/in/miguel-chilito-9a57132b9/"}
                />    
            </footer>
        </>
    )
}