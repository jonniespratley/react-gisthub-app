import React from 'react'
import GistFileInput from './_gist-file-input'

export default class GistForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
			files: [
				{filename: '', content: ''}
			]
		};

		// This binding is necessary to make `this` work in the callback
		this._handleClickAdd = this._handleClickAdd.bind(this);
		this._handleDelete = this._handleDelete.bind(this);
	}

	_handleClickAdd(e) {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
			files: this.state.files.concat({
				filename: '',
				content: 'Test'
			})
		}));
	}

	_handleDelete(e) {
		console.log('handleDelete', e, this);
		let index = this.state.files.indexOf(e);
		console.warn('Remove item', index);
	}

	render() {
		return (
			<div className="p-3 mb-4">
				<form className="gist-form" action="">
					<div className="mb-4">
						<input type="text" className="form-control" placeholder="Gist description..." />
					</div>
					<ul className="gist__files">
						{
							this.state.files.map((file, index)=>(
								<li className="gist__file">
									<GistFileInput key={index} file={file} onDelete={this._handleDelete}/>
								</li>))
						}
					</ul>
					<div className="form-actions d-flex justify-content-between mt-3">
						<button type="button"
							onClick={this._handleClickAdd}
							className="btn btn-sm btn-secondary gist__add-btn">Add File</button>
						<div>
							<button className="btn btn-secondary" type="submit">Create public gist</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
