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
  console.log(link)
  return (
  <div className="panel panel-default">
  <div className="panel-heading">
    <h4 className="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href={link}>
        {name}</a>
    </h4>
  </div>
  <div id={_id} className="panel-collapse collapse">
    <div className="list-group">
        <Floor count={rooms}/>
    </div>
  </div>
</div>
)
}

const Floor = ({count})=>count.map(i=>(<a href="#" className="list-group-item">{i.name}</a>))

