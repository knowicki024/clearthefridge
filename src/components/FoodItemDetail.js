import { React, useState, useEffect } from 'react';
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
const API = " http://localhost:3000/groceries"

function FoodItemDetail( {handleDelete} ){
    let { id } = useParams();
    const navigate = useNavigate()
    const [itemData, setItemData] = useState({});

    useEffect(() => {
      // Fetch data for the specified item ID
      fetch(`${API}/${id}`)
        .then((response) => response.json())
        .then(setItemData)
        .catch((error) => console.error('Error fetching data:', error));
    }, [id,API]);




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
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <div className='emoji-container'>
                            <span className='emoji'>{itemData.image}</span>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={7}>
                        {isEdit ?
                        <form>
                            <input
                            type="text"
                            name="note"
                            value={formData.note}
                            onChange={handleInputChange}/>
                            <button 
                            type="submit"
                            onClick={handleSubmit}
                            >Post-it</button>
                        </form>
                        :
                        <Grid.Row>
                            {itemData.spoiled ? <h2>{itemData.name} 🤢</h2> : <h2>{itemData.name}</h2>}
                            <p>Post-it: {itemData.note}</p>
                            <Grid.Row>
                                <p>Purchase Time: {itemData.purchase_date}</p>
                            </Grid.Row>
                            <Grid.Row>
                                <p></p>
                            </Grid.Row>
                            <button onClick={toggleEdit}>Edit Note</button>
                        </Grid.Row>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className='button-container'>
            <button className='food-button' onClick={handleDeleteClick}>🗑️</button>
            <button className='food-button' onClick={handleDeleteClick}>🍽️</button>
        </div>
    </>
        
    )
}

export default FoodItemDetail;