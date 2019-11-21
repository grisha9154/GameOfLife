import React, { useState } from 'react';
import { LeftPanel } from './components/left-panel';
import { GameBoard } from './components/game-board';

function App() {
  const [size, setSize] = useState({ height: 10, width: 10 });

  return (
    <div className="App" style={{ display: 'flex' }}>
      <LeftPanel height={size.height} width={size.width} setSize={setSize} />
      <GameBoard heigth={size.height} width={size.width} />
    </div>
  );
}

export default App;
