import React from 'react'

class SlideNavButton extends React.Component {
  render() {
    return (
      <button className="SlideNavButton">
        {this.props.value}
      </button>
    );
  }
}

export default SlideNavButton;
