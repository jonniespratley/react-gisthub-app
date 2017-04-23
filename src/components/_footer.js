import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

const loginUrl = 'https://github.com/login/oauth/authorize?client_id=6b070b302956750a3c37&redirect_uri&scope&state=login&allow_signup=true'

export default class Footer extends Component {
  render() {
    return (
      <footer>
				<div className='p-2 text-center text-muted d-flex align-content-space-between'>
					<div><small>Copywrite &copy; 2017</small></div>
					<div></div>
				</div>
			</footer>
    )
  }
}
