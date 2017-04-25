import React from 'react'
import {
  Switch,
  BrowserRouter,
  Route,
  //Link
} from 'react-router-dom'

//import GistForm from '../components/_gist-form'
//import GistsFormPage from './create'
import Services from '../services'
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

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Index',
      code: null,
      state: null
    }
    log('Index', 'constructor', this);
    let code =/* Utils.getQueryVariable('code')*/;
    let state = /*Utils.getQueryVariable('state')*/;
    if (code) {
      log('Get token with code', code, state);
      Services.getAccessToken(code, state).then((resp) => {
        this.setState({
          user: resp
        })
      })
    }
  }
  render() {
    log('render', this);
    return (
      <BrowserRouter>
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
