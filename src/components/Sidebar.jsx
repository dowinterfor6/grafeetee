import { faArrowsAlt, faMinus, faPalette, faSave, faSprayCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { ChromePicker } from 'react-color';

const Sidebar = () => {
  const [minimized, setMinimized] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [color, setColor] = useState('#000');

  const sprayPaintRef = useRef();
  const colorPaletteRef = useRef();

  const componentRefs = [sprayPaintRef, colorPaletteRef];

  const handleClickSelection = ({ classList }) => {
    componentRefs.forEach(({ current }) => {
      current.classList.remove('active');
    });
    classList.add('active');
    // console.log(e);
    // TODO: go through all refs turn off, then turn on active
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

  return (
    <aside className="sidebar-container">
      <div className="sidebar-controls">
        <div className="icon drag">
          <FontAwesomeIcon icon={faArrowsAlt} size="lg"/>
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
            onChange={(color) => setColor(color)}
          />
        </div>
        <div className="icon save">
          <FontAwesomeIcon icon={faSave} size="lg"/>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;