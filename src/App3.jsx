import './App.css';
import RenderData from './App.jsx';
import {useState} from 'react';
//import { inputData } from './App.jsx';
import {useRef} from 'react'
import {createPortal} from 'react-dom';


function CreateDiv({id, className, innerHtml,  type, value}){
    return(
       <div id={id} type={type} value={value} innerHtml className={className}></div>
    );
};

export default function CV(){
    //retrieves stored data
   let  data = localStorage.getItem("data");
   data = JSON.parse(data);
   console.log("retrieved data: ", data);

   //reloads the page to the start of cv creation and clears localStorage
   const createNew = () => {
     window.location.reload();
     localStorage.clear();
   };

   const InnerHtml = () => {
     [fullName, updateField] = useState(null);
     return (
      <div>
         updateField(`${firstName} ${lastName}`);
      </div>
     )
   };

   const {address, currentJob, email, firstName, furtherInfo, 
        lastName, phone, prevJob1, prevJob2, qual1, qual2, qual3, qual4 } = data;

    return(
        <div id="outline">
          <CreateDiv id="fullName"
          
          />
          {fullName}
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




