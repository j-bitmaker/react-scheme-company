import React, { useEffect, useState } from 'react';
import CompanyService from '../../services';
import InventoryHeader from '../inventory-header';
import InventorySearch from '../inventory-search';
import InventoryList from '../inventory-list';
import ItemAdd from '../item-add';
import './inventory.css';


const Inventory = () =>{

    const [items, newItems] = useState([]);
    const [filter, newFilter] = useState('all');
    const [search, newSearch] = useState('');

    useEffect(()=>{
    const service = new CompanyService();
    service.getEquipment()
    .then(
      result =>{newItems(result); console.log(items)}
    )
    }, [])

    let maxId = 100;

    const onItemAdded = (label) => {
              const item = createItem(label);
              newItems([...items, item]);
          };
    
    const searchItems = (items, search) =>{
        if (search.length === 0) {
            return items;
        }
    
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        }
    
    const toggleProperty = (arr, id, propName) => {
            const idx = arr.findIndex((item) => item.id === id);
            const oldItem = arr[idx];
            const value = !oldItem[propName];
        
            const item = { ...arr[idx], [propName]: value } ;
            return [
                ...arr.slice(0, idx),
                item,
                ...arr.slice(idx + 1)
            ];
            };
    
        const onDelete = (id) => {
            const idx = items.findIndex((item) => item.id === id);
            const items = [
            ...items.slice(0, idx),
            ...items.slice(idx + 1)
            ];
            newItems(items)
        };

    
        const onSearchChange = (search) => {
            newSearch(search)
            console.log(search)
        };
    
        const createItem = (label) => {
        return {
            id: ++maxId,
            label,
            important: false,
            done: false
        };
        }
        const visibleItems = searchItems(items, search);  
        return(
            <div className="inventory">
            <InventoryHeader count={items.length}/>  
            <div className="search-panel d-flex">
            <InventorySearch
            search={i=>{onSearchChange(i)}}/>
            </div>
            <InventoryList 
            items={visibleItems}
            onDeleted={ onDelete }
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

