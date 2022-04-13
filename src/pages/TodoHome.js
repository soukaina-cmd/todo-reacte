import React from "react";
import Footer from "../component/footer/Footer";
import Liste from "../component/liste/Liste";
import Header from './../component/header/Header';

export default function TodoHome(props) {
  const Deletetodo_home=(id)=>{
    props.Deletetodo(id)
  }
  return (
  <>
 <Header/>
 <Liste adam={props.souka} Deletetodo={Deletetodo_home}/>
 <Footer/>
  </>
  )
}
