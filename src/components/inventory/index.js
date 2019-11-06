import React from 'react';
// import CompanyService from '../../services';
import InventoryHeader from '../inventory-header';
import InventorySearch from '../inventory-search';
import InventoryList from '../inventory-list';
import ItemAdd from '../item-add';
import './inventory.css';


const Inventory = ({onDeleted, search, onItemAdded, items}) =>{


    // let maxId = 100;

    // const onItemAdded = (label) => {
    //           const item = createItem(label);
    //           newItems([...items, item]);
    //       };
    
    // const searchItems = (items, search) =>{
    //     if (search.length === 0) {
    //         return items;
    //     }
    
    //     return items.filter((item) => {
    //         return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    //     });
    //     }
    
    // const toggleProperty = (arr, id, propName) => {
    //         const idx = arr.findIndex((item) => item.id === id);
    //         const oldItem = arr[idx];
    //         const value = !oldItem[propName];
        
    //         const item = { ...arr[idx], [propName]: value } ;
    //         return [
    //             ...arr.slice(0, idx),
    //             item,
    //             ...arr.slice(idx + 1)
    //         ];
    //         };
    
        // const onDeleted = (id) => {
        //     const idx = items.findIndex((item) => item.id === id);
        //     const items = [
        //     ...items.slice(0, idx),
        //     ...items.slice(idx + 1)
        //     ];
        //     newItems(items)
        // };

    
        // const onSearchChange = (search) => {
        //     newSearch(search)
        //     console.log(search)
        // };
    
        // const createItem = (label) => {
        // return {
        //     id: ++maxId,
        //     label,
        //     important: false,
        //     done: false
        // };
        // }
        // const visibleItems = searchItems(items, search);  
        
        return(
            <div className="inventory">
            <InventoryHeader count={items.length}/>  
            <div className="search-panel d-flex">
            <InventorySearch
            search={search}/>
            </div>
            <InventoryList 
            items={items}
            onDeleted={ onDeleted }
            />
            <div className='item-add'>
            <ItemAdd
            onItemAdded={onItemAdded} 
            />
            </div>
            </div>
        )
    }

export default Inventory;

