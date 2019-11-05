import React, { Component } from 'react';

import './items-filter.css';
//we use class in order to control "inside state" (sory for my english)
export default class StatusFilter extends Component {


    state = {
    classAll: "btn btn-info",
    classActive: "btn btn-outline-secondary",
    classDone: "btn btn-outline-secondary"
        }
    setDone = () => {
        this.props.onButtonDone();
        this.setState({
            classActive: `btn btn-outline-secondary`,
            classDone: 'btn btn-info',
            classAll: "btn btn-outline-secondary"
        });
    }
    setActive = () => {
        this.props.onButtonActive();
        this.setState({
            classActive: 'btn btn-info',
            classDone: 'btn btn-outline-secondary',
            classAll: "btn btn-outline-secondary"
    });
    }
    setAll = () => {
        this.props.onButtonAll();
        this.setState({
            classActive: 'btn btn-outline-secondary',
            classDone: 'btn btn-outline-secondary',
            classAll: "btn btn-info"
        });
    }

    render () {
    
        const {classAll, classActive, classDone} = this.state;
       
       
        return (

            <div className="btn-group">
    <button type="button"
    className={classAll}
    onClick={this.setAll}>All</button>
    <button type="button"
    className={classActive}
    onClick={this.setActive}
    >Active</button>
    <button type="button"
    className={classDone}
    onClick={this.setDone}>Done</button>
            </div>
        )

    }
}
