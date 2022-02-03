import React from 'react'
import "../projetos/projetos.css";
import Project1 from "../../../assets/projects1.png"

function Projetos() {
    return (
   
    <div id='#project' className='project'>
        <h2 className='name-project'>My Projects</h2>
        <div className='projects-itens'>
            <a className='project-01'>Projeto 1</a>
            {/*<a className='project-01'>Projeto 1</a>*/}
            <a className='project-02'>Projeto 2</a>
            <a className='project-03'>Projeto 3</a>
            <div class="break"></div>
            <a className='project-04'>Projeto 4</a>
            <a className='project-05'>Projeto 5</a> 
        </div>     
        </div>
        
    
    
    )
        
    
}

export default Projetos;
