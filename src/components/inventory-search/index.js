import React, {useState} from 'react';

import './search-panel.css'
 const InventorySearch = ({nextSearch}) =>{
    
    const [search, newSearch] = useState('');

    const onSearchChange = e => {
        e.preventDefault();
        newSearch(e.target.value)
        nextSearch(e.target.value)
    };
    return(
     <input   
     className="search-input"
    placeholder= "Type here to search" 
    onChange={onSearchChange}
    autoComplete=""
    value={search}
    enabled='true'/>
    )
 }

 export default InventorySearch;