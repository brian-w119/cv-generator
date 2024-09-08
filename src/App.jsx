
import './App.css'
import {useState} from 'react';
import React from 'react';





function CreateButton({buttonClr = "green", id,textClr = "white", type}){
    const buttonStyle = {
        color: textClr,
        backgroundColor: buttonClr,
    }
    const handleClick = () => {
        alert("clicked");
    }
    return (
        <div>
            <button style={buttonStyle} id="submit"  type="submit">Submit</button>
        </div>
    );
};

function captureInput(id){
   
};

function CreateInput({type, ref, placeholder, htmlFor, className, id, name, captureInput}){
    return (
        <div>
            <label htmlFor={htmlFor}></label>
            <input id={id} ref={ref} type={type} name={name} placeholder={placeholder} className={className}/>
        </div>
    );
}

export default function RenderData(){
    const [frstName, setFirstName] = useState(null);
    const [lstName, setLastName] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [job1, setCurrentJob] = useState(null);
    const [job2, setPreviousJob1] = useState(null);
    const [job3, setPreviousJob3] = useState(null);
    const [qual1, setQual1] = useState(null);
    const [qual2, setQual2] = useState(null);
    const [qual3, setQual3] = useState(null);
    const [addQual, setAddQual] = useState(null);
    const [addInfo, setAddInfo] = useState(null);


    return(
        <form onSubmit={handleSubmit} id="outerBox">
            <div id="heading">My CV</div>
         <div className="box">
            <div id="section1" className="title">Personal Details</div>
              <div id="name">
                <CreateInput
                  htmlFor="name1"
                  className="personalDtls inputField"
                  placeholder="First Name"
                  id="name1"
                  captureInput={captureInput}
               />
               <CreateInput
                  htmlFor="name2"
                  className="personalDtls inputField"
                  placeholder="Last Name"
                  id="name2"
               />
           </div>
           <CreateInput 
             htmlFor="address"
             id="address"
             placeholder="Your Address"
             className="inputField"
           />
           <CreateInput
              htmlFor="email"
              type="email"
              placeholder="Enter Your email"
              id="email"
              className="inputField"
           />

           <CreateInput
              htmlFor="phoneNumber"
              type="number"
              className="inputField"
              placeholder="Your Phone number"
              id="phoneNumber"
           />

           <div className="blank"></div>
           <div className="title">Employment</div>

           <div className="subtitle">Current Employer:</div>
           <CreateInput 
              htmlFor="employment1"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment1"
           />

           <div className="subtitle">Previous Employer:</div>
           <CreateInput 
              htmlFor="employment2"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment2"
           />

           <div className="subtitle">Previous Employer:</div>
           <CreateInput 
              htmlFor="employment3"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment3"
           />
        
           <div className="blank"></div>
           
           <div id="education">Education</div>
              <CreateInput
                htmlFor="school1"
                className="schooling"
                placeholder="Qualification 1"
                id="school1"
              />
              <CreateInput
                htmlFor="school2"
                className="schooling"
                placeholder="Qualification 2"
                 id="school2"
              />
             <CreateInput
                htmlFor="school3"
                className="schooling"
                placeholder="Qualification 3"
                 id="school3"
            />
            <CreateInput
             htmlFor="school4"
                className="schooling"
                placeholder="Additional Qualification"
                 id="school4"
            />

            <div className="blank"></div>

            <div id="education">Further Information</div>
            <CreateInput
                className="additionalInfo"
            />
           <div className="blank"></div>
           <CreateButton type="submit"/>  
          </div>
          <div id="emptySpace">.</div>
        </form>
    );
};
