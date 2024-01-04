import React from 'react';
import {useNavigate} from "react-router-dom"



function Header() {
    const navigate = useNavigate()

const goToMainPage = () => {
    navigate('/')
}

    return(
        <div onClick={goToMainPage} className='Header' >
            <div className='header-content'>
                <img alt="cherry" className="Cherry1" src="https://media.discordapp.net/attachments/1187512873015062528/1192264687061049384/cherry.png?ex=65a87204&is=6595fd04&hm=d00c423ce6c5d8ae3814a1312f90bab77b591abe106cc16708fb01a77eb56b2a&=&format=webp&quality=lossless&width=115&height=115"/>
                <img alt="cherry" className="Cherry1" src="https://media.discordapp.net/attachments/1187512873015062528/1192264687061049384/cherry.png?ex=65a87204&is=6595fd04&hm=d00c423ce6c5d8ae3814a1312f90bab77b591abe106cc16708fb01a77eb56b2a&=&format=webp&quality=lossless&width=115&height=115"/>
                <img alt="cherry" className="Cherry1" src="https://media.discordapp.net/attachments/1187512873015062528/1192264687061049384/cherry.png?ex=65a87204&is=6595fd04&hm=d00c423ce6c5d8ae3814a1312f90bab77b591abe106cc16708fb01a77eb56b2a&=&format=webp&quality=lossless&width=115&height=115"/>
                <h1>CLEAR THE FRIDGE</h1>
                <img alt="cherry" src="https://media.discordapp.net/attachments/1187512873015062528/1192264687061049384/cherry.png?ex=65a87204&is=6595fd04&hm=d00c423ce6c5d8ae3814a1312f90bab77b591abe106cc16708fb01a77eb56b2a&=&format=webp&quality=lossless&width=115&height=115"/>
                <img alt="cherry" src="https://media.discordapp.net/attachments/1187512873015062528/1192264687061049384/cherry.png?ex=65a87204&is=6595fd04&hm=d00c423ce6c5d8ae3814a1312f90bab77b591abe106cc16708fb01a77eb56b2a&=&format=webp&quality=lossless&width=115&height=115"/>
                <img alt="cherry" src="https://media.discordapp.net/attachments/1187512873015062528/1192264687061049384/cherry.png?ex=65a87204&is=6595fd04&hm=d00c423ce6c5d8ae3814a1312f90bab77b591abe106cc16708fb01a77eb56b2a&=&format=webp&quality=lossless&width=115&height=115"/>
            </div>
            <h2 className = 'sub-header'>Here you can keep track of your groceries by adding your purchases, getting rid of spoiled food, and more!</h2>
        </div>
    )
}


export default Header