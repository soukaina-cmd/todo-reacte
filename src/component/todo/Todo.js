import React from 'react'
import { Link } from 'react-router-dom'
import './Todo.css'
export default function Todo(props) {
const Deletetodo_todo =()=>{
props.Deletetodo(props.aya.id)
}

  return (
    
        <div className='col-lg-6 offset-lg-3 bo'>
            <div className='row'>
                <div className='col-lg-3 offset-lg-1'>{props.aya.titre}</div>
                <div className='col-lg-1 offset-lg-4 tr'><Link to={"/liste/"+props.aya.id}><i class="fa-solid fa-eye"></i></Link></div>
                <div className='col-lg-1 tr'><Link to={"/modifier/"+props.aya.id}><i class="fa-solid fa-edit"></i></Link></div>
                <div className='col-lg-1 tr'><i class="fa-solid fa-trash" onClick={Deletetodo_todo}></i></div>
            </div>
        </div>
        
    
  )
}
