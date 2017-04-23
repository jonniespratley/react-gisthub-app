import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  hashHistory
} from 'react-router-dom'


//Images
//import logo from './logo.svg';

//Styles
import './App.css';
import './styles/main.css';
import './styles/github.min.css';
import './styles/bootstrap.min.css';






import Services from './services'
import utils from './utils'
const log = utils.getLogger('app');

import Header from './components/_header'
import Footer from './components/_footer'
import Index from './pages/index'
import Dashboard from './pages/dashboard'
import About from './pages/about'
//import GistsListPage from './pages/list'
import GistsFormPage from './pages/create'



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.services = Services;
    log('constructor', this);
  }
  render() {
    log('render', this);
    return (
      <BrowserRouter history={hashHistory}>
         <div>
           <Header/>
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
