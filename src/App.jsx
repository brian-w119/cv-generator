
import './App.css';
import {useState} from 'react';
import React from 'react';
import { render } from 'react-dom';
import {useRef} from 'react';
import CV from './App2.jsx';
import {useEffect} from 'react'

let inputData = {};
function SubmitButton({onClick}){
    let submitClicked = false;
    return (
        <div>
            <button id="submit" onClick={onClick} type="submit">SUBMIT</button>
        </div>
    );
};

function ClearButton(){
    const clear = () => {
        //refreshes the page
        window.location.reload(true);
        localStorage.clear();
        inputData = {};
        //inputRef.current.reset();
    }
    return (
        <div>
            <button type="reset" onClick={clear} id="clear">CLEAR</button>
        </div>
    );
};

function InputField({type, ref, placeholder, htmlFor, className, id, name, onChange, required, onClick, value}){
    return (
        <div>
            <label htmlFor={htmlFor}></label>
            <input id={id} ref={ref} type={type} onChange={onChange} name={name} onClick={onClick} placeholder={placeholder} className={className} value={value}/>
        </div>
    );
}

function TextArea({value, onChange}){
    return(
        <textarea id="additionalInfo" onChange={onChange} rows="10" cols="40" value={value}/>
    );
};

export default function RenderData(){
    //removeForm removes the form from the DOM tree and adds completed CV
    const removeForm = () => {
      inputRef.current.innerHTML = "";
    };

   const inputRef = useRef(null);
   const [submitted, submitting] = useState(false);
   const submitClicked = () => {
     submitting(true);
   };

   const [storedData, storing] = useState(null);
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    currentJob: "",
    previousJob1: "",
    previousJob2: "",
    qual1: "",
    qual2: "",
    qual3: "",
    qual4: "",
    furtherInfo: ""
  });
    const handleSubmit = (e) => {
        e.preventDefault();
        inputData = {...formData}
       // console.log(inputData); 
        removeForm();
    };
    //saves form data to local storage
    const handle = () => {
      localStorage.setItem('data', JSON.stringify(formData));
    }

    const clearFields = () => {
       // formData.map((field) => fiel)
    }
    return(
      <div   id="container">
        <form  ref={inputRef} onSubmit={handleSubmit} id="outerBox">
            <div id="heading">My CV</div>
         <div className="box">
            <div id="section1" className="title">Personal Details</div>
              <div id="name">
                <InputField
                  htmlFor="name1"
                  className="personalDtls inputField"
                  placeholder="First Name"
                  id="name1"
                  name="name1"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
               />
               <InputField
                  htmlFor="name2"
                  className="personalDtls inputField"
                  placeholder="Last Name"
                  id="name2"
                  name="name2"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
               />
           </div>
           <InputField
             htmlFor="address"
             id="address"
             placeholder="Your Address"
             className="inputField"
             value={formData.address}
             onChange={(e) => setFormData({...formData, address: e.target.value})}
           />
           <InputField
              htmlFor="email"
              type="email"
              placeholder="Enter Your email"
              id="email"
              className="inputField"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
           />
           <InputField
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
           <InputField
              htmlFor="employment1"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment1"
              value={formData.currentJob}
              onChange={(e) => setFormData({...formData, currentJob: e.target.value})}
           />
           <div className="subtitle">Previous Employer:</div>
           <InputField
              htmlFor="employment2"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment2"
              value={formData.previousJob1}
              onChange={(e) => setFormData({...formData, previousJob1: e.target.value})}
           />
           <div className="subtitle">Previous Employer:</div>
           <InputField
              htmlFor="employment3"
              className="jobs"
              placeholder="List Company Name, employment date and job description"
              id="employment3"
              value={formData.previousJob2}
              onChange={(e) => setFormData({...formData, previousJob2: e.target.value})}
           />
           <div className="blank"></div>
           <div id="education">Education</div>
              <InputField
                htmlFor="school1"
                className="schooling"
                placeholder="Qualification 1"
                id="school1"
                value={formData.qual1}
                onChange={(e) => setFormData({...formData, qual1: e.target.value})}
              />
              <InputField
                htmlFor="school2"
                className="schooling"
                placeholder="Qualification 2"
                id="school2"
                value={formData.qual2}
                onChange={(e) => setFormData({...formData, qual2: e.target.value})}
              />
             <InputField
                htmlFor="school3"
                className="schooling"
                placeholder="Qualification 3"
                id="school3"
                value={formData.qual3}
                onChange={(e) => setFormData({...formData, qual3: e.target.value})}
            />
            <InputField
                htmlFor="school4"
                className="schooling"
                placeholder="Additional Qualification"
                id="school4"
                value={formData.qual4}
                onChange={(e) => setFormData({...formData, qual4: e.target.value})}
            />
            <div className="blank"></div>
            <div id="education">Further Information</div>
            <TextArea 
              value={formData.furtherInfo}
              onChange={(e) => setFormData({...formData, furtherInfo: e.target.value})}
            />
           <div className="blank"></div>
           <SubmitButton 
           onClick={() => {
             submitClicked();
             handle();
            }
          }
           />   
         <ClearButton />
          </div>
          <div id="emptySpace">.</div>
        </form>
        {submitted ?  <CV />: null} 
     </div>
    );
};



