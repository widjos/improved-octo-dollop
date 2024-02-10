import React, { useState,useEffect } from "react";
import axios from "axios";
import '../style/styles.css'
import Table from 'react-bootstrap/Table'


const  Votos = () => {
  const [datos, setDatos] = useState([])

  const getData = async () => {
    const res = await axios.get(`http://34.132.49.30:5000/getData`);
    //const texto = JSON.stringify(res.data)
    setDatos(res.data)
    console.log("Data ->")
    console.log(res.data)

  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      getData();
    }, 3000)
    getData();
  },[]);


  return (
        <>
        <div style={{position:"center",marginBottom:"1%",padding:"1%",
            backgroundColor :"white"}}>
            <h4>Listado de Votos Recibidos</h4>  
            </div>     
         <div className="App" style={{overflow: "scroll", height:"500px"}}>  

            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>No</th>
                    <th>Sede</th>
                    <th>Municipio</th>
                    <th>Departamento</th>
                    <th>Papeleta</th>
                    <th>Partido</th>    
                </tr>  
                </thead>
                <tbody>
                    {datos.map((val,key)=>{
                        return(
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{val.SEDE}</td>
                            <td>{val.MUNICIPIO}</td>
                            <td>{val.DEPARTAMENTO}</td>
                            <td>{val.PAPELETA}</td>
                            <td>{val.PARTIDO}</td>

                        </tr>
                        )
                    })}
                </tbody>              
            </Table>
        </div>
        </>
  )
}

export const Vot = Votos;