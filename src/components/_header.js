import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

const loginUrl = 'https://github.com/login/oauth/authorize?client_id=6b070b302956750a3c37&redirect_uri&scope&state=login&allow_signup=true'

export default class Header extends Component {
  render() {
    return (
      <header>
				<nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md fixed-top">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse">
						<span className="navbar-toggler-icon"></span>
					</button>
					<Link to='/' className="navbar-brand mb-0 lead"><strong className="font-weight-bold">React</strong>Gist</Link>
					<div id="navbarContent" className="collapse navbar-collapse">
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="text" placeholder="Search..."/>
						</form>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<NavLink to='/gists' activeClassName="selected" params={{username: null}} className="nav-link">All Gists</NavLink>
							</li>

						</ul>
						<ul className='pull-right navbar-nav'>
							<li className='nav-item'>
								<a href={loginUrl} className='nav-link'>Login</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
    )
  }
}
