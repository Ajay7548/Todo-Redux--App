import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";



const App = () => {
 
  
  return (

    <>
      <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-8 py-3 text-white">
        <h1 className="font-semibold text-3xl text-white mb-8">
          Todo App Using Redux-ToolKit
        </h1>
        <div className="mb-4 ">
         <AddTodo/>
        </div>
        <div className="mb-4 ">
         <Todo/>
        </div>
      </div>
    </>
  );
};

export default App;
