import { React, useState } from 'react';
import Emoji from './Emoji';


function NewFoodForm( { API, menu } ){

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

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);

    fetch(API, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(formData),
      })
        .then(response => {
          // Handle response (Necessary?)
          console.log('Response:', response);
        })
        .catch(error => {
          console.error('Error');
        });
    }
    
    const emojiDisplay = menu.map((emoji) => (
        <Emoji key={emoji.id} emoji={emoji} returnFunction={updateImage} />
        ));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ width: '25%' }}>
      <div className='emoji-container'>
        {formData.image === "" ? (
           <span className='emoji'>🛒</span>
        ) : (
          <span className='emoji'>{formData.image}</span>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Food Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Post-it Note:
            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Time To Spoil:
            <input
              type="checkbox"
              name="timeToSpoil"
              checked={formData.timeToSpoil}
              onChange={toggleSpoiled}
            />
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