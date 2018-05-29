import PropTypes from 'prop-types';
import React from 'react';
import { SwatchesPicker } from 'react-color';

const SwatchSetting = ({name, property, propName, changeHandler, clickHandler, closeHandler, stateToggle, stateColor}) => {
  return (
    <div>{name}:&nbsp;
    <div className='swatch' onClick={clickHandler}>
      <div className='swatchColor' style={{ background: stateColor }} />
    </div>
    { stateToggle ?
      <div className="popover">
        <div className="cover" onClick={closeHandler} />
        <SwatchesPicker
          color={property}
          name={(propName) ? propName : name}
          onChangeComplete={changeHandler}
        />
      </div>:
      null}
  </div>

  );
}

SwatchSetting.propTypes = {
  name: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
}

export default SwatchSetting;