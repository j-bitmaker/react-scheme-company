import React, {useState, useEffect} from 'react';

import './search-panel.css'
 const InventorySearch = ({search}) =>{
    
    const [filterData, newFilterData] = useState('');

    const searchStyle = {
        width: '400px',
        height: '38px'
    };

    const onSearchChange = (e) => {
        e.preventDefault();
        let filtered = e.target.value
        newFilterData(e.target.value);
        search(filterData)
    };
    return(
     <input   
     className="search-input"
    style={searchStyle}
    placeholder= "Type here to search" 
    onChange={onSearchChange}
    autoComplete=""
    enabled='true'/>
    )
 }

 export default InventorySearch;