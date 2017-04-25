import React, {
  Component
} from 'react'

import hljs from 'highlightjs'
import '../../public/css/github.min.css';

export default class GistFile extends Component {
	constructor(props){
		super(props);
    this.state = {
      collapsed: false
    };
    this.defaultProps = {
      file: {},
      maxFileSize: 3500
    };
	}

	_loadRawContents(url){
		return fetch(url).then(resp => resp.text().then(text => text))
	}

	componentWillMount() {
		let {file} = this.props;
		let {size} = file;
    let maxFileSize = this.defaultProps.maxFileSize;
		if(size < maxFileSize){
				this._loadRawContents(file.raw_url).then((text) => {
					file.content = text
					this.setState({file: file})
			})
		} else {
      console.warn('Not fetching file due to size', size, maxFileSize);
    }
	}

	componentDidUpdate(){
		hljs.highlightBlock(this.codeBlock);

	}
  handleClick(e){
    this.setState((prevState, state) => {
      return {
        collapsed: !prevState.collapsed
      }
    })
    console.log('handleClick', this, e.currentTarget);
  }

	render(){
		const file = this.props.file;
		return (
			<div className="card gist my-4" id={file.filename}>
  			<div className="card-header p-2 d-flex justify-content-between align-items-center"
          onClick={(e) => this.handleClick(e)}>
  				<a href={`#${file.filename}`}><i className="fa fa-file-code-o"></i> {file.filename}</a>
  				<a href={file.raw_url} className="btn  btn-outline-secondary btn-sm" target="_blank">Raw</a>
  			</div>
  			<div className="card-block gist__code p-0">
  				<pre><code className={file.language}  ref={(code) => { this.codeBlock = code; }}>{file.content}</code></pre>
  			</div>
		</div>
		)
	}
}
