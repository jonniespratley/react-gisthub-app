import React from 'react'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  render () {
    return (
      <div>
      <div>Next stars: {this.props.stars}</div>
    </div>)
  }
}
