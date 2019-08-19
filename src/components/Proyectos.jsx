import React from 'react';
import Aplication from '../images/Aplication.png'
import Turuta from '../images/turuta.png'

class Proyectos extends React.Component {
   
    
    render() { 
        return ( 
            <section>
                        <div className="container" id="portafolio">
                            <div className="heading-title">
                                <h2>Featured projects</h2>
                                <p className="lead mt-3">Proyectos hechos en la media técnica de programacion Orientada a java, javascript y android studio</p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <a href={Aplication} className="mt-3">
                                        <img src={Aplication} className="img-fluid rounded"/>
                                    </a>
                                        <h5 className="mt-3"><span className="active">Featured project</span> - Proyecto Tu Ruta </h5>
                                            <p className="mt-2">Aplicación desarrollada en Android studio para dispositivos móviles sobre las rutas de buses cirucular coonatra 300, 301 y circular sur</p>
                                </div>
                                <div className="col-md-6">
                                    <a href={Turuta}className="mt-3">
                                        <img src={Turuta} className="img-fluid rounded"/>
                                    </a>
                                    <h5 className="mt-3"><span className="active">Featured project</span> - Página web de Tu Ruta</h5>
                                    <p className="mt-2">Página web en donde se definen el alcance, los objetivos generales y específicos del proyecto, etc. </p>
                                </div>
                            </div>
                        </div>
                    </section>
         );
    }
}
 
export default Proyectos;