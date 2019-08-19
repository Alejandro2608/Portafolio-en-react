import React from 'react'
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Referente from '../components/Referente';
import Proyectos from '../components/Proyectos'
import Habilidades from '../components/Habilidades';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
    return(
        <Main>
            <NavBar/>
            <Referente/>
            <Proyectos/>
            <Habilidades/>
            <Footer/>
        </Main>
    );
}

export default App;