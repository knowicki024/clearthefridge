import React, {useEffect, useState} from 'react';
import NewFoodForm from './NewFoodForm';
import Fridge from './Fridge';
import Search from './Search';
import FoodItemDetail from './FoodItemDetail';
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
const API = " http://localhost:3000/groceries"

function MainPage() {

    const [groceries, setGroceries] = useState([])
    const [menu, setMenu] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()
    
    
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

    function handleDelete(id) {

        //console.log(`DELETE: ${id}`);
        fetch(`${API}/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deletedItem) => {

            console.log(deletedItem)
            setGroceries(groceries.filter((item) => {
                return (
                    item.id !== id)}))
            navigate('/')
          })
          .catch((error) => console.error('Error deleting item:', error));          
      }
    return (
        <div>
            <Search onSearch={handleSearch} />
            <Routes>
                <Route 
                    path="/fooditem/:id" 
                    element={<FoodItemDetail handleDelete={handleDelete}/>} />
                <Route
                    path="/newfoodform"
                    element={<NewFoodForm API={API} menu={menu} />} />
                <Route
                    path="/"
                    element={<Fridge groceries={searchGroceries} />}/>
            </Routes>

        </div>
    );
}

export default MainPage;