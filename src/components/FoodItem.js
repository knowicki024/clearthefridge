import React from 'react';
import { Grid, Card, GridColumn } from "semantic-ui-react";

function FoodItem(){

    let isBad = true; 

    return (
        <div className='food-display'>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <div className='emoji-container'>
                            <span className='emoji'>🍋</span>
                        </div>
                    </Grid.Column>
                    <GridColumn width={1}></GridColumn>
                    <Grid.Column width={7}>
                        <Grid.Row>
                            {isBad ? <h2>Food Name 🤢</h2> : <h2>Food Name</h2>}
                            <p>Descpription</p>
                            <Grid.Row>
                            <p>Purchase Time: 'TIME'</p>
                        </Grid.Row>
                        <Grid.Row>
                            <p>Expiration Time: 'TIME'</p>
                        </Grid.Row>
                        </Grid.Row>
                            <h1>TIMER</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default FoodItem;