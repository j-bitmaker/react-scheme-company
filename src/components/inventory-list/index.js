import React from 'react';
import InventoryListItem from './inventory-list-item';
import './inventory-list.css';

const InventoryList = ({items, onDeleted, onToggleImportant, onToggleDone }) => items.map((i) => (

        <li key={i._id} className="list-group-item"> 
            <InventoryListItem 
            label={i.name}
            count={i.count}
            onDeleted={()=> onDeleted(i._id)}
            onToggleImportant={() => onToggleImportant(i._id)}
            onToggleDone={() => onToggleDone(i._id)}
            />
        </li>
        )
    )



export default InventoryList;