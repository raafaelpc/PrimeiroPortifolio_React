import React from 'react'
import "../projetos/projetos.css";
import Project1 from "../../../assets/projects1.png"

function Projetos() {
    return (
   
    <div id='#project' className='project'>
        <h2 className='name-project'>My Projects</h2>
        <div className='projects-itens'>
            <section className='project-01'>Projeto 1</section>
            {/*<a className='project-01'>Projeto 1</a>*/}
            <section className='project-02'>Projeto 2</section>
            <section className='project-03'>Projeto 3</section>
            <div class="break"></div>
            <section className='project-04'>Projeto 4</section>
            <section className='project-05'>Projeto 5</section> 
        </div>     
        </div>
        
    
    
    )
        
    
}

export default Projetos;
