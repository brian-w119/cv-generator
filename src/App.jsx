
import './App.css'
import {useState} from 'react';
import React from 'react';

/*
function CreateButton({buttonClr = "green", id,textClr = "white", type}){
    const buttonStyle = {
        color: textClr,
        backgroundColor: buttonClr,
    }

    const handleClick = () => {
    }
    return (
        <div>
            <button style={buttonStyle} onClick={handleClick} id="submit"  type="submit">Submit</button>
        </div>
    );
};
*/
function SubmitButton(){
    const submit = () => console.log("submit clicked");
    return (
        <div>
            <button onClick={submit} id="submit"  type="submit">SUBMIT</button>
        </div>
    );
};

function ClearButton(){
    const clear = () => console.log("clear clicked");
    return (
        <div>
            <button onClick={clear} id="clear">CLEAR</button>
        </div>
    );
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
   const submit = () => console.log("submit clicked");
  

   const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    address: null,
    email: null,
    phone: null,
    currentJob: null,
    previousJob1: null,
    previousJob2: null,
    qual1: null,
    qual2: null,
    qual3: null,
    qual4: null,
    furtherInfo: null
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
             htmlFor="address"
             id="address"
             placeholder="Your Address"
             className="inputField"
             value={formData.address}
             onChange={(e) => setFormData({...formData, address: e.target.value})}
           />
           <CreateInput
              htmlFor="email"
              type="email"
              placeholder="Enter Your email"
              id="email"
              className="inputField"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
           />

           <CreateInput
              htmlFor="phoneNumber"
              type="number"
              className="inputField"
              placeholder="Your Phone number"
              id="phoneNumber"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
           />

           <div className="blank"></div>
           <div className="title">Employment</div>

           <div className="subtitle">Current Employer:</div>
           <CreateInput 
              htmlFor="employment1"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment1"
              value={formData.currentJob}
              onChange={(e) => setFormData({...formData, currentJob: e.target.value})}
           />

           <div className="subtitle">Previous Employer:</div>
           <CreateInput 
              htmlFor="employment2"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment2"
              value={formData.previousJob1}
              onChange={(e) => setFormData({...formData, previousJob1: e.target.value})}
           />

           <div className="subtitle">Previous Employer:</div>
           <CreateInput 
              htmlFor="employment3"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment3"
              value={formData.previousJob2}
              onChange={(e) => setFormData({...formData, previousJob2: e.target.value})}
           />
        
           <div className="blank"></div>
           
           <div id="education">Education</div>
              <CreateInput
                htmlFor="school1"
                className="schooling"
                placeholder="Qualification 1"
                id="school1"
                value={formData.qual1}
                onChange={(e) => setFormData({...formData, qual1: e.target.value})}
              />
              <CreateInput
                htmlFor="school2"
                className="schooling"
                placeholder="Qualification 2"
                id="school2"
                value={formData.qual2}
                onChange={(e) => setFormData({...formData, qual2: e.target.value})}
              />
             <CreateInput
                htmlFor="school3"
                className="schooling"
                placeholder="Qualification 3"
                id="school3"
                value={formData.qual3}
                onChange={(e) => setFormData({...formData, qual3: e.target.value})}
            />
            <CreateInput
                htmlFor="school4"
                className="schooling"
                placeholder="Additional Qualification"
                id="school4"
                value={formData.qual4}
                onChange={(e) => setFormData({...formData, qual4: e.target.value})}
            />

            <div className="blank"></div>

            <div id="education">Further Information</div>
            <CreateInput
                htmlFor="additionalInfo"
                className="additionalInfo"
                value={formData.furtherInfo}
                onChange={(e) => setFormData({...formData, furtherInfo: e.target.value})}
            />
           <div className="blank"></div>
           <SubmitButton 
           />   
           <ClearButton />
          </div>
          <div id="emptySpace">.</div>
        </form>
    );
};
