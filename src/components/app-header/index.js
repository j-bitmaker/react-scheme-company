import React from 'react';
import './app-header.css';
const AppHeader = () =>(
    <div className="jumbotron app-header">
        <h2 className="display-3">
            "Builds&Rooms" Company
        </h2>
        <p className="lead">
            Our entire company is in your device!
        </p>
        <hr className="my-4"/>
        <ul className='list-group'>
            <li className="list-group-item list-group-item-info">You can find certain build, floor, side or room of our company in the left panel. You should only click in certain section!</li>
            <li className="list-group-item list-group-item-primary">In the left panel you can see all inventoryies of whole our company</li>
            <li className="list-group-item list-group-item-info">If you click in certain section, in the left panel you display certain inventories of sertain build, floor, side or room </li>
            <li className="list-group-item list-group-item-primary">You can add YOUR inventories in the left panel and you can add it in certain room build or room too!</li>
            <li className="list-group-item list-group-item-info">You can find certain invetntories via the search panel in the upper left side</li>
            <li className="list-group-item list-group-item-primary">If you want, you can edit inventories. You can change label and count of all inventories!</li>



        </ul>
    </div>   
)

export default AppHeader;