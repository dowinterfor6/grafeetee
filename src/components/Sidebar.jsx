import { faArrowsAlt, faMinus, faPalette, faSave, faSprayCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { ChromePicker } from 'react-color';

const Sidebar = ({ dispatch, SET_COLOR, SET_TOOL, SPRAY_PAINT }) => {
  const [minimized, setMinimized] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [color, setColor] = useState('#000');

  const sprayPaintRef = useRef();
  const colorPaletteRef = useRef();

  const componentRefs = [sprayPaintRef, colorPaletteRef];

  const handleClickSelection = ({ classList, dataset}) => {
    dispatch({ type: SET_TOOL, payload: dataset.tool})

    componentRefs.forEach(({ current }) => {
      current.classList.remove('active');
    });
    classList.add('active');
  }

  const handleColorPickerClick = ({ currentTarget }) => {
    // TODO: Make this more robust
    setOpenColorPicker(true);
    handleClickSelection(currentTarget);
  }

  const handleNonColorPickerSelection = ({ currentTarget }) => {
    setOpenColorPicker(false);
    handleClickSelection(currentTarget);
  }

  const handleColorChange = (color) => {
    setColor(color);
    dispatch({ type: SET_COLOR , payload: color.hex});
  }

  const handleSave = (e) => {
    const canvas = document.getElementById("canvas");
    if (canvas) {
      const href = canvas.toDataURL();
      e.currentTarget.href = href;
    };
  }

  return (
    <aside className="sidebar-container">
      <div className="sidebar-controls">
        <div className="icon drag">
          {/* <FontAwesomeIcon icon={faArrowsAlt} size="lg"/> */}
        </div>
        <div className="icon close" onClick={() => setMinimized(!minimized)}>
          <FontAwesomeIcon icon={faMinus} size="lg"/>
        </div>
      </div>
      <div className={`sidebar-main ${minimized ? 'hide' : ''}`}>
        <div
          className="icon spraypaint"
          ref={sprayPaintRef}
          onClick={handleNonColorPickerSelection}
          data-tool={SPRAY_PAINT}
        >
          <FontAwesomeIcon icon={faSprayCan} size="lg"/>
        </div>
        <div
          className="icon color-picker-icon"
          ref={colorPaletteRef}
          onClick={handleColorPickerClick}
        >
          <FontAwesomeIcon icon={faPalette} size="lg" />
          {/* TODO: A little buggy */}
          <ChromePicker
            className={`color-picker ${openColorPicker ? 'active' : ''}`}
            color={color}
            onChange={handleColorChange}
          />
        </div>
        <a
          className="icon save"
          download="grafeetee.png"
          onClick={handleSave}
          href="/"
        >
          <FontAwesomeIcon icon={faSave} size="lg"/>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar;