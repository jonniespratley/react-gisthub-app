import React from 'react'

import GistDetail from '../components/_gist-detail'
import Service from '../services'
import Loading from '../components/loader'
import Utils from '../utils'
const log = Utils.getLogger('pages:detail-page')

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Details',
      gist: null
    }
    log('constructor', this);
  }

  componentWillMount() {
    const {
      id
    } = this.props.match.params;

		log('componentWillMount', this);

		Service.getGist(id).then(data => this.setState({
      gist: data
    })).catch(err => {
      console.log('Error', err)
    })
  }
  render() {
    log('render', this);
    const {
      id
    } = this.props.match.params;
    if (!id) {
      return (<div>Must provide an #ID</div>)
    }
		if(!this.state.gist){
		   return (<Loading/>)
		}
		return (
      <div className='container mt-4'>
        <GistDetail gist={this.state.gist}/>
      </div>
      )
  }
}
