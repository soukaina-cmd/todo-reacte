import React, { useRef } from "react";
import "./AjouterForme.css";
import { Link } from "react-router-dom";
export default function AjouterForme(props) {
  let tit = useRef("");
  let disc = useRef("");
  const valider_ajouteforme = () => {
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

    let newtodo={ "id":0 ,"titre":tit.current.value , "discription":disc.current.value}
    props.valider(newtodo)
  };

  return (
    <div className="col-lg-6 offset-lg-3">
      <div className="row">
        <input
          type="text"
          className="form-control mt-4"
          ref={tit}
          placeholder="Titre"
        />
      </div>
      <div className="row">
        <input
          type="text"
          className="form-control mt-2"
          ref={disc}
          placeholder="Discription"
        />
      </div>
      <div className="">
        <button className="btn btn-dark mt-3">Annuler</button>
        <button className="btn btn-dark mt-3 bu" onClick={valider_ajouteforme}>
          <Link to={"/home"}>Ajouter</Link>
        </button>
      </div>
    </div>
  );
}
