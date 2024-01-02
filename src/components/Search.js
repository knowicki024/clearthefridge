import React from 'react'

function Search({onSearch}) {
    return (
        <div className='Search'>
            <input className="search-bar" type="text" placeholder='Search food...' onChange={onSearch}></input>
        </div>
    )
}

export default Search