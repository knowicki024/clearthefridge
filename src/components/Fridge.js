import React from 'react';
import Emoji from './Emoji';
import { useNavigate } from 'react-router-dom'


function Fridge({groceries}) {

    const navigate = useNavigate()

const openFoodItem = (foodItemId) => {
    //console.log(foodItemId.id)
    navigate(`/fooditem/${foodItemId.id}`);
};

const foodCards = groceries.map((grocery) => (
<Emoji key={grocery.id} emoji={grocery} returnFunction={openFoodItem} groceries={groceries}/>
))

function handleClick(){
    navigate('/newfoodform')
}

    return (
        <div className='Fridge'>
            <img className='fridge-img' alt = "open fridge" src="https://media.discordapp.net/attachments/1187512873015062528/1192266055813447720/fridge-pink.png?ex=65a8734a&is=6595fe4a&hm=5312e43e9cefb65110dd6c393552ed80dd385e02ca4fb83f5d32d81d9003dc05&=&format=webp&quality=lossless&width=620&height=662"/>
            <div className='fridge-layout'>
                <div className="food-cards">{foodCards}</div>
            </div>           
            <button className="get-groceries" onClick={handleClick}>Get groceries</button>
        </div>
    )
}

export default Fridge