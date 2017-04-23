import {
  Component
} from 'react'

export default class GistsRecent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Recent Gists'
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    )
  }
}
