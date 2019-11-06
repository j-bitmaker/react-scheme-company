import React from 'react';
import './scheme.css';
import CompanyService from '../../services';
import {useState, useEffect} from 'react';

const Scheme = () =>{ 

  const [scheme, newScheme] = useState([]);

  useEffect(()=>{
  const service = new CompanyService();
  service.getBuilds()
  .then(
    result =>{newScheme(result)}
  )
  console.log(scheme)
  }, [])

  setTimeout(()=>{console.log(scheme)}, 1000)

  return(
      <div className="col">
        <div className="panel-group" id="accordion">
        {scheme.map(build=><Build build={build}/>)}
        </div>
      </div>
    )
  }

export default Scheme;


const Build = ({build})=>{
  const {_id, name, rooms} = build;
  const link='#'+_id;
  return (
  <div className="panel panel-default">
  <div className="panel-heading">
    <h4 className="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href={link}>
        {name}</a>
    </h4>
  </div>
  <div id={_id} className="panel-collapse collapse">
    <div className="list-group floor">
        <FirstNode count={rooms}/>
    </div>
  </div>
</div>
)
}

const FirstNode = ({count})=>count.map(i=>{
  if (i.hasOwnProperty('children')){
    const {id, children, name} = i;
    const link='#'+id;
    return (
      <ul className="list-group">
      <li key={id} className="list-group-item list-group-item-info">
        <h4 className="panel-title">
          <a href={link}>{name}</a>
        </h4>
      </li>
        <div className="list-group">
            <NextNode node={children}/>
        </div>
    </ul>
    )
  }
  return (<a href={i.id} className="list-group-item">{i.name}</a>)
})



const NextNode = ({node}) =>(
  <ul className='node'>
    {node.map(i=>{
      const {id, name} = i;
      if(!i.hasOwnProperty('children')){
        return(
          <a href={i.id} className="list-group-item">{i.name}</a>       )
        }
      return(
        <>
         <li key={id}className="list-group-item list-group-item-success">
          <h4 className="panel-title">
            <a href={id}>{name}</a>
          </h4>
        </li>  
        <NextNode node={i.children}/> 
        </> 
        )
    })}
  </ul>
)
