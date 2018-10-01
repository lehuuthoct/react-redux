import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react';
import { fadeIn, zoomOutUp, flip } from 'react-animations';
import posed from 'react-pose';
import styled, {keyframes} from 'styled-components';
import './Animation.css';

// react-pose example
const flipAnimation = keyframes`${flip}`;

const Circle = posed.div({
  normal: { scale: 1 },
  hover: { scale: 2 }
});

const StyledCircle = styled(Circle)`
  height: 80px;
  width: 80px;
  color: white;
  background: blue;
  border-radius: 50%;
  line-height: 80px;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
`;

// radium example
const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  zoomOutUp: {
    animation: 'x 2s',
    animationName: Radium.keyframes(zoomOutUp, 'zoomOutUp')
  }
};

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      show: false,      
      style: {
        background: 'goldenrod',                
      },
      hover: false
    };
  }

  componentWillUpdate(newProps, newState) {
    console.log('newProps', newProps, newState);
    if (!newState.show) {
      document.getElementById('fade').style = 'opacity: 1';
    } else {
      document.getElementById('fade').style = 'opacity: 0';
    }
  }

  toggleCollapse = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleMouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  handleClick = () => {
    this.setState({
      style: {
        background: !this.state.style.background ? 'goldenrod' : '',
        animation: !this.state.style.animation ? `1s ${flipAnimation}` : '',
      }
    });
  };
  render() {
    return (
      <StyleRoot>
        <div className="Animation">
          {/* Toggle Animation */}
          <div className="toggleAnimation">
            <button onClick={this.toggleCollapse}>
              Toggle {this.state.show ? 'Collapse' : 'Expand'}
            </button>

            {/* Text */}
            <div
              id="fade"
              className={this.state.show ? 'transition show' : 'transition'}
            >
              Text will disappear
            </div>
          </div>

          {/* demo react-pose, styled lib */}
          <div className="circle">
            <StyledCircle
              pose={this.state.hover ? 'hover' : 'normal'}
              style={this.state.style}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleClick}
            >
              Click Me
            </StyledCircle>
          </div>

          {/* Radium Animation */}
          <div className="RadiumAnimation">
            <h3 style={styles.zoomOutUp}>Zoom out up Text</h3>

            <h4 style={styles.fadeIn}>Fade In Text</h4>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Animation;
