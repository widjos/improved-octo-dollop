import React, { useState,useEffect } from "react";
import {Bar} from "react-chartjs-2"
import Chart from 'chart.js/auto'

import axios from "axios";
import '../style/styles.css'


const  Top5 = () => {

    const [datos, setDatos] = useState([])
    const [departamento, setDepartamento] = useState([])
    const [votos, setVotos] = useState([])
    const [graph, setGraph] = useState(
        {
            labels: departamento,
            datasets: [{
              data: votos,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
              ],
              borderWidth: 1
            }]
          }
    )

    const getData = async () => {
      const res = await axios.get(`http://34.132.49.30:5000/getTop5`);
      //const texto = JSON.stringify(res.data)
      setDatos(res.data)
      console.log("Data ->")
      console.log(res.data)
      
       // if(datos.length > 0){
        console.log('No esta vacio')
        console.log(datos)
           
        setGraph({
            labels: res.data.map((val) => val.DEPARTAMENTO),
            datasets: [{
              data: res.data.map((val)=> val.VOTOS),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
              ],
              borderWidth: 1
            }]
          })     

  //          }    
  
    }

    const chargeData =  async ()  => {
        setDepartamento(datos.map((val)=> val.DEPARTAMENTO))
        console.log("Actual")
        console.log(datos.map((val,key)=> val.DEPARTAMENTO))
        setVotos(datos.map((val)=> val.VOTOS))
       /* setGraph(
            {
                labels: departamento,
                datasets: [{
                  data: votos,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)'
                  ],
                  borderWidth: 1
                }]
              }
        )  
*/
    }


    
  
    useEffect(()=>{
      const interval = setInterval(()=>{
        getData();

        
       
      }, 5000)
      
    },[]);



  

    return (
        <>
            <div style={{hposition:"relative",marginBottom:"1%",padding:"1%",
                backgroundColor :"white"}}>
                <h5>Top 5 Departamentos que votaron para presidente</h5>  
            </div> 
            <div>
                <Bar data={ graph}  />

            </div>
        </>
    )

}

export const Top = Top5;