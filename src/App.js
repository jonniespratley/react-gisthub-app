import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  IndexRoute,
  hashHistory
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Services from './services'
import utils from './utils'
const log = utils.getLogger('app');
import Header from './components/_header'
import Footer from './components/_footer'
import Index from './pages/index'
import Dashboard from './pages/dashboard'
import About from './pages/about'
import GistsListPage from './pages/list'
import GistsFormPage from './pages/create'



export default class App extends Component {
  constructor(props){
    super(props);
    this.services = Services;
    log('constructor', this);
  }
  render() {
    log('render', this);
    return (


    <BrowserRouter history={hashHistory}>
   <div className='container-fluid'>
     <Header/>
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React Gist</h2>
         </div>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
         <ul>
         <li><Link to="/dashboard">Dashboard</Link></li>
         <li><Link to="/home">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/create-gist">Create Gist</Link></li>
       </ul>
       </div>
      <Switch>
         <Route path="/" component={Index}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/home" render={() => <div>Home</div>}/>
         <Route exact path="/create-gist" component={GistsFormPage}/>
     </Switch>
     <Footer/>
   </div>
 </BrowserRouter>
    );
  }
}
