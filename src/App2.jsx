
import './App.css';
import RenderData from './App.jsx';
import {useState} from 'react';
//import { inputData } from './App.jsx';
import {useRef} from 'react'


function CreateDiv({id, className}){
    return(
       <div id={id} className={className}></div>
    );
};

//const myName = `${inputData.firstName} ${inputData.firstName}}`;
export default function CV(){
    //retrieves stored data
   const data = localStorage.getItem("data");
   console.log("retrieved data: ", JSON.parse(data));
   //reloads the page to the start of cv creation
   const createNew = () => {
     window.location.reload();
   }
    return(
        <div id="outline">
          <CreateDiv  id="fullName"/>
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
          <button type="button" onClick={createNew} id="revertToDefault">Create New CV</button>
        </div>
    );
};
