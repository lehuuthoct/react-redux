import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
  constructor(props) {
    // init to access to this
    super();

    // init local state
    this.state = {
      name: 'to ...'
    };
    // bind methods
    this.updateName = this.updateName.bind(this);
  }

  updateName() {
    setInterval(() => {
      this.setState({ name: `Home` });
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

    // *** call this.updateName() here will
    // re-render component many times

    return (
      <div className="Home">
        <span className="welcome"> Welcome {this.state.name}! </span>

        <hr />

        <span className="time">{moment().format('HH:mm:ss')}</span>

        <p>
          Device:
          <strong> {isMobile ? 'mobile' : 'desktop'}</strong>
        </p>
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
