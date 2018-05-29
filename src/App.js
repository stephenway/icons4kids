import React, { Component } from 'react';
import './App.css';
import EmojiButton from './components/EmojiButton';
import RangeSetting from './components/RangeSetting';
import SwatchSetting from './components/SwatchSetting';

class App extends Component {
  constructor(props) {
    super(props);
    this.iconResult = React.createRef();
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.handleShadeClick = this.handleShadeClick.bind(this);
    this.handleShadeClose = this.handleShadeClose.bind(this);
    this.handleChangeLineComplete = this.handleChangeLineComplete.bind(this);
    this.handleLineClick = this.handleLineClick.bind(this);
    this.handleLineClose = this.handleLineClose.bind(this);
    this.resetBuilder = this.resetBuilder.bind(this);
  }

  get initialState() {
    return {
      backgroundColor: 'blue',
      backgroundColorToggle: false,
      borderColor: 'lightBlue',
      borderColorToggle: false,
      borderWidth: 10,
      borderStyle: 'solid',
      borderRadius: '15',
      rotate: -5,
      size: 200,
      log: true,
      text: '',
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    (this.state.log) && console.log(`${[event.target.name]} => ${event.target.value}`);
  }
  
  handleChangeComplete(color) {
    this.setState({ backgroundColor: color.hex });
    (this.state.log) && console.log(`backgroundColor => ${this.state.backgroundColor}`);
  }

  handleShadeClick(event) {
    this.setState( prevState => ({ backgroundColorToggle: !prevState.backgroundColorToggle }));
    (this.state.log) && console.log(`backgroundColorToggle => ${this.state.backgroundColorToggle}`);
  }

  handleShadeClose(event) {
    this.setState({ backgroundColorToggle: false });
    (this.state.log) && console.log(`backgroundColorToggle => ${this.state.backgroundColorToggle}`);
  }

  handleChangeLineComplete(color) {
    this.setState({ borderColor: color.hex });
    (this.state.log) && console.log(`borderColor => ${this.state.borderColor}`);
  }

  handleLineClick(event) {
    this.setState( prevState => ({ borderColorToggle: !prevState.borderColorToggle }));
    (this.state.log) && console.log(`borderColorToggle => ${this.state.borderColorToggle}`);
  }

  handleLineClose(event) {
    this.setState({ borderColorToggle: false });
    (this.state.log) && console.log(`borderColorToggle => ${this.state.borderColorToggle}`);
  }

  resetBuilder() {
    this.setState(this.initialState);
  }

  render() {
    const {
      backgroundColor,
      borderColor,
      borderWidth,
      borderStyle,
      borderRadius,
      rotate,
      size,
      text,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">icons(4).kids;</h1>
        </header>
        <main>
          <div
            className="circle"
            ref={this.iconResult}
            data-text={text}
            style={{
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: `${borderWidth}px`,
              borderStyle: borderStyle,
              borderRadius: `${borderRadius}%`,
              height: `${size}px`,
              width: `${size}px`,
              padding: `${this.state.size / 4}px`,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            {this.state.emoji &&
              <span style={{fontSize: `${this.state.size / 1.4}px`}}>
                {this.state.emoji}
              </span>
            }
          </div>
        </main>

        <aside>
          <p className="App-intro">
            Play with the controls to make an icon!
          </p>

          <div>
            <EmojiButton name='wink' changeHandler={this.handleChange} />
            <EmojiButton name='turtle' changeHandler={this.handleChange} />
            <EmojiButton name='monkey' changeHandler={this.handleChange} />
            <EmojiButton name='pizza' changeHandler={this.handleChange} />
            <EmojiButton name='ghost' changeHandler={this.handleChange} />
          </div>
          <div>
            <EmojiButton name='horse' changeHandler={this.handleChange} />
            <EmojiButton name='frog' changeHandler={this.handleChange} />
            <EmojiButton name='cat' changeHandler={this.handleChange} />
            <EmojiButton name='unicorn' changeHandler={this.handleChange} />
            <EmojiButton name='dog' changeHandler={this.handleChange} />
          </div>
          <div>
            <EmojiButton name='octopus' changeHandler={this.handleChange} />
            <EmojiButton name='pig' changeHandler={this.handleChange} />
            <EmojiButton name='alien' changeHandler={this.handleChange} />
            <EmojiButton name='bee' changeHandler={this.handleChange} />
            <EmojiButton name='bear' changeHandler={this.handleChange} />
          </div>

          <div>title:&nbsp;
            <input
              type="text"
              min="0"
              max="20"
              value={text}
              name='text'
              onChange={this.handleChange}
            />
          </div>

          <SwatchSetting
            name="color shade"
            property={backgroundColor}
            propName="backgroundColor"
            changeHandler={this.handleChangeComplete}
            clickHandler={this.handleShadeClick}
            closeHandler={this.handleShadeClose}
            stateToggle={this.state.backgroundColorToggle}
            stateColor={this.state.backgroundColor}
          />

          <SwatchSetting
            name="border line"
            property={borderColor}
            propName="borderColor"
            changeHandler={this.handleChangeComplete}
            clickHandler={this.handleLineClick}
            closeHandler={this.handleLineClose}
            stateToggle={this.state.borderColorToggle}
            stateColor={this.state.borderColor}
          />

          <RangeSetting
            name='line thickness'
            property={borderWidth}
            propName='borderWidth'
            max="20"
            changeHandler={this.handleChange}
          />

          <RangeSetting
            name='roundness'
            property={borderRadius}
            propName='borderRadius'
            max="50"
            changeHandler={this.handleChange}
          />

          <RangeSetting
            name='size'
            property={size}
            min="25"
            max="350"
            changeHandler={this.handleChange}
          />

          <RangeSetting
            name='rotate'
            property={rotate}
            min="-20"
            max="20"
            changeHandler={this.handleChange}
          />

          <div><button onClick={this.resetBuilder}>Reset</button></div>
        </aside>
      </div>
    );
  }
}

export default App;
