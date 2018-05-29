import PropTypes from 'prop-types';
import React from 'react';
import {emojify} from 'react-emojione';

const EmojiButton = ({name, changeHandler}) => {
  return (
    <button
      className="emojiButton"
      onClick={changeHandler}
      name="emoji"
      value={emojify(`:${name}:`, {output: 'unicode'})}
    >
      {emojify(`:${name}:`)}
    </button>
  );
}

EmojiButton.propTypes = {
  name: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
}

export default EmojiButton;