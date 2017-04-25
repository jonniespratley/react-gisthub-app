import React, {Component} from 'react'
import { Link } from 'react-router-dom'

//const loginUrl = 'https://github.com/login/oauth/authorize?client_id=6b070b302956750a3c37&redirect_uri&scope&state=login&allow_signup=true'

export default class Footer extends Component {
  render() {
    return (
      <footer>
				<div className='py-4 text-center text-muted d-flex justify-content-between'>
					<div>
            <small>Copywrite &copy; 2017</small>
          </div>
					<div>
            <Link to='/about'>About</Link>
            <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
            <form>
              <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
            </form>

					</div>
				</div>
			</footer>
    )
  }
}
