import React from 'react';
// import CompanyService from '../../services';
import InventorySearch from '../inventory-search';
import InventoryList from '../inventory-list';
import InventoryAdd from '../inventory-add';
import './inventory.css';


const Inventory = ({onDeleted, onItemAdd, items, inc, dec, nextLabel, nextSearch}) =>{
        
        return(
            <div className="inventory" id='inventory'>
                <div className="inventory-header d-flex">
                    <h1>List of inventories</h1>
                    <h2> {items.length} inventories </h2>
                    </div>            
                <div className="search-panel d-flex">
                <InventorySearch
                nextSearch={search=>nextSearch(search)}/>
                </div>
                <InventoryList
                items={items}
                onDeleted={id=>onDeleted(id)}
                inc={id=>inc(id)}
                dec={id=>dec(id)}
                nextLabel={(id, val)=>nextLabel(val, id)}
                />
                <div className='item-add'>
                <InventoryAdd
                onItemAdd={onItemAdd} 
                />
                </div>
            </div>
        )
    }

export default Inventory;

