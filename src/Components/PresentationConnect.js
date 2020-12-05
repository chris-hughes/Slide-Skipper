import React from 'react'
import UniqueCode from './UniqueCode'

class PresentationConnect extends React.Component {
  constructor(props) {
    super(props);
    this.handleCodeInputChange = this.handleCodeInputChange.bind(this);
    this.state = {
      uniqueCode: '',
      connected: false
    }
  }


  handleCodeInputChange = (code) => {
    console.log(code)
    if (code.length===4) {
      console.log('boo')
      this.setState({uniqueCode: code})
    }
  }


  render() {
    return (
      <div className="Presentation">
        <p>{this.props.value}</p>
        <UniqueCode onCodeInputChange={this.handleCodeInputChange} />
      </div>
    );
  }
}

export default PresentationConnect;
