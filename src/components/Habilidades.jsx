import React from 'react';
import Html from '../images/html.png';
import Rea from '../images/react.png';
import Js from '../images/javascript.png';

class Habilidades extends React.Component {
    
    render() { 
        return ( 
            <section id="testimonial" className="bg-grey">
            <div className="container">
                <div className="heading-title">
                    <h2>Habilidades desarrolladas</h2>
                    <p className="lead mt-3">Me he estado especializando en todo a lo que front-end se refiere, y los marcos de trabajo son los siguientes:</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-sm-12">
                        <div className="card my-3 p-4">
                            <img src={Html} className="logo-company"/>
                            <p className="mt-3">He hecho varios trabajos orientados a HTML y CSS, tengo dominio del tema, manejo JCUERY y responsive design</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card my-3 p-4">
                            <img src={Js} className="logo-company"/>
                            <p className="mt-3">He trabajado JavaScript y aun sigo en ello, aún no lo domino completamente</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card my-3 p-4">
                            <img src={Rea} className="logo-company"/>
                            <p className="mt-3">Me estoy especializando en React.js, tengo cierto dominio del tema, pero aún me falta mucho por aprender </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section> 
         );
    }
}
 
export default Habilidades;