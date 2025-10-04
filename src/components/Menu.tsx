import { Link } from "react-router-dom";


export default function Menu(){

    return(
        <div>
            <nav className=" flex justify-around h-auto items-center p-1">
                <section className=" w-[80vw] h-[8vh] bg-[#ececec]
            items-center p-2 rounded-2xl
            border-b-3 border-b-teal-500 border-2 border-white">
                    <div className="flex justify-around  
                        items-center border-2 border-gray-300
                        h-[5vh] w-auto text-gray-400 rounded-2xl text-">
                            <Link className="" to={"/incluir"}>Adicionar</Link> 
                            <Link to={'/'}>Home</Link>
                            <Link to={'/lista'}>Lista</Link>
                        </div>
                </section>
            </nav>
        </div>

    )
}