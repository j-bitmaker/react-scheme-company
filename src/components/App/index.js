import React from 'react';
import Scheme from '../scheme';
import Inventory from '../inventory';
import CompanyService from '../../services';
import './App.css';
// import Scorocode from '../../scorocode.js';

const App = () =>(

        <div className='app border border-secondary'>
           		<div className="row">
				<div className="col">
				<div className='scheme'>
                <Scheme/>
				</div>
				</div>
				<div className="col">
				<Inventory/>
				</div>
			</div>
        </div>
    )

export default App;

// Scorocode.Init({
// 	ApplicationID: "3196b2e873234547ad8b06ed636d3538",
// 	JavaScriptKey: "5e85f685a23e44e6abad95accc1dd2ea",
// 	MasterKey:     "659d718ff9664f6fafbdb79efc93cb34"
// });	

// var buildings = new Scorocode.Query("buildings");
// buildings.find().then((finded) => {
// 	let buildings = finded.result;
// 	console.info(buildings);
// });


// var eq = new Scorocode.Query("equipment");
// eq.find().then((found) => {
// 	let equipment = found.result;
// 	console.info(equipment);
// });

