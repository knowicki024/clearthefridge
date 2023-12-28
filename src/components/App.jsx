import React, {useState, useEffect} from 'react';
import Page from './Page';
import Header from './Header';
import Search from './Search'

function App() {

    const [ foodArr, setFoodArr] = useState([])

    const [ searchVal, setSearchVal] = useState('')

    const searchedFoodsArr = foodArr.filter(food => {
        return food.name.toLowerCase().includes(searchVal.toLowerCase())
    })

    const handleSearch = (e) => {
        setSearchVal(e.target.value)
    }

    return (
        <div className='App'>
            <Header />
            <Search onSearch={handleSearch}/>
            <Page foodArr={searchedFoodsArr}/>
        </div>
    )
}

export default App