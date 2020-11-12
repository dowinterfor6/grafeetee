import { faArrowsAlt, faBrush, faMinus, faPalette, faSave, faSprayCan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import Options from './Options';

const Sidebar = ({
  dispatch,
  state,
  SET_COLOR,
  SET_TOOL,
  SET_THICKNESS,
  SET_HARDNESS,
  SPRAY_PAINT
}) => {
  const [minimized, setMinimized] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [color, setColor] = useState('#000');

  const [screenPosX, setScreenPosX] = useState();
  const [screenPosY, setScreenPosY] = useState();

  const sprayPaintRef = useRef();
  const colorPaletteRef = useRef();
  const moreOptionsRef = useRef();
  const sidebarRef = useRef();

  const componentRefs = [sprayPaintRef, colorPaletteRef, moreOptionsRef];

  const canvas = document.getElementById("canvas");

  const handleClickSelection = ({ classList, dataset}) => {
    dispatch({ type: SET_TOOL, payload: dataset.tool})

    componentRefs.forEach(({ current }) => {
      current.classList.remove('active');
    });
    classList.add('active');
  }

  const handleColorPickerClick = ({ currentTarget }) => {
    // TODO: Make this more robust
    setOpenOptions(false);
    setOpenColorPicker(true);
    handleClickSelection(currentTarget);
  }

  const handleOptionsClick = ({ currentTarget }) => {
    // TODO: Make this more robust
    setOpenColorPicker(false);
    setOpenOptions(true);
    handleClickSelection(currentTarget);
  }

  const handleNonColorPickerSelection = ({ currentTarget }) => {
    setOpenColorPicker(false);
    setOpenOptions(false);
    handleClickSelection(currentTarget);
  }

  const handleColorChange = (color) => {
    setColor(color);
    dispatch({ type: SET_COLOR , payload: color.hex});
  }

  const handleSave = (e) => {
    if (canvas) {
      const href = canvas.toDataURL();
      e.currentTarget.href = href;
    };
  }

  const handleDelete = () => {
    if (canvas) {
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }

  const handleMouseMove = ({ screenX, screenY, buttons }) => {
    if (buttons === 1) {
      sidebarRef.current.style.transform =
        `translate(${screenX - screenPosX}px, ${screenY - screenPosY}px`;
      console.log(sidebarRef.current.getBoundingClientRect());
    }
  }

  const handleMouseDown = (e) => {
    handleNonColorPickerSelection(e);
    setScreenPosX(e.screenX);
    setScreenPosY(e.screenY);
    const { top, left } = sidebarRef.current.getBoundingClientRect();
    sidebarRef.current.style.top = `${top}px`;
    sidebarRef.current.style.left = `${left}px`;
    sidebarRef.current.style.transform = '';
  }

  return (
    <aside className="sidebar-container" ref={sidebarRef}>
      <div className="sidebar-controls">
        <div
          className="icon drag"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseDown}
        >
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
          data-tool={SPRAY_PAINT}
        >
          <FontAwesomeIcon icon={faSprayCan} size="lg"/>
        </div>
        <div
          className="icon more-options"
          ref={moreOptionsRef}
          onClick={handleOptionsClick}
        >
          <FontAwesomeIcon icon={faBrush} size="lg" />
          <Options
            open={openOptions}
            dispatch={dispatch}
            state={state}
            SET_THICKNESS={SET_THICKNESS}
            SET_HARDNESS={SET_HARDNESS}
          />
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
        <div
          className="icon delete"
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;