import React from 'react'
import Gists from '../components/_gists'
import Service from '../services'

import Logger from '../logger'
const log = new Logger('gisthub').getLogger('list-page')

export default class GistsListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'GistsListPage',
			username: props.username || null
    }
		log('constructor', this);
  }

	componentWillMount() {
    log('componentWillMount', this);

		Service.getGists(this.state.username).then(data => this.setState({
      gists: data
    })).catch(err =>{
			console.log('Error', err)
		})
  }

  render() {
		const {params} = this.props.match;
		log('render', this);
		if(!this.state.gists){
			return (<div>Loading...</div>)
		}
    return (
      <div>
				<Gists gists={this.state.gists}/>
		  </div>
    )
  }
}
