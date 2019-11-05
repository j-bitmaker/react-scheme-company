import React, {Component} from 'react';

import './search-panel.css'
 export default class InventorySearch extends Component {
    state = 
    {
        filterData: ''
    }
    searchStyle = {
        width: '400px',
        height: '38px'
    };

    onSearchChange = (e) => {
        e.preventDefault();
        let filterData = e.target.value
        this.setState({filterData
        });
        this.props.onSearchChange(filterData)
    };
    render(){
    return(
     <input   
     className="search-input"
    style={this.searchStyle}
    placeholder= "Type here to search" 
    onChange={this.onSearchChange}
    autoComplete=""
    enabled='true'/>
    )
};

 }