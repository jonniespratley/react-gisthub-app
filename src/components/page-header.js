import React, { Component } from 'react'

export default class PageHeader extends Component {
  constructor(props) {
    super(props)
    this.defaultProps = {
      icon: 'book',
      title: 'Page Header'
    };
  }
  render() {
    return (
      <div className="PageHeader gists__header">
        <div className="d-flex justify-content-between py-4 container">
          <div>
            <h2 className="h2 m-0"><i className={`fa fa-${this.props.icon}`}></i> {this.props.title}</h2>
          </div>
        </div>
        {this.props.children}
	  </div>
    )
  }
}
