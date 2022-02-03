import React from 'react';
import "../contato/contato.css";
import {FiInstagram} from "react-icons/fi";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";



function Contato() {
    return (
        <div className='contato'>
            <h3 className='contact-name'>Contact</h3>
            <div className='container-contact'>
                     
            <a className='icon-insta' href="https://instagram.com/raafaelpc"><FiInstagram size='50px'/></a>
            <a className='icon-linkedin' href="https://linkedin.com/in/rafael-patricio-305b191a2/"><AiOutlineLinkedin size='55px'/></a>
            <a className='icon-git' href="https://github.com/raafaelpc"><AiFillGithub size='55px'/></a>
            </div>
        </div>
    )
            
        
    
}

export default Contato;
