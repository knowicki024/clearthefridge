import React from 'react';
// import {useNavigate} from "react-router-dom"



function Header() {

//     const navigate = useNavigate()

// function handleClick() {
//     navigate("/NewFoodForm")
// }

    return(
        <div className='Header' >
            <div className='header-content'>
                <img alt="cherry" className="Cherry1" src="data:image/png;base64,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"/>
                <h1>Clear The Fridge</h1>
                <img alt="cherry" className="Cherry2" src="data:image/png;base64,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"/>
            </div>
            
        </div>
    )
}


export default Header