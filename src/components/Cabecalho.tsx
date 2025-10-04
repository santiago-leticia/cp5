

export default function Caecalho(){

    return(
        <header>
            <section className="flex justify-end p-2" >
                <div className="flex justify-around border-2 border-gray-400 w-[15vw]">
                <input className="focus:outline-none focus:shadow-none w-[10vw]
                text-[12px]" type="text" name="O que deseja" placeholder="O que buscar"/>
                <img className="w-[3vw]" src="/lupa.png" alt="" />
            </div>
            </section>
            <figure className=" flex p-5 m-1.5 justify-between ">
                <img className="w-auto h-[15vh] mr-5" src="/logohc.png" alt="" />
                <img src="/md.png" alt="" className="w-auto h-[15vh] ml-5" />
            </figure>
            
        </header>

    )
}