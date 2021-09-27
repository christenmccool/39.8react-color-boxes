import React, {useState} from 'react';
import { Button, InputLabel, TextField } from '@mui/material';
import './NewBoxForm.css';


const NewBoxForm = ({addBox}) => {
  const initialState = {
    color: '#000000',
    width: "200",
    height: "200"
  }
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }


  return (
    <form className="NewBoxForm" >

      <label htmlFor="color">Color</label>
      <input 
        type="color" 
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      {/* <TextField 
        variant="outlined" 
        label="Height"
        defaultValue="200"
        type="number" 
        name="height"
        value={formData.height}
        onChange={handleChange}
        sx={{ m: 2 }}
      />

      <TextField 
        variant="outlined" 
        label="Width"
        defaultValue="200"
        type="number" 
        name="width"
        value={formData.width}
        onChange={handleChange}
        sx={{ m: 2 }}
      /> */}

      <label htmlFor="height">Height</label>
      <input 
        type="number" 
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input 
        type="number" 
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={handleSubmit} sx={{ m: 2 }}>Add box</Button>
    </form>
  )
}

export default NewBoxForm;