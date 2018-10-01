import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Popup from 'react-popup';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import './Person/Popup.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Note Application
    this.state = {
      //   notes: NoteList1
    };
  }

  /*  componentDidMount() {
    //   Note Application
    //   add noteList2 after 10s
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...NoteList2]
      });
    }, 5000);
  } */

  componentWillUnmount() {
    console.log('unmount Root component');
    document.body.style = 'background: deeppink; text-align: center';
    document.getElementById('unmountMessage').style.color = 'white';
  }

  render() {
    // this.testES6Features();
    const LHTApp = 'LHT Demo Applications';
    const meta = [
      { name: 'title', content: LHTApp },
      { name: 'description', content: 'React Redux Demo' }
    ];

    const headerInfo = {
      title: LHTApp,
      url: 'http://localhost:3000'
    };

    return (
      <div className="App">
        <Helmet title={LHTApp} meta={meta} />

        <ErrorBoundary>
          <Header {...headerInfo} />

          <Content>
            {/* <Home /> */}
            {/* <Todo /> */}
            {/* <Timer /> */}
            {/* <Coins /> */}
            {/* <Notes notes={this.state.notes} /> */}
            {/* <ChartContainer /> */}
            {/* <Animation /> */}
            {/* <Numbers /> */}
            {/* <XSS /> */}
            {/* <Person /> */}
            {this.props.children}
          </Content>

          <Footer />
        </ErrorBoundary>

        <Popup />
      </div>
    );
  }
}

export default App;
