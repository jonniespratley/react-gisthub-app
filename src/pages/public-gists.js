import React from 'react'

import PublicGists from '../components/_public-gists'
import Utils from '../utils'
const log = Utils.getLogger('pages:public-gists')
export default class PublicGistsPage extends React.Component {
  constructor(props) {
    super(props)
    this.defaultProps = {
      name: 'PublicGistsPage'
    }
		log('constructor', this);
  }
  render() {
		log('render', this);
    return (
      <div>
		     <h2>{this.props.name}</h2>
        <PublicGists/>
	     </div>
    )
  }
}
