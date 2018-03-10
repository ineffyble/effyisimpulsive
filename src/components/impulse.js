import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class ImpulseList extends Component {
  constructor(props) {
    super(props);

    this.icon = this.icon.bind(this);
  }
  icon() {
    if (this.props.thing.type == 'bought') {
      return 'remove';
    } else {
      return 'checkmark';
    }
  }
  render() {
    let {thing, amount} = this.props.thing;
    return (
      <List.Item>
        <List.Icon name={this.icon()} />
        <List.Content>
          <p>{thing} - {amount}</p>
        </List.Content>
      </List.Item>
    );
  }
}

export default ImpulseList;
