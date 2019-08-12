import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './componnents/Player';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="board">
        <Player currentPlayer hands={[
          { cards: [] },
          { cards: [] },
          { cards: [{ value: "A", type: "diams" }] },
          { cards: [{ value: "A", type: "diams" }, { value: "10", type: "diams" }, { value: "A", type: "diams" }, { value: "10", type: "diams" }, { value: "10", type: "diams" }] },
          { cards: [{ value: "A", type: "diams" }, { value: "10", type: "diams" }] }
        ]} />
        <Player hands={[
          { cards: [] },
          { cards: [] },
          { cards: [{ value: "A", type: "diams" }] },
          { cards: [] },
          { cards: [{ value: "A", type: "diams" }, { value: "10", type: "diams" }, { value: "A", type: "diams" }, { value: "10", type: "diams" }, { value: "10", type: "diams" }]}
        ]}/>
        {/* <Hand cards={[]} /> */}
        {/* <Hand cards={[{ value: "A", type: "diams" }]} /> */}
        {/* <Hand cards={[{ value: "A", type: "diams" }, { value: "10", type: "diams" }]} /> */}
      </div>
    </div>
  );
}

export default App;
