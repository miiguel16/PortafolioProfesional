import Photo1 from "../../assets/images/Photo1.jpg";

export const Main =()=>{
    return(
        <>
            <main className="size-full flex flex-col items-center justify-center" >
                <h5 className="text-lg text-white font-semibold pb-5">Hola, mi nombre es Miguel Ángel Chilito Herrera, actualmente estudio en el Sena Analisis y desarrollo de software (ASDO)</h5>
                <img className="w-full max-w-xl h-auto object-cover" src={Photo1} alt="imagen 1"/>
            </main>
        </>
    )
}