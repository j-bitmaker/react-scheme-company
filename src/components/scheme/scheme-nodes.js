import React from 'react';

const FirstNode = ({count, sendId})=>count.map(i=>{
    const catchId = e =>{
      if (e.hasOwnProperty('target')){
        sendId(i);
        } else{
          sendId(e);
        }
  }
    const {id, children, name} = i;
    if (i.hasOwnProperty('children')){
     
      return (
        <ul className="list-group">
        <a className="list-group-item list-group-item-info" onClick={catchId}>
          <h4 key={id} id={id} className="panel-title">
            <span>{name}</span>
          </h4>
        </a>
          <div className="list-group">
              <SecondNode node={children} sendId={catchId}/>
          </div>
      </ul>
      )
    }
    return (<a key={id} className="list-group-item" id={id} onClick={catchId}>{name}</a>)
  })
   
  const SecondNode = ({node, sendId}) =>(
  
    <ul className='node'>
      {node.map(i=>{
          const catchId = e =>{
            if (e.hasOwnProperty('target')){
              sendId(i);
              } else{
                sendId(e);
              }
          }
        const {id, name, children} = i;
        if(!i.hasOwnProperty('children')){
          return(
            <a key={id} id={id} className="list-group-item" id={id} onClick={catchId}>{name}</a>      
            )
          }
        return(
          <>
          <a key={id} id={id} className="list-group-item list-group-item-success" onClick={catchId}>
            <h4 key={id} id={id} className="panel-title">
              <span>{name}</span>
            </h4>
          </a>  
          <LastNode node={children} sendId={catchId}/> 
          </> 
          )
      })}
    </ul>
        )
  
  
  const LastNode = ({node, sendId}) =>(
      <ul className='node'>
        {node.map(i=>(
        <a key={i.id} className="list-group-item" id={i.id} onClick={e=>sendId(e.target.id)}>{i.name}</a>  
      ))}
      </ul>
    )
  
export default FirstNode;