import { useEffect,useState } from "react";
import { Link } from "react-router-dom";


export type TypeFuncionarios ={
    id:number,
    Nome:string,
    Cargo:string,
    Setor:string,
    Turno:string,
    Salario:number
}

export default function ListaFuncionario(){

    const [funcionario, setFuncionario] = useState<TypeFuncionarios[]>([])

    useEffect(()=>{
        
        fetch('http://localhost:5000/funcionario')
        .then(resp=>resp.json())
        .then(resp=>setFuncionario(resp))
    }, [])

    const handleDelete= (id:number)=>{
        fetch(`http://localhost:5000/funcionario/${id}`,{method:"delete"})
        .then(()=> {setFuncionario(prev => prev.filter(p=>p.id !==id))})
        .catch(error=>console.log(error))
    }


    return(
        
        <main className="grip justify-around w-[100vw] p-5 m-7">
            <h1 className=" justify-around text-center items-center w-[20vw] ml-10 text-white  bg-gray-200 rounded-2xl">Lista de funcionario</h1>
            <div className="grip justify-around w-[80vw] p-2 m-auto ml-20">
                <thead className="grip justify-around">
                        <div className="*:p-2 w-[1000px] ml-6 flex justify-around  bg-gray-300 text-white">
                            <th>Nome</th><th>Cargo</th><th>Setor</th><th>Turno</th><th>Salario</th>
                        </div>
                    </thead>
                    <table className="ml-6 p-2 w-250">
                    <tbody className="border-2 border-gray-300">
                        {funcionario.map((func)=>(
                                <tr key={func.id}
                                className=" grid-cols-1 *:p-2.5">
                                    <td>{func.Nome }</td>
                                    <td>{func.Cargo}</td>
                                    <td>{func.Setor}</td>
                                    <td>{func.Turno}</td>
                                    <td>{func.Salario.toFixed(2)}</td>
                                    <td>
                                        <Link className="m-1 bg-blue-500 text-white px-2 pb-1 rounded-md hover:font-bold"
                                         to={`/editar/${func.id}`}>Editar</Link>
                                        <button className="m-1 bg-red-500 text-white px-2 pb-1 rounded-md hover:font-bold"
                                          onClick={()=>handleDelete(func.id)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table> 
                <tfoot className=" flex ml-6 p-2 w-250 justify-around bg-gray-500  text-center text-white"> 
                    <td colSpan={4}>Funcionarios do Hospital das clinicas</td>
                </tfoot>
                
            </div>
            <aside className="grip m-5 p-2 ml-25 w-[15vw] justify-around rounded-2xl items-center bg-gray-400">
                <Link className="text-center text-white" to={'/incluir'}>Inserir Funcionario</Link>
            </aside>
        </main>
    )
}