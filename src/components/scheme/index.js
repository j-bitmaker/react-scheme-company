import React from 'react';
import './scheme.css';


const Scheme = ({sendId, scheme=[]}) =>{ 

  const catchId = e =>{
    if (e.hasOwnProperty('target')){
    sendId(e.target.id)
    } else{
      sendId(e)
  }
}



  return(
      <div className="col">
        <div className="panel-group" id="accordion">
        {scheme.map(build=><Build build={build} sendId={catchId}/>)}
        </div>
      </div>
    )
  }

export default Scheme;


const Build = ({build, sendId})=>{
  const {_id, name, rooms} = build;

  const catchId = e =>{
    if (e.hasOwnProperty('target')){
    sendId(e.target.id)
    console.log(e.target.id)
    } else{
      sendId(e)
  }
}
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
        <FirstNode count={rooms} sendId={catchId}/>
    </div>
  </div>
</div>
)
}

const FirstNode = ({count, sendId})=>count.map(i=>{
  const catchId = e =>{
    if (e.hasOwnProperty('target')){
    sendId(e.target.id)
    } else{
      sendId(e)
  }
}
  const {id, children, name} = i;
  if (i.hasOwnProperty('children')){
   
    const link='#'+id;
    return (
      <ul className="list-group">
      <li key={id} id={id} onClick={catchId} className="list-group-item list-group-item-info">
        <h4 className="panel-title">
          <a href={link}>{name}</a>
        </h4>
      </li>
        <div className="list-group">
            <SecondNode node={children} sendId={catchId}/>
        </div>
    </ul>
    )
  }
  return (<div className="list-group-item" id={id} onClick={catchId}>{name}</div>)
})



const SecondNode = ({node, sendId}) =>{

  const catchId = e =>{
    if (e.hasOwnProperty('target')){
    sendId(e.target.id)
    } else{
      sendId(e)
  }
}
  return(
        <ul className='node'>
          {node.map(i=>{
            const {id, name, children} = i;
            if(!i.hasOwnProperty('children')){
              return(
                <a className="list-group-item" id={id} onClick={catchId}>{name}</a>       )
              }
            return(
              <>
              <li key={id} id={id}className="list-group-item list-group-item-success">
                <h4 className="panel-title">
                  <a href={id}>{name}</a>
                </h4>
              </li>  
              <LastNode node={children} sendId={catchId}/> 
              </> 
              )
          })}
        </ul>
      )
  }

const LastNode = ({node, sendId}) =>{
  const catchId = e =>{
    sendId(e.target.id)
  }
  return(
    <ul className='node'>
      {node.map(i=>(
      <a key={i.id} className="list-group-item" id={i.id} onClick={catchId}>{i.name}</a>  
    ))}
    </ul>
       )
    }
