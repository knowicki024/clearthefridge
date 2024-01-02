import React, {useEffect, useState} from 'react';
import NewFoodForm from './NewFoodForm';
import Fridge from './Fridge';
import Search from './Search';
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
            <Search onSearch={handleSearch}/>
            <NewFoodForm API={API} menu={menu}/>
            <Fridge groceries={searchGroceries}/>

        </div>
    );
}


export default Page;

