import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import ModifierForme from "./../component/modifier/ModifierForme";

export default function TodoModifier(props) {
  return (
    <div>
      <Header />
      <ModifierForme adam={props.souka} />
      <Footer />
    </div>
  );
}
