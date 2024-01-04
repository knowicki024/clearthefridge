import { React, useState } from 'react';
import Emoji from './Emoji';


function NewFoodForm( { API, menu, navigate, refreshGroceries } ){

 const [formData, setFormData] = useState({
    "name": "",
    "category": "",
    "image" : "",
    "purchase_date": "",
    "spoiled" : false, 
    "note": ""
  });

  const [isSpoiled, setIsSpoiled] = useState(false)


  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function toggleSpoiled(){
    setIsSpoiled(!isSpoiled)
    setFormData({
        ...formData,
        spoiled: !isSpoiled,
      });
  }

  const updateImage = (newImage) => {
    console.log(`New Image: ${newImage.textContent}`)
    setFormData({
      ...formData,
      image: newImage.textContent
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
  
    fetch(API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        refreshGroceries()
        navigate('/');
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  

    const emojiDisplay = menu.map((emoji) => (
        <Emoji key={emoji.id} emoji={emoji} returnFunction={updateImage} />
        ));
//style={{ marginRight: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  return (
<div className="form-display">
  <div className="form-left form-left-offset">
    <div className='form-container'>
      {formData.image === "" ? (
        <span className='emoji emoji-form'>🛒</span>
      ) : (
        <span className='emoji emoji-form'>{formData.image}</span>
      )}
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
      <select className="input-bar">
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Leftovers & Snacks">Leftovers & Snacks</option>
        <option value="Meat & Poultry">Meat & Poultry</option>
      </select>
  </div>    



    <div className='input-group'>
      <label>
        <input 
        type="date" 
        value="2017-06-01" />
      </label>
    </div>
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