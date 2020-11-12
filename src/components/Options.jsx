import React from 'react';

const Options = ({
  open,
  dispatch,
  state,
  SET_THICKNESS,
  SET_HARDNESS
}) => {
  const [minThickness, maxThickness] = [1, 500];
  const [minHardness, maxHardness] = [1, 100];

  const handleThicknessChange = ({ currentTarget }) => {
    if (currentTarget.value < minThickness || currentTarget.value > maxThickness) {
      return;
    }
    dispatch({ type: SET_THICKNESS, payload: parseInt(currentTarget.value)});
  }

  const handleHardnessChange = ({ currentTarget }) => {
    if (currentTarget.value < minHardness || currentTarget.value > maxHardness) {
      return;
    }
    dispatch({ type: SET_HARDNESS, payload: parseInt(currentTarget.value)});
  }

  return (
    <div className={`options-container ${open ? 'open' : ''}`}>
      <label>
        <div className="label-title">
          Thickness:
          <input type="number" value={state.thickness} onChange={handleThicknessChange}/>
        </div>
        <input
          className="slider-input"
          type="range"
          min={minThickness}
          max={maxThickness}
          value={state.thickness}
          onChange={handleThicknessChange}
        />
      </label>
      {/* <label>
        <div className="label-title">
          Hardness:
          <input type="number" value={state.hardness} onChange={handleHardnessChange}/>
        </div>
        <input
          className="slider-input"
          type="range"
          min={minHardness}
          max={maxHardness}
          value={state.hardness}
          onChange={handleHardnessChange}
        />
      </label> */}
    </div>
  )
}

export default Options;
