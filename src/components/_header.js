import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends React.Component {

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
								<NavLink to='/discover' activeClassName="selected" className="nav-link">All Gists</NavLink>
							</li>
						</ul>
						<ul className='pull-right navbar-nav'>
							<li className='nav-item'>
								<a href={this.props.loginUrl} className='nav-link'>Login</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
    )
  }
}
