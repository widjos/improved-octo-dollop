import React, { useState,useEffect } from "react";
import {Pie} from "react-chartjs-2"
import Chart from 'chart.js/auto'

import axios from "axios";
import '../style/styles.css'

const PorcentajeGraph = () => {

    const [datos, setDatos] = useState([])
    const [graph, setGraph] = useState(
        {
            labels: [],
            datasets: [
              {
                label: "Porcentaje de Votantes / Departamento , Municipio",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255,255,255)",
                data: [],
              },
            ],
          }
    )

    const getData = async () => {
        const res = await axios.get(`http://34.132.49.30:5000/porcentajes`);
        //const texto = JSON.stringify(res.data)
        setDatos(res.data)
        console.log("Data ->")
        console.log(res.data)

        //Llenar datos para la grafica 
        setGraph(
            {
                labels: res.data.map((val) => val.DEPARTAMENTO+" , "+val.MUNICIPIO ),
                datasets: [
                  {
                    label: "Porcentaje",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(0,0,255)",
                    data: res.data.map((val) => val.PORCENTAJE),
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
                <h5>Porcentaje de Votantes</h5>  
            </div> 
            
            <Pie data={graph} />
            
        </>
      )
}

export const Porcentaje = PorcentajeGraph;