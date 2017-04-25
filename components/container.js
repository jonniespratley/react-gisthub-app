import {
  Component
} from 'react'
export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return {
      data: null,
      fetching: false,
      error: null
    };
  }

  render() {
    if (this.props.fetching) {
      return (<div>Loading...</div>);
    }

    if (this.props.error) {
      return (
        <div className='error'>
                  {this.state.error.message}
              </div>
      );
    }

    return (<Counter {...data} />)
  }

  componentDidMount() {
    this.setState({
      fetching: true
    });

    axios.get(this.props.url).then(function(res) {
      this.setState({
        data: res.data,
        fetching: false
      });
    }).catch(function(res) {
      this.setState({
        error: res.data,
        fetching: false
      });
    });
  }
}
