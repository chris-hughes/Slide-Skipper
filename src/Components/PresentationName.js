import React from 'react'

class PresentationName extends React.Component {
  render() {
    return (
      <div className="Presentation">
        <p> {this.props.value} </p> 
      </div>
    );
  }
}

export default PresentationName;
