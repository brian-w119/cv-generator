
import './App.css';
import RenderData from './App.jsx';
import {useState} from 'react';
import { inputData } from './App.jsx';
import {useRef} from 'react'


function CreateDiv({id, className, innerText}){
    return(
       <div id={id} className={className}>{innerText}</div>
    );
};

export default function CV(){
    return(
        <div id="outline">
          <CreateDiv id="fullName"/>
          <CreateDiv id="fullAddress"/>
          <CreateDiv id="emailAddress"/>
          <CreateDiv id="contactNumber"/>
          <CreateDiv className="line"/>
          <CreateDiv className="sectionTitle" innerText="Work Experience"/>
          <CreateDiv className="experience" id="currentRole" innerText=""/>
          <CreateDiv className="experience" id="previousRole1" innerText=""/>
          <CreateDiv className="experience" id="previousRole2" innerText=""/>
          <CreateDiv className="line"/>
          <CreateDiv className="sectionTitle" innerText="More Information"/>
          <CreateDiv className="experience" id="moreDetails" innerText=""/>
        </div>  
    );
};
