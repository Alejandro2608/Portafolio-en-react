import React from 'react';
import logo from '../images/logo-light.svg'
import Curriculum from '../Downloads/Curriculum.pdf';

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg fixed-top bg-primary" >
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={logo} className="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"/>
                        </button>
            
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-4">
                                    <a className="nav-link" href="#hero">Casa</a>
                                </li>
                                <li className="nav-item mx-4">
                                    <a className="nav-link" href="#portafolio">Portafolio</a>
                                </li>
                                <li className="nav-item mx-4">
                                    <a className="nav-link" href="#testimonial">habilidades</a>
                                </li>
                                
                                <li className="nav-item mx-4">
                                    <a className="nav-link font-weight-bold" href={Curriculum}>Contrátame <i
                                            className="icon ion-md-arrow-forward align-middle ml-2"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}
export default NavBar;
