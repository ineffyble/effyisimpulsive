import React, { Component } from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
        <SemanticHeader as='h1' textAlign='center'>effy is impulsive</SemanticHeader>
    );
  }
}

export default Header;
