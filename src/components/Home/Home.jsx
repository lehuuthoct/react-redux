import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
  constructor(props) {
    // init to access to this
    super();

    // init local state
    this.state = {
      name: 'Robin'
    };
    // bind methods
    this.updateName = this.updateName.bind(this);
  }

  updateName() {
    setTimeout(() => {
      this.setState({
        name: `Robin ${Math.random()}`
      });
    }, 1000);
  }

  // execute only once - when the component is already mounted
  componentDidMount() {
    // update name once - not re-render
    this.updateName();
  }

  render() {
    console.log('props', this.props);
    const { isMobile } = this.props;

    const buttonStyle = {
      backgroundColor: 'gray',
      border: '1px solid deeppink',
      color: 'white'
    };
    // *** call this.updateName() here will
    // re-render component many times

    return (
      <div className="Home">
        <h1> Welcome {this.state.name}! </h1>

        <p>
          You are using
          <strong> {isMobile ? 'mobile' : 'desktop'}</strong>
        </p>
        <button style={buttonStyle}>Show info</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.device.isMobile
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
