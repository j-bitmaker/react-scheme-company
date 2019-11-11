import React from 'react';
import Nodes from './scheme-nodes';
import './scheme.css';


const Scheme = ({sendId, scheme=[]}) =>{ 

  const catchId = e =>{
    const arrId = [e].flat(5);
    if (e.hasOwnProperty('target')){ 
      sendId(e.target.id);
    } else{
      if(e.find(i=>typeof(i)==='object')){
        sendId(arrId);
      } else {
        sendId(e)
      }
  }
}

  return(
      <div className="col">
        <h1>
          Scheme of builds and rooms
        </h1>
        <div className="panel-group" id="accordion">
         {scheme.map(build=><Build build={build} sendId={catchId} />)}
        </div>
      </div>
    )
  }

export default Scheme;


const Build = ({build, sendId})=>{
  const {_id, name, rooms} = build;

  const catchId = e =>{
    const listRooms = [];
    const searchRooms = i =>{
      if(i.hasOwnProperty('children')){
        i.children.forEach(i=>{searchRooms(i)})
      } 
      if (!i.hasOwnProperty('id')){
        listRooms.push(i)
      } else {
        listRooms.push(i.id)
      }
    }
    
    if (e.hasOwnProperty('rooms')){
      const searchIds = e =>{
          e.rooms.forEach(i=>searchRooms(i))
        }
      e.rooms.forEach(i=>listRooms.push(i.id))
      searchIds(e)
      sendId(listRooms);
      } else{
        searchRooms(e);
        sendId(listRooms);
      }
  }

  const link='#'+_id;
  return (
  <div className="panel panel-default">
  <div className="panel-heading">
    <h4 className="panel-title" onClick={()=>catchId(build)}>
      <a data-toggle="collapse" data-parent="#accordion" href={link}>
        {name}</a>
    </h4>
  </div>
  <div id={_id} className="panel-collapse collapse">
    <div className="list-group floor">
        <Nodes count={rooms} sendId={catchId}/>
    </div>
  </div>
</div>
)
}

