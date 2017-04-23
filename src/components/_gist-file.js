import {Component} from 'react'
import Logger from '../logger'
const log = new Logger('gisthub').getLogger('gist-file')

/*global hljs*/
export default class GistFile extends Component {
	_loadRawContents(url){
		return fetch(url).then(resp => resp.text().then(text => text))
	}
	componentWillMount() {
		let file = this.props.file;
		let {size} = file;
		if(size < 500){
				this._loadRawContents(file.raw_url).then((text) => {
					file.content = text
					this.setState({file: file})
			})
		}
	}

	componentDidUpdate(){
		hljs.initHighlighting();
	}

	render(){
		const file = this.props.file;
		log('render', file);
		return (
			<div className="gist__file mt-3">
			<div className="gist__filename">
				<a href="#{file.filename}"><i className="fa fa-file-code-o"></i> {file.filename}</a>
				<a href={file.raw_url} className="btn  btn-outline-secondary btn-sm" target="_blank">Raw</a>
			</div>
			<div className="gist__code">
				<pre><code className={file.language}>{file.content}</code></pre>
			</div>
		</div>
		)
	}
}
