// import React, { useState } from 'react'
// import "./App.css"
// import TodoInput from './components/ToDoInput'
// import Todolist from './components/ToDoList';
// function App() {
//   const [listTodo,setListTodo]=useState([]);
//   let addList = (inputText)=>{
//     if(inputText!=='')
//       setListTodo([...listTodo,inputText]);
//   }
//   const deleteListItem = (key)=>{
//     let newListTodo = [...listTodo];
//     newListTodo.splice(key,1)
//     setListTodo([...newListTodo])
//   }
//   return (
//     <div className="main-container">
//       <div className="center-container">
//         <TodoInput addList={addList}/>
//         <h1 className="app-heading">TODO</h1>
//         <hr/>
//         {listTodo.map((listItem,i)=>{
//           return (
//             <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App

// Shri's Todo App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/Home';
import ParentSignup from './pages/ParentSignup';
// import AdminLogin from './pages/AdminLogin'; // Optional

// Components
// import Navbar from './components/Navbar'; // If you want a global navbar
// import Layout from './components/Layout'; // If you're using a layout wrapper

function App() {
  return (
    <Router>
      {/* Optional: Wrap routes with <Layout> if needed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<ParentSignup />} />
        {/* <Route path="/admin" element={<AdminLogin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
