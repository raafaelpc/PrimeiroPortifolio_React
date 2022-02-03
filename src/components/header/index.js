import React, {useState} from 'react';
import "./header.css";
import Web from './web/index';
import Mobile from './mobile/index';
import {IoIosList} from "react-icons/io";

function Header() {
    const [isOpen, setIsOpen]= useState(false);
    return(
        <div className="header">
            
            <div className="logo">Rafael</div>
            
            <div className="menu"></div>
            
            <div className="web-menu">
                <Web/>
             </div>
                
            <div className="mobile-menu">
               
                <div onClick= {()=> setIsOpen(!isOpen)}>
                
                <IoIosList color='blue' size='35px'/>
                
                </div>
                
                {isOpen && <Mobile isOpen ={isOpen} setIsOpen={setIsOpen}/>}
                
                
                <div>
                    
                </div>
            </div>
            
                
            

            

        </div>
        
       
        );       
}

export default Header
