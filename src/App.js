import React, { Component } from "react";

import TodoErreur from './pages/TodoErreur';
import TodoHome from './pages/TodoHome';
import TodoDetail from './pages/TodoDetail';
import TodoAjoute from './pages/TodoAjoute';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { todoliste } from './data/DataListe';
import TodoModifier from './pages/TodoModifier';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      'todo': todoliste
    }
  }
 DeleteTodoListe=(id)=>{
  let table=[]
  if(window.confirm("voulez-vous supprimer")){
  table=this.state.todo.filter(t=>{
    return t.id!=id
   })
   this.setState({"todo":table})

 }}


//  ajouter
valider_app =(newtodo)=>{
  newtodo.id = this.state.todo.length+1
  this.state.todo.push(newtodo)
  
}



  render() {
    return (
   <BrowserRouter>
   <Routes>
   <Route path="/liste/:id"element={<TodoDetail souka={this.state.todo} />}/>
   <Route path="/ajouter"element={<TodoAjoute valider={this.valider_app}/>}/>
   <Route path="/home"element={<TodoHome souka={this.state.todo} Deletetodo={this.DeleteTodoListe}/>}/>
   <Route path="/modifier/:id" element={<TodoModifier souka={this.state.todo} />}/>
  <Route path="*"element={<TodoErreur/>}/>
   </Routes>
   </BrowserRouter>
   )
  }
}
