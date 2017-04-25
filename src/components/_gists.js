import React from 'react'


import GistListItem from './_gist-list-item'
//import GistDetail from './_gist-detail'

import Logger from '../logger'
const log = new Logger('gisthub').getLogger('component:gists')

export default class Gists extends React.Component {
	constructor(props) {
    super(props)
		this.defaultProps = {
			gists: null,
			type: 'public'
		};
  }

	componentWillMount() {
		const {gists} = this.props;
		if(gists && gists.length){
			log( 'componentWillMount', 'not fetching gists using props');
			this.setState({
				gists: gists
			});
		}
    log('componentWillMount', this);
  }

  render() {

		log('render', this);
    return (
      <div className='Gists'>
				{this.state && this.state.gists && this.state.gists.map(gist => (
					<GistListItem key={gist.id} gist={gist} compact/>
				))}
			</div>
    )
  }
}
