import React,{useState,useEffect} from "react";
import {Table} from "react-bootstrap";

export default function Carros(){
    
    const [carros,setCarros]=useState([])

    useEffect(()=>{
        fetch("https://Carros.kfelipe.repl.co")
        .then(res=>res.json())
        .then(
            (resultado)=>{
                setCarros(resultado)
            }
        )

    })
    
        return(
           <div>
               {carros.map(
                   carro => <div key={carro.id}>{carro.id} - {carro.modelo} - {carro.marca}</div>
               )}
           </div>
        )


}