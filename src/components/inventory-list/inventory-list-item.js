import React from 'react';
import Counter from './counter';
import './inventory-list.css'


const InventoryListItem = ({label, onDeleted, onEdit, dec, count}) =>(
      <span className='inventory-list-item'>
        <form>
        {/* <Item label={label}/> */}
        <button onClick={dec} className='btn btn-outline-primary btn-sm float-left'><i className="fa fa-minus-circle minus"></i></button>
        <div className='float-left'>{count}</div>
        <button onClick={dec} className='btn btn-outline-success btn-sm float-left'><i className="fa fa-plus-circle plus"></i></button>


        <EditItem label={label}/>
        </form>
        <button type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onEdit}>
          <i className="fa fa-trash" />
        </button>
        <button type="button"
            className="btn btn-outline-primary btn-sm float-right"
            onClick={onDeleted}>
          <i className="fa fa-cog" />
        </button>
      </span>
    )

export default InventoryListItem;

const Item = ({label}) =>(
    <span
      className="inventory-list-item-label">
      {label}
    </span>
)

const EditItem = ({label}) =>(
  <input type='text' value={label}/>
)


