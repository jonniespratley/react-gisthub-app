import React from 'react'

export default class GistFileInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props || {
			file: {
				filename: 'default.js',
				content: 'var name = "test";'
			}
		};
		console.log('GistFileInput', props);
		this._handleClickDelete = this._handleClickDelete.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}
	_handleClickDelete(e) {
		console.log('_handleClickDelete', e, this.props.key);
		if (this.props.onDelete) {
			this.props.onDelete(this.state.file);
		}
	}
	_handleChange(e) {
		this.setState({
			file: {
				content: e
			}
		})
		console.log('_handleChange', e);
	}
	render() {
		const file = this.props.file;
		console.log( 'GistFileInput', 'render', this);
		return (
			<div>
				<div className="gist__file-toolbar d-flex p-2 justify-content-between">
							<div>
								<div className="input-group">
									<input type="text"
											className="form-control"
											defaultValue={file.filename}
											placeholder="Filename including extension..." />
									<span className="input-group-btn">
										<button className="btn btn-outline-danger btn-delete-gist-file"
												type="button"
												title="Delete File"
												onClick={(e) => this._handleClickDelete(e)}>
											<i className="fa fa-trash-o"></i>
										</button>
									</span>
								</div>
							</div>

							<div className="hidden-sm-down">
								<div className="gist__file-actions d-flex">
									<select className="form-control select-sm js-code-indent-mode">
									<optgroup label="Indent mode">
										<option value="space">Spaces</option>
										<option value="tab">Tabs</option>
									</optgroup>
								</select>

									<select className="form-control select-sm js-code-indent-width">
										<optgroup label="Indent size">
											<option value="2">2</option>
											<option value="4">4</option>
											<option value="8">8</option>
										</optgroup>
									</select>

									<select className="form-control select-sm js-code-wrap-mode">
										<optgroup label="Line wrap mode">
											<option value="off">No wrap</option>
											<option value="on">Soft wrap</option>
										</optgroup>
									</select>
								</div>
							</div>
						</div>
						<div className="gist__file-code">
							<textarea className="form-control" onChange={this._handleChange}>{file.content}</textarea>
						</div>
			</div>
		)
	}
}
