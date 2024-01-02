import React, {useEffect, useState} from 'react';
import Header from './Header';
import NewFoodForm from './NewFoodForm';
import Fridge from './Fridge';
import Search from './Search';
const API = " http://localhost:3000/groceries"

function Page() {

    const [groceries, setGroceries] = useState([])

    useEffect(() => {
        fetch(API)
        .then (response => response.json())
        .then(setGroceries)
     }, [])

    return (
        <div>
            <Header/>
            <Search/>
            <NewFoodForm />
            <Fridge groceries={groceries}/>

        </div>
    )
}


export default Page

