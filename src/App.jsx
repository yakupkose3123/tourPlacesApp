import data from "./helper/data"
import './App.css';
import Card from './components/cards/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { useState } from "react";

function App() {
  // console.log(data);
  const [dataValue , setDataValue ] = useState(data)
  const tempData = [ ...data]
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Card data = {tempData}/>
    </div>
  );
}

export default App;
