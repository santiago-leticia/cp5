import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

type TypeFuncionarios ={
    id:number,
    Nome:string,
    Cargo:string,
    Setor:string,
    Turno:string,
    Salario:number
}

export default function ListaFuncionarios(){

    const [funcionario, setFuncionario] = useState<TypeFuncionarios[]>([])

    useEffect(()=>{
        
        fetch('http://localhost:3000/Funcionarios')
        .then(resp=>resp.json())
        .then(resp=>setFuncionario(resp))
    },[])

    const handleDelete= (id:number)=>{
        fetch(`http://localhost:3000/Funcionarios/${id}`,{method:"delete"})
        .then(()=> {setFuncionario(prev => prev.filter(p=>p.id !==id))})
        .catch(error=>console.log(error))
    }

    return(
        <div>
            <h1>Lista de funcionario</h1>

            <Link to={'/incluir'}>Inserir Funcionario</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th><th>Cargo</th><th>Setor</th><th>Turno</th><th>Salario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        funcionario.map(prod=>(
                            <tr key={prod.id}>
                                <td>{prod.Nome}</td>
                                <td>{prod.Cargo}</td>
                                <td>{prod.Setor}</td>
                                <td>{prod.Turno}</td>
                                <td>{prod.Salario.toFixed(2)}</td>
                                <td>
                                    <Link to={`/editar/${prod.id}`}>Editar</Link>
                                    <button  onClick={()=>handleDelete(prod.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}