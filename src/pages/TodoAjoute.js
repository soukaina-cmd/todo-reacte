import React from "react";
import Header from "./../component/header/Header";
import Footer from "./../component/footer/Footer";
import AjouterForme from "../component/ajouter/AjouterForme";

export default function TodoAjoute(props) {
  const valider_ajoute = (newtodo) => {
    props.valider(newtodo);
  };
  return (
    <div className="">
      <Header />
      <AjouterForme valider={valider_ajoute} />
      <Footer />
    </div>
  );
}
