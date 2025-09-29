import React, {useEffect, useState} from "react"
import { useNavigate, useParams, Link} from "react-router-dom"

type TypeNovo={
    nome:string;
    cargo:string;
    setor:string;
    turno:string;
    salario:string;
}

export default function FormFuncionario(){

    const{id}= useParams()
    const navegacao=useNavigate()

    const[novo, setNome]= useState<TypeNovo>(
        {nome:"", cargo:"", setor:"", turno:"", salario:""}
    )
    let metodo:string= "POST"

    if(id) metodo="PUT"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setNome({...novo,[name]:value})
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const produto={...novo,salario:Number(novo.salario)}

        fetch(`http://localhost:3000/Funcionarios/${id ? id: ""}`,{
            method:metodo,
            headers:{"Contetnt-Type":"Application/json"},
            body: JSON.stringify(produto)
        })
        .then(()=>navegacao("/lista"))
        .catch(error=>console.log(error))
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:3000/Funcionarios/${id}`)
            .then(resp=>resp.json())
            .then(data=>setNome(data))
            .catch(error=>console.log(error))
        }
    },[id])

    return(
        <div>
            <h1>Formulário Funcionario</h1>

            <form className="" onSubmit={handleSubmit}>
                <input type="text" name="nome" value={novo?.nome} 
                placeholder="Nome" onChange={handleChange}/><br/>
                <input type="text" name="cargo" value={novo?.cargo}
                placeholder="Cargo" onChange={handleChange}/><br/>
                <input type="text" name="setor" value={novo?.setor}
                placeholder="Setor" onChange={handleChange}/><br/>
                <input type="text" name="turno" value={novo?.turno}
                placeholder="Turno" onChange={handleChange}/><br/>
                <input type="text" name="salario" value={novo?.salario}
                placeholder="Salario" onChange={handleChange}/><br/>
                <button type="submit">Enviar</button>
                <Link to={"/"}>Cancelar</Link>
            </form>
        </div>
    )
}