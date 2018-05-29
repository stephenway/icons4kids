import PropTypes from 'prop-types';
import React from 'react';

const RangeSetting = ({name, property, propName, changeHandler, min, max}) => {
  return (
    <div>{name}:&nbsp;
      <input
        type="range"
        min={(min) ? min : 0}
        max={(max) ? max : 100}
        value={property}
        name={(propName) ? propName : name}
        onChange={changeHandler}
      />
    </div>
  );
}

RangeSetting.propTypes = {
  name: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
}

export default RangeSetting;