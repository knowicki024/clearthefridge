import { React, useState, useEffect } from 'react';
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom"
// import { useNavigate } from 'react-router-dom'
const API = " http://localhost:3000/groceries"

function FoodItemDetail( {handleDelete} ){
    let { id } = useParams();
    // const navigate = useNavigate()
    const [itemData, setItemData] = useState({});

    useEffect(() => {
      // Fetch data for the specified item ID
      fetch(`${API}/${id}`)
        .then((response) => response.json())
        .then(setItemData)
        .catch((error) => console.error('Error fetching data:', error));
    }, [id]);




//// EDIT item.note FORM CONSTANTS
    const [isEdit, setIsEdit] = useState(false)
    const [formData, setFormData] = useState(
        {"note" : itemData.note});

////FUNCTIONS////
    //// FORM INPUT CHANGE
     function handleInputChange(event){
        setFormData({
            ...formData,
            "note": event.target.value,
        });
        };

        useEffect(() => {
            if (itemData){
                setFormData({"note" : itemData.note});
            }
        },[itemData])

    //// TOGGLE IS-EDIT ON CLICK
    function toggleEdit(){
        setIsEdit(!isEdit)
    }

    //// DELETE CLICK
        function handleDeleteClick(event){
        handleDelete(itemData.id)
    }
    
    //// EDIT
    function handleSubmit(event){
        event.preventDefault();
        console.log(`SUBMIT: ${JSON.stringify(formData)}`);
        fetch(`${API}/${itemData.id}`, {
            "method": "PATCH",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(setItemData)
        .then(toggleEdit)
        .catch(error => console.error('Error updating data:', error));
    }
    
    return (
        <>
<div className='food-display'>
  <div className='emoji-container'>
    <span className='emoji food-left-offset'>{itemData.image}</span>
  </div>
  
  {isEdit ? (
    <form>
      <textarea
        className='text-area-edit'
        type="text"
        name="note"
        value={formData.note}
        onChange={handleInputChange}
      />
      <button
      className='post-it-button'
        type="button"
        onClick={handleSubmit}
      >
        Post-it
      </button>
    </form>
  ) : (
    <div className='food-info'>
      {itemData.spoiled ? (
        <h2>{itemData.name} 🤢</h2>
      ) : (
        <h2>{itemData.name}</h2>
      )}
      <p>Post-it: {itemData.note}</p>
      <p>Purchase Time: {itemData.purchase_date}</p>
      <button onClick={toggleEdit}>Edit Post-it</button>
    </div>
  )}
</div>
<div className='button-container'>
  <button className='food-button' onClick={handleDeleteClick}>🗑️</button>
  <button className='food-button' onClick={handleDeleteClick}>🍽️</button>
</div>
    </>
        
    )
}

export default FoodItemDetail;