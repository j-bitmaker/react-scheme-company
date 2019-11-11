import React from 'react';
import InventoryListItem from './inventory-list-item';
import './inventory-list.css';

const InventoryList = ({items, onDeleted, inc, dec, nextLabel}) => items.map(i => (

        <li key={i._id} id={i._id} className="list-group-item"> 
            <InventoryListItem 
            label={i.name}
            count={i.count}
            onDeleted={()=>onDeleted(i._id)}
            nextLabel={(val)=>nextLabel(i._id, val)}
            inc={()=>inc(i._id)}
            dec={()=>dec(i._id)}
            />
        </li>
        )
    )



export default InventoryList;