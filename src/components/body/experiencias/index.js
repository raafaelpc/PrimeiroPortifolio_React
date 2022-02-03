import React from 'react'
import "../experiencias/experiencias.css"
import {FaHtml5} from "react-icons/fa";
import {IoLogoCss3} from "react-icons/io";
import {SiJavascript} from "react-icons/si";
import {DiReact} from "react-icons/di";
import {DiMysql} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";

function Expe() {
    return (
        <div id='#skills' className='skills'>
            <h1 className='name-skills'>My skills </h1>
            <div className='skill-progress'>
            <div class="progress-bar" ></div>   
            </div>

            <div className='skills-logos'>
                <section className='skill-html'><FaHtml5 size='150px'/><h2>HTML</h2></section>
                <section className='skill-css'><IoLogoCss3 size='150px'/><h2>CSS</h2></section>
                <section className='skill-js'><SiJavascript size='150px'/><h2>JAVASCRIPT</h2></section> 
            </div>
            <h1 className='name-skills'>Learning</h1>
            <div className='skill-progress'>
            <div class="progress-bar2" ></div>   
            </div>
            <div className='skills-learning'>
                <section className='skill-mysql'><DiMysql size='150px'/><h2>MYSQL</h2></section>
                <section className='skill-node'><FaNodeJs size='150px'/><h2>NODEJS</h2></section>
                <section className='skill-react'><DiReact size='150px'/><h2>REACT</h2></section> 
            </div>
        </div>
    )
        
    
}

export default Expe;
