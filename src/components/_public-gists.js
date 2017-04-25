import React from 'react'
import GistsList from './_gists'
import Services from '../services'
import Utils from '../utils'
const log = Utils.getLogger('component:public-gists')
export default class PublicGists extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			gists: null
		};
	}
	componentWillMount() {
		log('componentWillMount', this);
		Services.getGists().then((resp) => {

			this.setState({gists: resp});
		});
  }

	render(){
		return (
			<div>
				<section className="gists__container">
					<header className="gists__header">
						<div className="container">
							<div className="d-flex justify-content-between pt-4 pb-3">
								<div>
									<h2 className="m-0"><i className="fa fa-file-code-o"></i> Discover Gists</h2>
								</div>
								<div>
									<div className="dropdown">
										<button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Sort: Recently created
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<a className="dropdown-item" href="#">Recently created</a>
											<a className="dropdown-item" href="#">Least recently created</a>
											<a className="dropdown-item" href="#">Recently updated</a>
											<a className="dropdown-item" href="#">Least recently updated</a>
										</div>
									</div>
								</div>
							</div>
							<ul className="nav nav-tabs gist__tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#allgists" role="tab">
										<i className="fa fa-file-code-o mr-1"></i> All Gists
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#forked" role="tab"><i className="fa fa-code-fork mr-1"></i> Forked</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#starred" role="tab"><i className="fa fa-star mr-1"></i> Starred</a>
								</li>
							</ul>
						</div>
					</header>
					<div className="container mt-5">
						<div className="tab-content">
							<div className="tab-pane active" id="allgists" role="tabpanel">
								{this.state.gists && <GistsList gists={this.state.gists}/>}

							</div>
							<div className="tab-pane" id="forked" role="tabpanel">List forked gists here</div>
							<div className="tab-pane" id="starred" role="tabpanel">Stared</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
