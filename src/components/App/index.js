import React, {useState, useEffect} from 'react';
import Scheme from '../scheme';
import Inventory from '../inventory';
import CompanyService from '../../services';
import './App.css';
// import Scorocode from '../../scorocode.js';

const App = () =>{

	const [room, newRoom] = useState('all')
	const [items, newItems] = useState([]);
	const [scheme, newScheme] = useState();
	const [filteredItems, newFilteredItems] = useState([])

    useEffect(()=>{
    const service = new CompanyService();
    service.getEquipment()
    .then(
	  result =>{
		  newItems(result);
		newFilteredItems(result)
		}
	)
	service.getBuilds()
	.then(
		result =>{newScheme(result)}
	)
	}, [])
	useEffect(()=>{
		newFilteredItems(items.filter(i=>{
			return i.room===room 
		})
		)}, [room])

	const catchId = (id) =>{
		newRoom(id);
		console.log(room)
	}
		return (
			<div className='app border border-secondary'>
					<div className="row">
					<div className="col">
					<div className='scheme'>
					<Scheme sendId={catchId} scheme={scheme}/>
					</div>
					</div>
					<div className="col">
					<Inventory items={filteredItems}/>
					</div>
				</div>
			</div>
		)
	}

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

