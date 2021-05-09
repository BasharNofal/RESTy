import './App.scss';
import React from 'react';
import Header from './components/header';
import Home from './components/home'
import Footer from './components/footer';
import History from './components/history';
import Help from './components/help';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/help" component={Help} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}


export default App;