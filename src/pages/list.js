import React from 'react'
import Gists from '../components/_gists'
import Service from '../services'

import Utils from '../utils'
const log = Utils.getLogger('list-page')

export default class GistsListPage extends React.Component {
  getDefaultState(){
    return {
      username: null,
      gists: null
    }
  }
  getDefaultProps(){
    return {
      name: 'GistsListPage',
			username: null
    }
  }
  constructor(props) {
    super(props)
    this.state =  {
      username: null,
      gists: null
    };
		log('constructor', this);
  }

	componentWillMount() {
    log('componentWillMount', this);
    Service.getGists(this.props.username).then(data => this.setState({
      gists: data
    })).catch(err =>{
			console.log('Error', err)
		})
  }

  render() {
		const { params } = this.props.match;
		log('render', this, params);
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
