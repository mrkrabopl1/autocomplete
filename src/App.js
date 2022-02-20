import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Search from "./components/search";
import React from "react";
function App() {

  return (
    <div className="App">
      <Search/>
    </div>
  );
}

export default App;
