
import './App.css'
import {useState} from 'react';
import React from 'react';

function CreateButton({buttonClr = "green", id,textClr = "white", type}){
    const buttonStyle = {
        color: textClr,
        backgroundColor: buttonClr,
    }

    const handleClick = () => {
        console.log("clicked");
    }
    return (
        <div>
            <button style={buttonStyle} onClick={handleClick} id="submit"  type="submit">Submit</button>
        </div>
    );
};
function CreateLabel(){
    return(
        <label htmlFor={htmlFor}></label>
    )
};

function CreateInput({type, ref, placeholder, htmlFor, className, id, name, onChange, value}){
    return (
        <div>
            <label htmlFor={htmlFor}></label>
            <input id={id} ref={ref} type={type} onChange={onChange} name={name} placeholder={placeholder} className={className} value={value}/>
        </div>
    );
}

export default function RenderData(){
   const [formData, setFormData] = useState({
    firstName: null,
    lastName: null
   });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
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
                  name="name1"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
               />
               <CreateInput
                  htmlFor="name2"
                  className="personalDtls inputField"
                  placeholder="Last Name"
                  id="name2"
                  name="name2"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
               />
           </div>
           <CreateInput 
             id="address"
             placeholder="Your Address"
             className="inputField"
           />
           <CreateInput
              type="email"
              placeholder="Enter Your email"
              id="email"
              className="inputField"
           />

           <CreateInput
              type="number"
              className="inputField"
              placeholder="Your Phone number"
              id="phoneNumber"
           />

           <div className="blank"></div>
           <div className="title">Employment</div>

           <div className="subtitle">Current Employer:</div>
           <CreateInput 
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
           <CreateButton />  
          </div>
          <div id="emptySpace">.</div>
        </form>
    );
};
