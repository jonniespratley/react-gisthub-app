import React from 'react'


import GistDetail from './_gist-detail'

import Logger from '../logger'
const log = new Logger('gisthub').getLogger('gists')

export default class Gists extends React.Component {
	constructor(props) {
    super(props)
		this.defaultProps = {
			gists: null
		};
  }

	componentWillMount() {
		const {gists} = this.props;
		if(gists){
			log( 'componentWillMount', 'not fetching gists using props', gists);
			this.setState({
				gists: gists
			})
		}
    log('componentWillMount', this);
  }

  render() {
		const {gists} = this.state;
		log('render', gists);
    return (
      <div>
				{gists && gists.map(gist => (
					<GistDetail key={gist.id} gist={gist} compact/>
				))}
			</div>
    )
  }
}
