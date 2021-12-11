import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import React from 'react';
import Description from './components/Description/Description';
import List from './components/List/List';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Description />
      <List items={items}/> */}
    </React.Fragment>
  );
}

export default App;


const items = [
  {
    name: "Sushi-1",
    info: "best sushi",
    cost: 22.5
  },
  {
    name: "Sushi-2",
    info: "best sushi",
    cost: 33.87
  },
  {
    name: "Sushi-2",
    info: "best sushi",
    cost: 10.2
  },
]

