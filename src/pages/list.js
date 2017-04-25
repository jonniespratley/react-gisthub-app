import React from 'react'

import Loading from '../components/loader'
import Gists from '../components/_gists'
import Service from '../services'


import Utils from '../utils'
const log = Utils.getLogger('pages:list-page')


const Icon = (props) => (
  <i className={`fa fa-${props.icon}`}></i>
);


export default class GistsListPage extends React.Component {

  constructor(props) {
    super(props)
    this.state =  {
      username:  props.username || null,
      gists: props.gists || null
    };
		log('constructor', this);
  }

	componentWillMount() {
    const {username} = this.props.match.params;
    log('componentWillMount', this);
    Service.getGists(username).then(data => this.setState({
      gists: data
    })).catch(err =>{
			log('Error', err)
		})
  }

  render() {
	//	const { params } = this.props.match;
		const { gists } = this.state;
		log('render', this, gists);
		if(!gists){
			return (<Loading/>)
		}
    return (
      <div>



        <div className='gists__header'>
          <div className="d-flex justify-content-between py-3 container">
  					<div>
  						<h2 className="h2"><i className="fa fa-book"></i> Your Gists</h2>
  					</div>
  				</div>


          <div className='gists__tab-container container'>
            <ul className="nav nav-tabs" role="tablist">
          		<li className="nav-item">
          			<a className="nav-link active" data-toggle="tab" href="#allgists" role="tab">
          				All Gists
          				<span className="badge badge-default ml-1">{gists.length}</span>
          			</a>
          		</li>
          		<li className="nav-item">
          			<a className="nav-link" data-toggle="tab" href="#forked" role="tab">
                  <Icon icon='code-fork'/>
                Forked</a>
          		</li>
          		<li className="nav-item">
          			<a className="nav-link" data-toggle="tab" href="#starred" role="tab">
                  <Icon icon='star'/>
                Starred</a>
          		</li>
          	</ul>
          </div>
        </div>
        <div className='container'>
          <div className="tab-content">
            <div className="tab-pane active p-3" id="allgists" role="tabpanel">
              {gists && <Gists gists={gists}/>}
            </div>
            <div className="tab-pane" id="forked" role="tabpanel">
              List forked gists here
            </div>
            <div className="tab-pane" id="starred" role="tabpanel">
              test
            </div>
          </div>
        </div>


		  </div>
    )
  }
}
