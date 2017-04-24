import React, {
  Component
} from 'react'
import hljs from 'highlightjs'

export default class GistFile extends Component {
	constructor(props){
		super(props);
    this.defaultProps = {
      file: {}
    };
	}

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
		hljs.highlightBlock(this.codeBlock);

	}

	render(){
		const file = this.props.file;
		return (
			<div className="gist__file mt-3" id={file.filename}>
			<div className="gist__filename">
				<a href={`#${file.filename}`}><i className="fa fa-file-code-o"></i> {file.filename}</a>
				<a href={file.raw_url} className="btn  btn-outline-secondary btn-sm" target="_blank">Raw</a>
			</div>
			<div className="gist__code">
				<pre><code className={file.language}  ref={(code) => { this.codeBlock = code; }}>{file.content}</code></pre>
			</div>
		</div>
		)
	}
}
