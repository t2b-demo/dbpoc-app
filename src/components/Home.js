import React, { Component } from "react";
import { Button, Jumbotron } from 'react-bootstrap';
import "./Home.css";
import MainPage from "./MainPage"


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      this.setState({ isLoading: true });
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });
  }

  renderLanding() {
    return (
      <Jumbotron bsClass="landing">
        <h1>DB POC</h1>
        <p>This is A simple turtle DB POC.</p>
        <p><Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }

  renderMainPage() {
    return (
      <MainPage />
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderMainPage() : this.renderLanding()}
      </div>
    );
  }
}