import { stringify } from 'querystring';
import React from 'react';

interface testeProps {
  text: String
}
// Sintaxe  ->  JSX - JavaScript XML

function Title(props: testeProps) {
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className="App">
      <Title text="To testando em kkk"/>
    </div>
  );
}

export default App;
