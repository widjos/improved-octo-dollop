import React from 'react'
import '../style/styles.css'
import { Porcentaje } from './Porcentajes'
import { Top } from './Top5'
import  { Vot }  from './Table'
import { Last5 } from './Ultimos5'
import { Sede } from './SedesMayorVoto'


export class Welcome extends React.Component {
    render() {
        return (
            <div className='welcome-dash'>
                <div>               
                <p>
                   <h4> 201602952 / 201212919 </h4>
                </p>
                <p>
                 <h4>  Sistemas Operativos 1 </h4>
                 <h4>  Primer Semestre del 2023 </h4>
                </p>
                </div>
                <div className='dashboard'>
                    <div className='row-dashboard'>
                          <Porcentaje />
                           <Top />
                        </div>
                    <div className='row-dashboard'>
                          <Last5 />
                           <Sede />
                        </div>
                        <div className='row-dashboard'>
                        <Vot />
                        </div>
                    </div>
                </div>
            
        )
    }
}