import React from 'react';



import Header from './Header';
import NewFoodForm from './NewFoodForm';
import Fridge from './Fridge';
const API = " http://localhost:3000/groceries"

function Page() {
    return (
        <div>
            <Header />
            <NewFoodForm />
            <Fridge />

        </div>
    )
}


export default Page

