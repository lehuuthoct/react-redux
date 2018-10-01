import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react';
import { fadeIn, zoomOutUp } from 'react-animations';
import './Animation.css';

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
      show: false
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
