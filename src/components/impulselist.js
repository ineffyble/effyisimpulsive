import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import Impulse from './impulse';

class ImpulseList extends Component {
  render() {
    console.log(this.props);
    return (
      <List>
        {this.props.things.map( thing => <Impulse thing={thing} />)}
      </List>
    );
  }
}

export default ImpulseList;
