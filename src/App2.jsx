
import './App.css';
import RenderData from './App.jsx';
import {useState} from 'react';
//import { inputData } from './App.jsx';
import {useRef} from 'react'
import {createPortal} from 'react-dom';


function CreateDiv({id, className, displayeddata, innerText, type, value}){
    return(
       <div id={id} type={type} value={value} displayeddata={displayeddata} className={className}>{innerText}</div>
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

   //destructures retrieved form data
   const {address, currentJob, email, firstName, furtherInfo, 
        lastName, phone, previousJob1, previousJob2, qual1, qual2, qual3, qual4 } = data;

   //reloads form if relevant fields are not filled in
   if(!address || !currentJob || !email || !firstName || !lastName || !phone || !qual1){
    alert("Personal details, current job and atleast one qualification must be included !");
    createNew();
   };

    const  retrievedData = (fieldData, fieldData2) => {
      if(fieldData){
        return fieldData;
      }
    };

    const sectionHeading = (heading) => {
      return heading;
    };

    return(
        <div id="outline">
          <CreateDiv id="fullName" className="personalDetails"
            innerText={retrievedData(`${firstName} ${lastName}`)}
          />
          <CreateDiv id="fullAddress" className="personalDetails"
            innerText={retrievedData(address)}
          />
          <CreateDiv id="emailAddress" className="personalDetails"
            innerText={retrievedData(email)}
          />
          <CreateDiv id="contactNumber" className="personalDetails"
            innerText={retrievedData(phone)}
          />
          <CreateDiv className="line"/>
          <CreateDiv className="sectionTitle"
            innerText={sectionHeading("Work Experience")}
          />
          <CreateDiv className="experience" id="currentRole" 
            innerText={retrievedData(currentJob)}
          />
          {previousJob1 ? <CreateDiv className="experience" id="previousRole1" 
            innerText={previousJob1}
            />: null
          }
          {previousJob2 ? <CreateDiv className="experience" id="previousRole1" 
            innerText={previousJob2}
            />: null
          }
          <CreateDiv className="line"/>
          <CreateDiv className="sectionTitle" 
            innerText={retrievedData("Education & Qualifications")}
          />
          <CreateDiv className="qual"
            innerText={retrievedData(qual1)}
          />
          {qual2 ? <CreateDiv className="qual styling" 
            innerText={retrievedData(qual2)}
            />: null
          }
          {qual3 ? <CreateDiv className="qual styling" 
            innerText={retrievedData(qual3)}
            />: null
          }
          {qual2 ? <CreateDiv className="qual styling" 
            innerText={retrievedData(qual4)}
            />: null
          }
          {furtherInfo ?  <CreateDiv className="line"/> : null}
          {furtherInfo ? <CreateDiv className="sectionTitle" id="moreDetails" 
            innerText={retrievedData("Additional Information")} />
            :null
          }
          {furtherInfo ? <CreateDiv className="addInfo styling" 
            innerText={retrievedData(furtherInfo)}/>: null
          }
          <button type="button" onClick={createNew} id="revertToDefault">Create New CV</button>
        </div>
    );
};
