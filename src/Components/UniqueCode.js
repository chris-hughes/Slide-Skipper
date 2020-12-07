import React from 'react'

class UniqueCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onCodeInputChange(e.target.value);
  }

  handleSubmit(e){
    this.props.onCodeSubmit(e)
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> ID (4 characters):
          <input type="text" id="name" name="presentationID" required
            minLength="4" maxLength="4" size="10"
            onChange={this.handleChange}
          />
        </label>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UniqueCode;
