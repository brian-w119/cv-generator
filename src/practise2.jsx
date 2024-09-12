import {useState} from 'react'
import React from 'react'


const Form = () => {
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

}
    const [formData, setFormData] = useState(
        {
        name1: null,
        name2: null
    })
    return (
     <form onSubmit={handleSubmit}>
        <h1> Our Form </h1>
        <input onChange={(e) => setFormData({...formData, name1: e.target.value})} 
            type="text" id=" fstn" name="fstn" id="fstn"  value={formData.name1}/>
         
          <label htmlFor="name2">last name</label>
        <input  onChange={(e) => setFormData({...formData, name2: e.target.value})} type="text"  
            id="lstn" name="name2" id="name2"  value={formData.name2}/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
