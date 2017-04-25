import React from 'react'
import {
  Switch,
  BrowserRouter,
  Route,
  //Link
} from 'react-router-dom'

//import GistForm from '../components/_gist-form'
//import GistsFormPage from './create'
//import Services from '../services'
import Utils from '../utils'

const log = Utils.getLogger('index-page')

import GistsListPage from './list'
import PublicGists from '../components/_public-gists'
import GistDetailPage from './detail'
//import {Jumbotron, Button} from 'react-bootstrap'

//Child Page
const Child = (props) => {
  let {
    id,
    username
  } = props.match.params;

  log('Child', props);
  let {
    match
  } = props;

  if (id === 'discover') {
    id = null;
  }
  if(username === 'gists'){
    username = null;
  }

  return (
    <div className="gists container-fluid">
			<div className="row">
				<div className="col-12">
          {id && <GistDetailPage match={match} id={id}/>}
					{!id && <GistsListPage match={match} username={match.params.username}/>}
				</div>
			</div>
		</div>
  )
}


/**
 * Index Page
 * Need to define routes
 *
 * /discover - public gists
 * /:username/gists - private gists
 * /gists/:gist-id - gist detail
 * /gists/:gist-id/history - gist history
 * /gists/:gist-id/stars - gist history
 * /gists/:gist-id/forks - gist history
 */
export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Index'
    }
    log('Index', 'constructor', this);

  }
  render() {
    log('render', this);
    return (
      <BrowserRouter id='router'>
				<div>
					<Switch>
						<Route exact path="/discover" component={PublicGists}/>
						<Route path="/:username/:id?" component={Child}/>
					</Switch>
				</div>
			</BrowserRouter>
    )
  }
}
