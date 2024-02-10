import React from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class='container'>
                        <a class="navbar-brand" href='/'>Proyecto Final</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            
                                <li class="nav-item active">
                                        <a href="/data" class="nav-link">Votos</a>
                                </li>
                                <li class="nav-item active">
                                        <a href='/top5' class="nav-link" >Top 5</a>
 
                                </li>
                                <li class="nav-item active">
                                        <a href='/porcentaje' class="nav-link" >Porcentajes</a>
                                </li>
                                <li class="nav-item active">
                                        <a href='/sede' class="nav-link" >Sedes con mas votos</a>
                                </li>
                                <li class="nav-item active">
                                        <a href='/ultimos' class="nav-link" >Ultimos 5</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}