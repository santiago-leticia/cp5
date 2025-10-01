import { Link } from "react-router-dom";


export default function Menu(){

    return(
        <div className="flex justify-center
            items-center">
            <nav className="flex justify-around  w-[60vw] h-8 text-white 
            font-bold text-lg border-2 border-sky-800">
                <Link to={'/'}>Home</Link>
                <Link to={'/lista'}>Lista de Funcionario</Link>
            </nav>
        </div>

    )
}