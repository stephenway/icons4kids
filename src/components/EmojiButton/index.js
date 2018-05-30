import PropTypes from 'prop-types';
import React from 'react';
import Tappable from 'react-tappable';
import Emojify, {emojify} from 'react-emojione';

const EmojiButton = ({name, changeHandler, onTap}) => {
  return (
    <Tappable onTap={changeHandler}>
      <button
        className="emojiButton"
        onClick={changeHandler}
        name="emoji"
        value={emojify(`:${name}:`, {output: 'unicode'})}
      >
        {(name) &&
          <Emojify
            onTouchStart={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {`:${name}:`}
          </Emojify>}
      </button>
    </Tappable>
  );
}

EmojiButton.propTypes = {
  name: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
}

export default EmojiButton;