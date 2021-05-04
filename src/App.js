
import './App.scss';
import Header from './Header.js';
import Form from './Form.js';
import Data from './Data.js'
import Footer from './Footer.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleForm = (result) => {
    // console.log(result);
    this.setState({ data: result });
    // console.log(this.state.data);
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt="Go" handler={this.handleForm} />
          <Data prompt={this.state.data} />
        </main>
        <Footer />
      </>
    )
  }
}

export default App;