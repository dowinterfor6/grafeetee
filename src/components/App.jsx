import React from 'react';
import Canvas from './Canvas';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <section className="app-container">
      <Sidebar />
      <Canvas />
    </section>
  );
}

export default App;
