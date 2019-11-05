import React from 'react';
import InventoryListItem from './inventory-list-item';
import './inventory-list.css';

const InventoryList = ({items, onDeleted, onToggleImportant, onToggleDone }) => items.map((i) => (
        <li key={i.id} className="list-group-item"> 
            <InventoryListItem 
            label={i.label}
            count={i.count}
            onDeleted={()=> onDeleted(i.id)}
            onToggleImportant={() => onToggleImportant(i.id)}
            onToggleDone={() => onToggleDone(i.id)}
            />
        </li>
        )
)



export default InventoryList;