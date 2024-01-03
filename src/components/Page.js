import React, {useEffect, useState} from 'react';
import NewFoodForm from './NewFoodForm';
import Fridge from './Fridge';
import Search from './Search';
import FoodItem from './FoodItem';
import Emoji from './Emoji';
import { Route, Routes } from "react-router-dom"
const API = " http://localhost:3000/groceries"

function Page() {

    const [groceries, setGroceries] = useState([])
    const [menu, setMenu] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
    
    useEffect(() => {
        fetch("http://localhost:3000/menu")
        .then (response => response.json())
        .then(setMenu)
     }, [])

     useEffect(() => {
        fetch(API)
        .then (response => response.json())
        .then(setGroceries)
     }, [])

     const searchGroceries = groceries.filter(grocery => {
        return grocery.name.toLowerCase().includes(searchTerm.toLowerCase())
     })

     const handleSearch = (e) => {
        setSearchTerm(e.target.value)
     }

    return (
        <div>
                    {/* <Route exact path="/" component={Emoji} /> */}
  
        <Routes>
            <Route 
                path="/fooditem/:id" 
                element={<FoodItem />} />
            <Route
                path="/newfoodform"
                element={<NewFoodForm API={API} menu={menu} />} />
            <Route
                path="/"
                element={<Fridge groceries={searchGroceries} />}/>
            {/* <Route
                path="/"
                element= */}
        </Routes>

        </div>
    );
}


export default Page;

