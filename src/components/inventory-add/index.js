import React, { useState } from 'react';

import './item-add.css'

const InventoryAdd = ({onItemAdd}) => {
    
    const [label, newLabel] = useState('')

    const onLabelChange = (e) => {
        newLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdd(label);
        newLabel('');
    }
        return (
            <form className="item-add d-flex"
            onSubmit={onSubmit}>
                <input type="text"
                className="form-control"
                onChange={onLabelChange}
                placeholder="Let's add a new case!"
                value={label}
                count={1}
                />
                <button className='btn btn-outline-secondary'
                >Add item </button>
            </form>
        )
    }

export default InventoryAdd;


