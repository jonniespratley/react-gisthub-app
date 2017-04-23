import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class GistUser extends Component {
	constructor(props){
		super(props);
		this.props = {
			gist: {}
		};
	}
	render(){
		const gist = this.props.gist;
		const file = gist.files && gist.files[Object.keys(gist.files)[0]];
		if(!gist.owner){
			gist.owner = {
				login: 'discover'
			};
		}
		return (
				<div className="gist__user d-flex ">
				<img src={gist.owner.avatar_url} alt="Gist Owner" className="rounded mr-2" />
				<div>
					<div>
						<Link to={`/${gist.owner.login}`}>{gist.owner.login}</Link> /
						<Link to={`/${gist.owner.login}/${gist.id}`}>{file.filename}</Link>
					</div>
					<div className="text-muted">
						<small>Created {gist.created_at}</small>
					</div>
					<div className="gist__description text-muted pt-1">{gist.description}</div>
				</div>
			</div>
			)
	}
}
