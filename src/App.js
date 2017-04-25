import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  hashHistory
} from 'react-router-dom'

import './App.css';
import '../public/css/bootstrap.min.css';

import './styles/main.css';

import Services from './services'
import utils from './utils'
const log = utils.getLogger('app');

import Header from './components/_header'
import PublicGistsPage from './pages/public-gists'
import Footer from './components/_footer'
import IndexPage from './pages/index'
import DashboardPage from './pages/dashboard'
import AboutPage from './pages/about'
//import GistsFormPage from './pages/create'
import CallbackPage from './pages/callback'
import GistsListPage from './pages/list'
import GistDetailPage from './pages/detail'



// then our route config
const routes = [
  { path: '/oauth/callback',
    component: CallbackPage
  },

  { path: '/',
    exact: true,
    component: IndexPage,
    routes: [

    ]
  },
  { path: '/about',
    exact: true,
    component: AboutPage
  },
  { path: '/dashboard',
    exact: true,
    component: DashboardPage
  },
  { path: '/discover',
    exact: true,
    component: PublicGistsPage
  },
  {
    path: '/:username/:id',
    exact: true,
    component: GistDetailPage
  },
  {
    path: '/:username',
    exact: true,
    component: GistsListPage
  }
];

const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
  )}/>
);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.services = Services;
    log('constructor', this);
    //this._githubAuthCallback();
  }

  componentWillMount(){
    log('componentWillMount', this);
  }

  componentDidMount(){
    log('componentDidMount', this);
  }

  componentWillUnmount(){
    log('componentWillUnmount', this);
  }

  render() {
    log('render', this);
    return (
      <BrowserRouter history={hashHistory}>
        <div>
          <Header loginUrl={this.services.getGithubLoginUrl()}/>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
