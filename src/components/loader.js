import React from 'react'

export default class Loader extends React.Component {
  render(){
    return (
      <div className="Loading p-5 text-align-center">
        <div>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}
