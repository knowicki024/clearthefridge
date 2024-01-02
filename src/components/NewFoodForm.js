import { React, useState } from 'react';
import { Grid, Card, GridColumn } from "semantic-ui-react";
import Emoji from './Emoji';


function NewFoodForm(Url){

    const emojiDisplay = [
        <Emoji key={1} image="🍿" />,
        <Emoji key={2} image="🍕" />,
        <Emoji key={3} image="🍔" />,
        <Emoji key={4} image="🍦" />,
        <Emoji key={5} image="🍎" />,
        <Emoji key={6} image="🍟" />,
      ];

 const [formData, setFormData] = useState({
    "name": "",
    "category": "",
    "image" : "",
    "purchase_date": "",
    "spoiled" : false, 
    "description": ""
  });

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);

    fetch(Url, {
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
    

  return (
    <div>
    <Grid columns={3}>
        <Grid.Row>
            <Grid.Column width={7}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Food Name:
                        <input
                        type="text"
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Food Description:
                        <input
                        type="text"
                        name="foodDescription"
                        value={formData.description}
                        onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Time To Spoil:
                        <input
                        type="text"
                        name="timeToSpoil"
                        value={formData.timeToSpoil}
                        onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </Grid.Column>
            <GridColumn width={1}></GridColumn>
            <Grid.Column width={7}>
            <div className='ui cards'>
                {emojiDisplay}</div>
          </Grid.Column>
        </Grid.Row>
    </Grid>
</div>


  );
}

export default NewFoodForm;

