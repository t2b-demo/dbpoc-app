import React, { Component } from "react";
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
      <div className="Home">
        <div className="landing">
          <h1>DB POC</h1>
          <p>A simple turtle DB POC</p>
        </div>
      </div>
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