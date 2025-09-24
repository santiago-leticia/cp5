import React, {useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

type TypeNovo={
    Nome:string;
    Cargo:string;
    Setor:string;
    Turno:string;
    Salario:string;
}

export default function FormFuncionario(){

    const{id}= useParams()
    const navegaao=useNavigate()

    const[novo, setNome]= useState<TypeNovo>(
        {Nome:"", Cargo:"", Setor:"", Turno:"", Salario:0}
    )
    let metodo:string= "POST"

    if(id) metodo="PUT"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setNome({...novo,[name]:value})
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const produto={...novo,Salario:Number(novo.Salario)}

        fetch(`http://localhost:3000/Funcionarios/${id ? id: ""}`,{
            method:metodo,
            //vai enviar para funcionar
            headers:{"Contetnt-Type":"Application/json"},
        })
    }
}