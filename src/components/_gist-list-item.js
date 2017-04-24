import React from 'react'
import GistFile from './_gist-file'
import GistUser from './_gist-user'
import GistStats from './_gist-stats'

export default class GistListItem extends React.Component {
  render() {
    let {
      gist
    } = this.props;

    let file;
    if(gist && gist.files){

      file = gist.files[Object.keys(gist.files)[0]];
    }
    return (
      <div className='GistListItem'>
        <div className='gist gist--compact mb-3'>
          <div className="d-flex justify-content-between">
            <GistUser gist={gist}/>
            <GistStats gist={gist}/>
          </div>
          <div>
            <div className="gist__files">
              <GistFile key={file.filename} file={file}/>
            </div>
          </div>
  		</div>
      </div>
    )
  }
}
