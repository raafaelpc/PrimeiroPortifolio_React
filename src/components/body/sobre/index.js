import React from 'react'
import "../sobre/sobre.css";
import Fotoperfil from "../../../assets/19199655.jpg";




function Sobre() {
    return (
    <div className='container-about'>
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                <br/><span className='about-name'>Olá sou Rafael</span>
                <br/><span className='about-skill'>Estudante de Ciências da Computação no Centro Universitário Estácio do Ceará,<br></br>empenhado no estudo e prática
do Desenvolvimento Web.</span>
                   
                </div> 
                
                <div className='about-photo'>
                            
                <img src={Fotoperfil}  className='picture'/>
                          
            </div>
            
            <br/><span className='about-code'></span>  

    </div>
    
    </div>
    </div>
    );
    
}

export default Sobre;
