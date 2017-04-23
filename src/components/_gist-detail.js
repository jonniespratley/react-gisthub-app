import React, {
  Component
} from 'react'
import GistFile from './_gist-file'
import GistUser from './_gist-user'
import GistStats from './_gist-stats'

//GistDetail
export default class GistDetail extends Component {
  render() {
    let {
      gist,
      compact
    } = this.props;

    let classNames = 'gist gist--detail';
    if (compact) {
      classNames += ' gist--compact';
    }
    let files = [];
    for (let key in gist.files) {
      files.push(gist.files[key]);
    }
    return (
      <div className={classNames}>
  			<div className="d-flex justify-content-between">
  				<GistUser gist={gist}/>
  				<GistStats gist={gist}/>
  			</div>
  			<div className="gist__files">
  				{ files.map((file) =>(<GistFile key={file.filename} file={file}/>)) }
  			</div>
		</div>
    )
  }
}
