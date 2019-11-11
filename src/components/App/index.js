import React, {useState, useEffect} from 'react';
import Scheme from '../scheme';
import Inventory from '../inventory';
import CompanyService from '../../services';
import AppHeader from '../app-header';
import './App.css';
// import Scorocode from '../../scorocode.js';

const App = () =>{

	const [rooms, newRooms] = useState(['all'])
	const [items, newItems] = useState([]);
	const [scheme, newScheme] = useState();
	const [filteredItems, newFilteredItems] = useState([items]);
	const [searchedItems, newSearchedItems] = useState("")

	const service = new CompanyService();

	useEffect(()=>{
    service.getEquipment()
    .then(
	  result =>{
		newItems(result);
		newFilteredItems(result);
		}
	)
	service.getBuilds()
	.then(
		result =>{newScheme(result)}
	)
	}, [])

	useEffect(()=>{
		newFilteredItems(items.filter(i=>rooms.indexOf(i.room)!==-1))
	}, [rooms])

	const onItemAdd = (item) =>{
		const newItem = {
			"_id": new Date,
			"room": rooms[0],//need for editing
			"count": 1,
			"updatedAt": new Date,
			"readACL": [],
			"updateACL": [],
			"removeACL": [],
			"name": item,
			"createdAt": new Date
		}
		newItems([...items, newItem]);
		newFilteredItems([...filteredItems, newItem]);
		service.setEquipment(items);
	}

	//functons, which will be used only in edit, add, delete and etc functions
	const idxItem = id => items.findIndex(i=>i._id===id);
	const idxFilter = id => filteredItems.findIndex(i=>i._id===id);
	const startItems = id => items.slice(0, idxItem(id));
	const startFiltered = id => filteredItems.slice(0, idxFilter(id));
	const endItems = id => items.slice(idxItem(id)+1, items.length);
	const endFiltered = id => items.slice(idxItem(id)+1, items.length)
	const nextItem = id => items[idxItem(id)]

	const onDeleted = id => {
		newItems([...startItems(id), ...endItems(id)]);
		newFilteredItems([...startFiltered(id), ...endFiltered(id)])
	}

	const nextLabel = (val, id) =>{
		const newItem = nextItem(id);
		newItem.name=val;
		newItems([...startItems(id), newItem, ...endItems(id)]);
		newFilteredItems([...startFiltered(id), newItem, ...endFiltered(id)])
	}

	const inc = id =>{
		const newItem = nextItem(id);
		newItem.count++;
		newItems([...startItems(id), newItem, ...endItems(id)]);
		newFilteredItems([...startFiltered(id), newItem, ...endFiltered(id)])	
	}
	const dec = id =>{
		const newItem = nextItem(id);
		if(newItem.count>0){
		newItem.count--;
		}
		newItems([...startItems(id), newItem, ...endItems(id)]);
		newFilteredItems([...startFiltered(id), newItem, ...endFiltered(id)])	
	}
	

	const searching = (items, searched) => {
		if (searched===""){
			return items
		}
		return items.filter(i=>i.name.toLowerCase().indexOf(searched.toLowerCase())!==-1)
	}
	const finishItems = searching(filteredItems, searchedItems)

		return (
			<div className='app border border-secondary'>
					<AppHeader/>
				<div className="row">
					<div className="col">
						<div className='scheme'>
							<Scheme sendId={arrId=>newRooms(arrId)} scheme={scheme}/>
						</div>
					</div>
					<div className="col">
						<Inventory 
					items={finishItems} 
					onItemAdd={onItemAdd} 
					onDeleted={onDeleted}
					nextLabel={nextLabel}
					nextSearch={search=>newSearchedItems(search)}
					inc={inc}
					dec={dec}/>
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

