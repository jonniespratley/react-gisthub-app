import {
  Component
} from 'react'


export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'About'
    }
		console.log('About.constructor', this);
  }
  render() {
		console.log('About.render', this);
    return (
      <div>
		<h2>{this.state.name}</h2>
	  </div>
    )
  }
}
