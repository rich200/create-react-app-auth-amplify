import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome!
          </p>
          <a
            className="App-link"
            href="https://rich2000.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enter the Contax Care store
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
