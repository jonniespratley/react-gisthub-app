import React from 'react'
import Services from '../services'
import utils from '../utils'
const log = utils.getLogger('pages:callback');

export default class CallbackPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'CallbackPage',
      code: null,
      state: null,
      user: null
    };

    let code = utils.getQueryVariable('code');
    let state = utils.getQueryVariable('state');
  //  let redirect = window.location.href;
    if (code) {
      log('Get token with code', code, state);
      Services.getAccessToken(code, state).then((resp) => {
        this.setState( { user: resp })
      })
    }
		log('constructor', this);
  }
  render() {
		log('render', this);
    return (
      <div>
		     <h2>{this.state.name}</h2>
	  </div>
    )
  }
}
