import { React, useState, useEffect } from 'react';
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
const API = " http://localhost:3000/groceries"

function FoodItemDetail( ){
    let { id } = useParams();
    const navigate = useNavigate()
    const [itemData, setItemData] = useState(null);

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
    //// TOGGLE IS-EDIT ON CLICK
    function handleClick(){
        setIsEdit(!isEdit)
    }

    ////DELETE
    function handleDeleteClick(){
        console.log('DELETE')
        // fetch(`${API}/${item.id}`,{
        // "method" : "DELETE"})
        // .then(navigate('/'))
    }

    //// EDIT
    function handleSubmit(event){
        event.preventDefault()
        console.log('SUBMIT')
        // fetch(`${API}/${item.id}`,{
        // "method" : "PUT",
        // "headers" : {"Content-Type" : "application/json"},
        // "body" : JSON.stringify(formData)
        // })
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
                            value={"CHANGE THIS TO ITEM.NOTE WHEN DATA IS LINKED"}
                            onChange={handleInputChange}/>
                            <button 
                            type="submit"
                            onSubmit={handleSubmit}
                            >Post-it</button>
                        </form>
                        :
                        <Grid.Row>
                            {itemData.spoiled ? <h2>{itemData.name} 🤢</h2> : <h2>{itemData.name}</h2>}
                            <p>Post-it Note</p>
                            <Grid.Row>
                                <p>Purchase Time: {itemData.purchase_date}</p>
                            </Grid.Row>
                            <Grid.Row>
                                <p></p>
                            </Grid.Row>
                            <button onClick={handleClick}>Edit Note</button>
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