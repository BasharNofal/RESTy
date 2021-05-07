import './App.scss';
import Header from './components/header';
import Form from './components/form';
import Results from './components/results'
import Footer from './components/footer';
import React from 'react';
import History from './components/history'
import { If, Then, Else } from './components/if';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleLoading = () => {
    this.setState({loading: !this.state.loading});
  }

  handleForm = (requestObj) => {
    this.setState({ data: requestObj });
  }

  handleHistoryListClick = (method, url) => {
    let historyObj = { method, url };
    this.setState({ historyObj });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt={this.state.historyObj} handler={this.handleForm} handler2={this.handleLoading} />
          <If condition={localStorage.length}>
            <Then>
              <History prompt={JSON.parse(localStorage.getItem('requests'))} handler={this.handleHistoryListClick} />
            </Then>
          </If>
          <If condition={this.state.loading}>
            <Then>
              Loading...
            </Then>
          </If>
          <If condition={this.state.data} >
            <Then>
              <Results prompt={this.state.data} />
            </Then>
          </If>
        </main>
        <Footer />
      </>
    )
  }
}

export default App;