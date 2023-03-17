import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/products';
import '../styles/main.css'; 

export default function Searchbar(props) {
    const [formulario, setFormulario] = useState({
      name: '',
      category: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormulario((prevFormulario) => ({
        ...prevFormulario,
        [name]: value,
      }));
      props.onFormChange(e.target);
      if(name === 'category'){
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            name: null,
        }));
      }
      else {
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            category: null,
        }));
      }
    };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
     getCategories().then(response => setCategories(response.data));
   }, []);
  
    return (
      <form className='searchbar_container'>
        <label>
          Name: 
          <input
            type="text"
            name="name"
            value={formulario.name}
            onChange={handleChange}
          />
        </label>

        <label>
            Category: 
            <select 
             name="category" 
             value={formulario.category}
             onChange={handleChange}
             >
              <option disabled>Select a category</option>
              {categories.map((category)=><option value={category}>{category}</option>)}
            </select>
        </label> 
        
      </form>
    );
  };
  
