import React from 'react';
import Emoji from './Emoji';


function Fridge({groceries}) {

const foodCards = groceries.map(grocery => <Emoji key={grocery.id} grocery={grocery} />)

    return (
        <div className='Fridge'>
            <img className='fridge-img' alt = "open fridge" src="https://media.discordapp.net/attachments/1187512873015062528/1187769590130933780/Image.png?ex=659817a1&is=6585a2a1&hm=73b4d0ab2ada80867b095feebecc69209d7c5d60db73c5a8ae00e2e0cca01790&=&format=webp&quality=lossless&width=620&height=662"/>
            <ul className="food-cards">{foodCards}</ul>
        </div>
    )
}

export default Fridge
