import React from 'react'
import Todo from '../todo/Todo'

export default function(props) {
const Deletetodo_liste =(id)=>{
props.Deletetodo(id)
}


  return (
    <div className=''>
    {props.adam.map(A =>{
      return  <Todo key={A.id}  aya={A} Deletetodo={Deletetodo_liste}/>
     
    })}
   </div>
 )
}
  
    
