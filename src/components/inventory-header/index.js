import React from 'react';
import './inventory-header.css'

const InventoryHeader = ({count}) => {
    return (
    <div className="inventory-header d-flex">
    <h1>List</h1>
    <h2> {count} inventories </h2>
    </div>
    );
};

export default InventoryHeader;