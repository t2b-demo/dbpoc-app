import React from 'react';
import { Button } from 'react-bootstrap';

class WinnerButton extends React.Component {
  render() {
    return (
      <Button
        bsStyle="primary"
        onClick={this.props.handlePickWinnerClick}
      >
        Make Winning Revision
      </Button>
    );
  }
}

export default WinnerButton;
