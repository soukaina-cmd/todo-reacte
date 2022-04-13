import React from 'react'
import './ModifierForme.css'
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

export default function ModifierForme(props) {
 // modifier
 let edit = useParams()
 let modifier = props.adam.filter(A =>{
return A.id == edit.id 
 })[0]
 // 
 let tit = useRef("");
 let disc = useRef("");
 const valider_modifierforme = () => {
   // USER REF HOUWA la liaison ente linput le titre

   //  current hiya thi
   if (tit.current.value == "") {
     tit.current.classList.add("is-invalid");
   } else {
     tit.current.classList.remove("is-invalid");
   }
   if (disc.current.value == "") {
     disc.current.classList.add("is-invalid");
   } else {
     disc.current.classList.remove("is-invalid");
   }

 };

 return (
   <div className="">
     <div className="col-lg-6 offset-lg-3">
       <div className="row">
         <input
           type="text"
           defaultValue={modifier.titre}
           className="form-control mt-4"
           ref={tit}
           placeholder="Titre"
         />
       </div>
       <div className="row">
         <input
           type="text"
           // modifier
           defaultValue={modifier.discription}
           className="form-control mt-2"
           ref={disc}
           placeholder="discription"
         />
       </div>

       <div className="">
         <button className="btn btn-dark mt-3">Annuler</button>
         <button
           className="btn btn-dark mt-3 bu"
           onClick={valider_modifierforme }>
           Edite
         </button>
       </div>
     </div>
   </div>
 );
}

