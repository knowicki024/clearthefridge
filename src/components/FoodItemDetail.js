import { React, useState } from 'react';
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom"

function FoodItem( {item} ){
    let { id } = useParams();
    //Can Delete Later
    let isBad = true; 
    //Delete Above
    const [isEdit, setIsEdit] = useState(false)

    const [formData, setFormData] = useState({
        "note": " {item} "
      });

    function handleClick(){
        setIsEdit(!isEdit)
    }
     const handleInputChange = (event) => {
        setFormData({
            ...formData,
            ["note"]: event.target.value,
        });
        };

    

    return (
        <>
       <div className='food-display'>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <div className='emoji-container'>
                            <span className='emoji'>🍋</span>
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
                             <button type="submit">Submit</button>
                        </form>
                        :
                        <Grid.Row>
                            {isBad ? <h2>Food Name 🤢</h2> : <h2>Food Name</h2>}
                            <p>Description</p>
                            <Grid.Row>
                                <p>Purchase Time: 'TIME'</p>
                            </Grid.Row>
                            <Grid.Row>
                                <p>Expiration Time: 'TIME'</p>
                            </Grid.Row>
                        </Grid.Row>}
                        <h1>TIMER</h1>
                        <button onClick={handleClick}>Edit Note</button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className='button-container'>
            <button className='food-button' onClick={() => console.log('Throw Away')}>🗑️</button>
            <button className='food-button' onClick={() => console.log('Eat')}>🍽️</button>
        </div>
    </>
        
    )
}

export default FoodItem;