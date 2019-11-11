import React, {useState} from 'react';
import './inventory-list.css'


const InventoryListItem = ({label, onDeleted, onEdit, dec, inc, count, nextLabel}) =>{

  const [change, newChange] = useState(false)

  const changeLabel = () =>{
    newChange(!change);
  }

  const confirmChanges = val =>{
    nextLabel(val); 
    changeLabel()
  }
 
  return(
    <span className='inventory-list-item'>
      <span className='item-label'>
      <span className="item">
        <Item label={label} change={change} nextLabel={confirmChanges}/>
      </span>
      <button onClick={dec} className='btn btn-outline-primary btn-sm float'><i className="fa fa-minus-circle minus"></i></button>
        <span className='float'>{count}</span>
      <button onClick={inc} className='btn btn-outline-success btn-sm float'><i className="fa fa-plus-circle plus"></i></button>
      </span>
      <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
        <i className="fa fa-trash" />
      </button>
      <button type="button"
          className="btn btn-outline-primary btn-sm float-right"
          onClick={changeLabel}>
        <i className="fa fa-cog" />
      </button>
    </span>
    )
}

const Item = ({label, change, nextLabel}) =>{

const [value, newValue] = useState(label);

const changeLabel = (e) =>{
  e.preventDefault();
  newValue(e.target.value);
}
const onSubmit = e =>{
  e.preventDefault()
  nextLabel(value)
}



if(!change){
  return label!=='' ? (
      <span
        className="inventory-list-item-label">
        {label}
      </span>
  ) : (<span>-</span>)
}
return (
    <form onSubmit={onSubmit}>
        <input type="text"
        className="form-control change-input "
        onChange={changeLabel}
        placeholder="Let's add a new case!"
        value={value}              
        />
        <button className='btn btn-outline-info change-button'
        >OK </button>
    </form>
)
}

export default InventoryListItem;





