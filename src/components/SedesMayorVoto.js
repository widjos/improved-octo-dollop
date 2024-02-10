import React, { useState,useEffect } from "react";
import {Doughnut} from "react-chartjs-2"
import Chart from 'chart.js/auto'

import axios from "axios";
import '../style/styles.css'

const SedeMayor = () => {

    const [datos, setDatos] = useState([])
    const [colors, setColor] = useState(["rgb(15,55,255)","rgb(0,11,255)","rgb(55,52,255)","rgb(78,12,30)","rgb(0,0,240)"])
    const [graph, setGraph] = useState(
        {
            labels: [],
            datasets: [
              {
                label: "Porcentaje de Votantes / Departamento , Municipio",
                backgroundColor: "rgb(100, 85, 132)",
                borderColor: "rgb(255,255,255)",
                data: [],
              },
            ],
          }
    )

    const getData = async () => {
        const res = await axios.get(`http://34.132.49.30:5000/top-sedes`);
        //const texto = JSON.stringify(res.data)
        setDatos(res.data)
        console.log("Data ->")
        console.log(res.data)

        //Llenar datos para la grafica 
        setGraph(
            {
                labels: res.data.map((val) => val.SEDE+' : '+val.DEPARTAMENTO+" , "+val.MUNICIPIO ),
                datasets: [
                  {
                    label: "Vatos Registrados",
                    backgroundColor: "rgb(100, 85, 118)",
                    borderColor: colors,
                    data: res.data.map((val) => val.VOTOS),
                  },
                ],
            
              }
        )
      }

    useEffect(()=>{
        const interval = setInterval(()=>{
          getData();
        }, 10000)
      },[]);

    
      return (
        <> 
            <div style={{hposition:"relative",marginBottom:"1%",padding:"1%", backgroundColor :"white"}}>
                <h5>Numero de Sede Con mayor Votos</h5>  
            </div> 
            
            <Doughnut data={graph} />
            
        </>
      )
}

export const Sede = SedeMayor;