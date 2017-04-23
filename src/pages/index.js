import {
  Component
} from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import GistForm from '../components/_gist-form'
import Services from '../services'
import Utils from '../utils'

const log = Utils.getLogger('index-page')

import GistsListPage from './list'
import GistDetailPage from './detail'
import GistsFormPage from './create'

//Child Page
const Child = (props) => {
  let {
    id
  } = props.match.params;

  log('Child', props);
  let {
    match
  } = props;
  if (id === 'discover') {
    id = null
  }

  return (
    <div className="gists">
			<div className="row">
				<div className="col-6">
					<h3>Username: {match.params.username}</h3>
					<GistsListPage match={match} username={match.params.username}/>
				</div>
				<div className="col-6">
					<h3>ID: {match.params.id}</h3>
					{id && <GistDetailPage match={match} id={id}/>}
				</div>
			</div>
		</div>
  )
}

export default class Index extends Component {
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
					<div className="hero">
						<h3>Sign In to See Your Gists</h3>
						<p>Here we list public gists until the user is logged in.</p>
						<ul>
							<li><Link to="/jonniespratley">jonniespratley</Link></li>
						</ul>
					</div>
					<div id='index-content'>
						<Route path="/:username/:id?" component={Child}/>
					</div>
				</div>
			</BrowserRouter>
    )
  }
}
