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

        fetch(`http://localhost:5000/funcionario/${id ? id: ""}`,{
            method:metodo,
            headers:{"Contetnt-Type":"Application/json"},
            body: JSON.stringify(produto)
        })
        .then(()=>navegacao("/lista"))
        .catch(error=>console.log(error))
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:5000/funcionario/${id}`)
            .then(resp=>resp.json())
            .then(data=>setNome(data))
            .catch(error=>console.log(error))
        }
    },[id])

    return(
        <main className="flex w-[10vw] justify-around  columns-1 gap-2 m-2 p-2">
            <section className="grid grid-cols-1
            items-center h-[75vh] w-[80vw] bg-gray-100  rounded-2xl ml-30">
                <div className=" bg-gray-300 rounded-2xl w-2xl justify-around ml-50">
                    <h1 className="text-center text-gray-600 ">Formulário Funcionario</h1>
                </div>
                <form className="grid justify-around items-center border-2 rounded-3xl border-gray-300 w-[50vw] ml-50
                p-2
                " onSubmit={handleSubmit}>
                    <input type="text" name="nome" value={novo?.nome} 
                    placeholder="Nome" onChange={handleChange}/><br/>
                    <input type="text" name="cargo" value={novo?.cargo}
                    placeholder="Cargo" onChange={handleChange}/><br/>
                    <input type="text" name="setor" value={novo?.setor}
                    placeholder="Setor" onChange={handleChange}/><br/>
                    <input type="text" name="turno" value={novo?.turno}
                    placeholder="Turno" onChange={handleChange}/><br/>
                    <input className="w-[40vw]"
                    type="text" name="salario" value={novo?.salario}
                    placeholder="Salario" onChange={handleChange}/><br/>
                    <button className="m-1 bg-blue-600 text-white px-2 pb-1 rounded-md hover:font-bold" type="submit">Enviar</button>
                    <Link to={"/"} className="m-1 bg-red-600 text-white px-2
                                    pb-0.75 rounded-md hover:font-bold text-center">Cancelar</Link>
                    
                </form>
            </section>
        </main>
    )
}