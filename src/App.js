import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NewImpulseForm from './components/newimpulseform';
import ImpulseList from './components/impulselist';
import fire from './config/firebase';

class App extends Component {
  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
    }

  constructor(props) {
    super(props);
    this.state = { things: [] };
    this.createNewImpulse = this.createNewImpulse.bind(this);
  }
  componentWillMount() {
    let thingsRef = fire.database().ref('things').orderByKey();
    thingsRef.on('child_added', snapshot => {
      let thing = { type: snapshot.val().type, amount: snapshot.val().amount, thing: snapshot.val().thing };
      this.setState({ things: [thing].concat(this.state.things)});
    });
  }
  createNewImpulse(values) {
    fire.database().ref('things').push(values);
    fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded" },
       body: this.encode({ "form-name": "impulse", ...values })
     })
  }
  render() {
    return (
      <Container text={true} >
        <Header />
        <NewImpulseForm createNewImpulse={this.createNewImpulse} />
        <ImpulseList things={this.state.things} />
      </Container>
    );
  }
}

export default App;
