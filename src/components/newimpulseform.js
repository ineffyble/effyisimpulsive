import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class NewImpulseForm extends Component {
  state = { thing: '', amount: '' }

  constructor(props) {
    super(props);

    this.didBuy = this.didBuy.bind(this);
    this.didntBuy = this.didntBuy.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  didBuy() {
    this.props.createNewImpulse({type: 'bought', ...this.state});
    this.setState( { thing: '', amount: '' });
  }

  didntBuy() {
    this.props.createNewImpulse({type: 'didntbuy', ...this.state});
    this.setState( { thing: '', amount: '' });
  }

  render() {
    const { thing, amount } = this.state;

    return (
        <Form widths='equal'>
          <Form.Group>
            <Form.Input fluid name='thing' label='Thing' placeholder='Thing' width={10} value={thing} onChange={this.handleChange} />
            <Form.Input fluid name='amount' label='Amount' placeholder='Amount' width={2} value={amount} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group align='center'>
            <Form.Button name='bought' onClick={this.didBuy}>I bought this</Form.Button>
            <Form.Button name='didntbuy' onClick={this.didntBuy}>I wanted to buy this but didn't</Form.Button>
          </Form.Group>
        </Form>
    );
  }
}

export default NewImpulseForm;
