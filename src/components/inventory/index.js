import React, { Component } from 'react';
import InventoryHeader from '../inventory-header';

import InventorySearch from '../inventory-search';
import InventoryList from '../inventory-list';
import ItemAdd from '../item-add';
import './inventory.css';


export default class App extends Component{

    
    maxId = 100;

    state = {
        items: [],
        filter: 'all',
        search: ''
    };

    onItemAdded = (label) => {
            this.setState((state) => {
              const item = this.createItem(label);
              return { items: [...state.items, item] };
            })
          };

    filterItems(items, filter) {
        if (filter === 'all') {
            return items;
        } else if (filter === 'active') {
            return items.filter(item => !item.done);
        } else if (filter === 'done') {
            return items.filter(item => item.done);
        }
        }
    
    searchItems(items, search){
        if (search.length === 0) {
            return items;
        }
    
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        }
    
    toggleProperty = (arr, id, propName) => {
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
    
        onToggleDone = (id) => {
        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'done');
            return { items };
        });
        };
    
        onToggleImportant = (id) => {
        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'important');
            return { items };
        });
        };
    
        onDelete = (id) => {
        this.setState((state) => {
            const idx = state.items.findIndex((item) => item.id === id);
            const items = [
            ...state.items.slice(0, idx),
            ...state.items.slice(idx + 1)
            ];
            return { items };
        });
        };
    
        onFilterChange = (filter) => {
        this.setState({ filter });
        };
    
        onSearchChange = (search) => {
        this.setState({ search });
        };
    
        createItem(label) {
        return {
            id: ++this.maxId,
            label,
            important: false,
            done: false
        };
        }
          
    render(){
        const { items, filter, search } = this.state;
        const doneCount = items.filter((item) => item.done).length;
        const visibleItems = this.searchItems(items, search);        
        return(
            <div className="inventory">
            <InventoryHeader count={items.length}/>  
            <div className="search-panel d-flex">
            <InventorySearch
            onSearchChange={this.onSearchChange}/>
            </div>
            <InventoryList 
            items={visibleItems}
            onDeleted={ this.deleteItem }
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
            <div className='item-add'>
            <ItemAdd
            onItemAdded={this.onItemAdded} />
            </div>
            </div>
        )
    }
}
