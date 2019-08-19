import React from 'react';
import alejo from '../images/alejandro.jpg';
import TuRuta from '../Downloads/HTML5.1.rar'

class Referente extends React.Component{
    render (){
        return (
            <section id="hero" className="bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-7 d-flex mt-5">
                        <div className="align-self-center">
                            <h1 className="display-4 text-light">Mario Alejandro Ortega Alzate</h1>
                            <p className="lead text-light mt-4">Me estoy especializando en todo lo que a FRONT-END se refiere</p>
                            <div className="d-flex mt-4">
                                <p className="text-light align-self-center font-weight-bold mb-0">Sígueme:</p>
                                <ul className="list-inline align-self-center text-light ml-4 mb-0">
                                    <li className="list-inline-item"><a href="https://www.instagram.com/alejo_ortega2608/"><i className="fab fa-instagram" title="Instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item ml-3"><a href="https://twitter.com/OrtegaaAlejo"><i className="fab fa-twitter" title="Twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item ml-3"><a href="https://github.com/Alejandro2608" title="github"><i className="fab fa-github"></i></a>
                                    </li>
                                    <li className="list-inline-item ml-3"><a href="https://www.linkedin.com/in/alejandro-ortega-64025818a/"><i className="fab fa-linkedin" title="linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <a href={TuRuta} class="btn btn-secondary mt-5">Descarga Tu Ruta<i
                                            class="icon ion-md-arrow-forward align-middle ml-3"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-sm-5 d-flex mt-5">
                        <div className="align-self-center text-center mx-auto">
                            <img src={alejo} className="img-fluid main-photo"/>
                        </div>
                    </div>
                </div>
    
            </div>
        </section>

        );
    }
}
export default Referente;