import { References } from "../References/References"
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
                <References
                    styleReference="list-none pr-4"
                    contentReference="Hecho por: Miguel Chilito"
                />

                <References
                    styleReference="list-none pr-4"
                    contentReference={
                        <a href="https://www.facebook.com/miguel.chilitoo/about?locale=es_LA" target="_blacl" rel="noopener noreferrer">
                            <FaFacebook className="text-white hover:text-blue-500 transition duration-300" />
                        </a>
                    }
                />

                <References
                    styleReference="list-none pr-4"
                    contentReference={
                        <a href="https://www.instagram.com/herreraaa.16?fbclid=IwY2xjawI8wphleHRuA2FlbQIxMAABHe096IVc040Lw9S888BdiavcR1Qw_MSwQ-OovOz9tDycs6qiZLAfETj_og_aem_VGLegcTDEs6suRZBo-bcTw" 
                        target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-white hover:text-pink-500 transition duration-300" />
                        </a>
                    }
                />

                <References
                    styleReference="list-none pr-4"
                    contentReference={
                        <a href="https://github.com/miiguel16" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white hover:text-red-500 transition duration-300" />
                        </a>
                    }
                />

                <References
                    styleReference="list-none pr-4"
                    contentReference={
                        <a href="https://www.linkedin.com/in/miguel-chilito-9a57132b9/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white hover:text-blue-700 transition duration-300" />
                        </a>
                    }
                />

            </footer>
        </>
    )
}