import React from "react";
import { useParams } from "react-router-dom";
import   "./DetailForme.css";
export default function DetailForme(props) {
  let param = useParams();
  let Mytodo = props.adam.filter((liste) => {
    return liste.id == param.id;
  })[0];
  return (
    <div className="">
      <div className="col-lg-6 offset-lg-3 de">
        <div className="col-lg-4 offset-lg-4">
          <h4>{Mytodo.titre}</h4>
        </div>
        <div className="col-lg-10 offset-lg-1">
          <p>{Mytodo.discription}</p>
        </div>
      </div>
    </div>
  );
}
