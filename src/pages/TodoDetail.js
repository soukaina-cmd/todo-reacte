import React from "react";
import Header from "./../component/header/Header";
import Footer from "./../component/footer/Footer";
import DetailForme from "../component/detail/DetailForme";

export default function TodoDetail(props) {
  return (
    <div className="">
      <Header />
      <DetailForme adam={props.souka} />
      <Footer />
    </div>
  );
}
