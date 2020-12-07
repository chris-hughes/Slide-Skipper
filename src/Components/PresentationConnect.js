import React from 'react'
import UniqueCode from './UniqueCode'

class PresentationConnect extends React.Component {
  constructor(props) {
    super(props);
    this.handleCodeInputChange = this.handleCodeInputChange.bind(this);
    this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
    this.state = {
      uniqueCode: '',
      connected: false
    }
  }

  handleCodeInputChange = (code) => {
    if (code.length===4) {
      this.setState({uniqueCode: code})
    }
  }

  handleCodeSubmit = (event) => {
    event.preventDefault();
    if (this.state.uniqueCode==="abcd"){
      this.setState({connected: true})
    }
  }


  render() {
    return (
      <div className="Presentation">
        <p>{this.props.value}</p>
        <UniqueCode onCodeInputChange={this.handleCodeInputChange}
          onCodeSubmit={this.handleCodeSubmit}
        />
        {this.state.connected ? (
          <h4>connected!</h4>
        ) : (
          <h4>disconnected</h4>
        )}
      </div>
    );
  }
}

export default PresentationConnect;
