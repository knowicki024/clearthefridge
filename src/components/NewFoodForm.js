import { React, useState, useEffect } from 'react';
import Emoji from './Emoji';


function NewFoodForm( { API, menu, navigate, refreshGroceries } ){
 
  //// CONSTANTS ////
  const [previousFoodItemName, setPreviousFoodItemName] = useState("")

  const [formData, setFormData] = useState({
      "name": "",
      "category": "",
      "image" : "",
      "purchase_date": new Date().toISOString().split('T')[0],
      "spoiled" : false, 
      "note": ""
    });

  const emojiDisplay = menu.map((emoji) => (
    <Emoji key={emoji.id} emoji={emoji} returnFunction={updateFormValues} />
    ));

 //// FUNCTIONS ////

 ////Input Change
  const handleInputChange = (event) => {
    console.log(event.target.value)
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//// Fills in form details when image is picked
  function updateFormValues(newImage) {
    fetch(`http://localhost:3000/menu/${newImage.id}`)
      .then(response => response.json())
      .then(fooditem => {
        document.getElementById('image').textContent = fooditem.image;
        document.getElementById('category').value = fooditem.category;

        let intraFormData = {
          ...formData,
          "name": formData.name,
          "category": fooditem.category,
          "image" : fooditem.image,
        }

        let nameInput = document.getElementById('name').value
        if (nameInput === ""|| nameInput === previousFoodItemName){ 
          document.getElementById('name').value = fooditem.name;
          intraFormData = {
            ...intraFormData,
            'name': fooditem.name,
        }}

        setPreviousFoodItemName(fooditem.name)
        setFormData(intraFormData)
        });
  }
  
//// Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch(API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        refreshGroceries()
        navigate('/');
      } else {throw new Error('Network response was not ok.')}
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  return (
<div className="form-display">
  <div className="form-left form-left-offset">
    <div className='form-container'>
      {formData.image === "" ? (
        <span id='image'className='emoji emoji-form'>🛒</span>
      ) : (
        <span id='image'className='emoji emoji-form'>{formData.image}</span>)}
    </div>

    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Food Name:</label>
        <input className='input-bar'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="note">Post-it Note:</label>
        <textarea className='text-area'
          type="text"
          id="note"
          name="note"
          value={formData.note}
          onChange={handleInputChange}
        />
      </div>

  <div className="input-group">
    <label htmlFor="name">Category:</label>
      <select 
      id="category"
      name="category"
      className="input-bar"
      onChange={handleInputChange}>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Leftovers & Snacks">Leftovers & Snacks</option>
        <option value="Meat & Poultry">Meat & Poultry</option>
        <option value="Baked Good">Baked Good</option>
      </select>
  </div>    

    <div className='input-group'>
      <label>  </label>
        <input 
           type='date'
           id='purchase_date'
           name='purchase_date'
           value={formData.purchase_date || new Date().toISOString().split('T')[0]}
           onChange={handleInputChange}
           />
    
    </div>
    <label>  </label>
      <button type="submit">Submit</button>
    </form>
  </div>

  <div style={{ width: '40%', paddingLeft: '20px' }}>
    <div className='emoji-container'>
      <div className='emoji-grid'>
        {emojiDisplay}
      </div>
    </div>
  </div>
</div>
  );
}

export default NewFoodForm;