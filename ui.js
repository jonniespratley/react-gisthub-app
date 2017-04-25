import React from 'react'
var UI = {};


class Card extends React.Component{
  render(){
    const props = this.props;
    return (
        <div className="card">
          <div className="card-header">
            {props.headerText}
          </div>
          <div className="card-block">
            {props.children}
          </div>
        </div>
      )
  }
}

UI = {Card};

export default UI;
