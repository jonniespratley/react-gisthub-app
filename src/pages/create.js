import React from 'react'
import GistForm from '../components/_gist-form'

export default class CreateGist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'CreateGist'
    }
  }
  render() {
    return (
      <div>
				<h2>{this.state.name}</h2>
				<GistForm/>
	  </div>
    )
  }
}
