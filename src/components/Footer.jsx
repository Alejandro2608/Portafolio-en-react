import React from 'react';
import Logo from '../images/logo-light.svg';

class Footer extends React.Component {
 
    render() { 
        return ( 
            <footer className="bg-primary">
                                <div className="container">
                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            <h6 className="text-uppercase">Services</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Web design</a></li>
                                                <li><a href="#">Web development</a></li>
                                                <li><a href="#">Mobile apps</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="text-uppercase">Information</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">About me</a></li>
                                                <li><a href="#">Portfolio</a></li>
                                                <li><a href="#portafolio">Previous jobs</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="text-uppercase">Resources</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Free tutorials</a></li>
                                                <li><a href="#">PSD templates</a></li>
                                                <li><a href="#">Bootstrap templates</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 float-lg-right">
                                            <img src={Logo} className="logo"/>
                                            <p className="mt-4">Este ha sido mi portafolio, si les ha gustado mi trabajo no duden en contactarse conmigo por mis redes sociales.</p>
                                        </div>
                                    </div>
                        
                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            <p>© 2019 Personal Portfolio.</p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <p>Made by <a href="https://themesbootstrap.com.mx/" className="font-weight-bold" target="_blank">Themes
                                                    Bootstrap</a></p>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="list-inline text-center float-lg-right">
                                                <li className="list-inline-item mt-0"><a href="https://www.instagram.com/alejo_ortega2608/" title="Instagram"><i className="fab fa-instagram mt-0"></i></a>
                                                </li>
                                                <li className="list-inline-item mt-0 ml-3"><a href="https://twitter.com/OrtegaaAlejo" title="Twitter"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="list-inline-item mt-0 ml-3"><a href="https://github.com/Alejandro2608" title="GitHub"><i className="fab fa-github"></i></a>
                                                </li>
                                                <li className="list-inline-item mt-0 ml-3"><a href="https://www.linkedin.com/in/alejandro-ortega-64025818a/" title="Linkedin"><i className="fab fa-linkedin"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </footer>
         );
    }
}
 
export default Footer;