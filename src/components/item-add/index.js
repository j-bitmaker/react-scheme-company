import React, { Component } from 'react';

import './item-add.css'

export default class ItemAddForm extends Component {
    
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
            count: 1
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render(){
        return (
            <form className="item-add d-flex"
            onSubmit={this.onSubmit}>
                <input type="text"
                style={this.itemAddStyle}
                className="form-control"
                onChange={this.onLabelChange}
                placeholder="Let's add a new case!"
                value={this.state.label}
                />
                <button className='btn btn-outline-secondary'
                >Add item </button>
            </form>
        )
    }
}