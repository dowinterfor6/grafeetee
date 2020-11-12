import React, { useReducer } from 'react';
import Canvas from './Canvas';
import Sidebar from './Sidebar';

const App = () => {
  // TODO: Refactor this into their own files
  // Action types
  const SET_COLOR = 'SETCOLOR';
  const SET_TOOL = 'SETTOOL';
  const SET_THICKNESS = 'SETTHICKNESS';
  const SET_HARDNESS = 'SETHARDNESS';

  // Consts
  const SPRAY_PAINT = 'SPRAYPAINT';

  const reducer = (state, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch(action.type) {
      case SET_COLOR:
        nextState.color = action.payload;
        return nextState;
      case SET_TOOL:
        nextState.activeTool = action.payload;
        return nextState;
      case SET_THICKNESS:
        nextState.thickness = action.payload;
        return nextState;
      case SET_HARDNESS:
          nextState.hardness = action.payload;
        return nextState;
      default:
        return state;
    }
  }

  const initialState = {
    color: "#000",
    activeTool: SPRAY_PAINT,
    thickness: 50,
    hardness: 50,
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="app-container">
      <Sidebar
        dispatch={dispatch}
        state={state}
        SET_COLOR={SET_COLOR}
        SET_TOOL={SET_TOOL}
        SET_THICKNESS={SET_THICKNESS}
        SET_HARDNESS={SET_HARDNESS}
        SPRAY_PAINT={SPRAY_PAINT}
      />
      <Canvas
        state={state}
        SPRAY_PAINT={SPRAY_PAINT}
      />
    </section>
  );
}

export default App;
