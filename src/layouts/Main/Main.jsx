import Photo1 from "../../assets/images/Photo1.jpg";

export const Main =()=>{
    return(
        <>
            <main className="size-full flex flex-col items-center justify-center" >
                <h2 className="text-amber-300 font-semibold text-4xl pb-5">Acá pondremos todo lo que iremos haciendo en el main</h2>
                <img className="h-170 " src={Photo1} alt="imagen 1"/>
            </main>
        </>
    )
}