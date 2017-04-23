import {
  Component
} from 'react'

import GistForm from '../components/_gist-form'

export default class CreateGist extends Component {
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
