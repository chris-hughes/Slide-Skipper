import React from 'react'

class UniqueCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCodeInputChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label> ID (4 characters):
          <input type="text" id="name" name="presentationID" required
            minLength="4" maxLength="4" size="10"
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default UniqueCode;
