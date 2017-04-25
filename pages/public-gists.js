import React from 'react'

import PublicGists from '../components/_public-gists'

export default class PublicGistsPage extends React.Component {
  constructor(props) {
    super(props)
    this.defaultProps = {
      name: 'PublicGistsPage'
    }
		console.log('PublicGistsPage.constructor', this);
  }
  render() {
		console.log('PublicGistsPage.render', this);
    return (
      <div>
		     <h2>{this.props.name}</h2>
        <PublicGists/>
	     </div>
    )
  }
}
