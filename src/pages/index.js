import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

//import GistForm from '../components/_gist-form'
//import GistsFormPage from './create'
import Services from '../services'
import Utils from '../utils'

const log = Utils.getLogger('index-page')

import GistsListPage from './list'
import GistDetailPage from './detail'
import {Jumbotron, Button} from 'react-bootstrap'

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
      name: 'Index'
    }
    log('Index', 'constructor', this);
    let code = Utils.getQueryVariable('code');
    let state = Utils.getQueryVariable('state');
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
          <Jumbotron>
            <h2>Sign In to See Your Gists</h2>
						<p>Here we list public gists until the user is logged in.</p>

            <p>
              <Button bsStyle="default"><Link to="/jonniespratley">jonniespratley</Link></Button>
              <Button bsStyle="primary">Learn more</Button>

            </p>
          </Jumbotron>
					<div id='index-content'>
						<Route path="/:username/:id?" component={Child}/>
					</div>
				</div>
			</BrowserRouter>
    )
  }
}
