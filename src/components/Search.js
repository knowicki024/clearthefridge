import React from 'react'

function Search({onSearch}) {
    return (
        <div className='Search'>
            <input className="search-bar" 
                   type="text" 
                   placeholder='Search food/category...' 
                   onChange={onSearch}
            />
              <div className="input-group">
                <label htmlFor="name" className='category-title'>Category:</label>
                    <select 
                        id="category"
                        name="category"
                        className="search-category"
                        onChange={onSearch}
                    >
                    <option></option>
                    <option value="Dairy">Dairy</option>
                    <option value="Produce">Produce</option>
                    <option value="Leftovers & Snacks">Leftovers & Snacks</option>
                    <option value="Meat & Poultry">Meat & Poultry</option>
                    <option value="Baked Good">Baked Good</option>
                    </select>
              </div>    
        </div>
    )
}

export default Search