import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { preview } from "vite";



type TypeFuncionarios ={
    id:number,
    Nome:string,
    Cargo:string,
    Setor:string,
    Turno:string,
    Salario:string
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

    return(<div>
        
    </div>)
}