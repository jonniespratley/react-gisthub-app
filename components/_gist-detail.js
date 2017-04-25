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

    let classNames = 'gist gist--detail mb-5';
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
        <ul className="nav nav-tabs mt-sm-4 mt-xs-2">
          <li className="nav-item">
            <a className="nav-link active" href="#code">
              <i className='fa fa-code mr-1'/>
              Code</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#history">
              <i className='fa fa-th mr-1'/>
              Revisons
            </a>
          </li>
        </ul>
        <div id='gistCode'>
          <div className="gist__files">
            { files.map((file) =>(<GistFile key={file.filename} file={file}/>)) }
          </div>
        </div>
        <div id='gistRevision'>

        </div>


		</div>
    )
  }
}
