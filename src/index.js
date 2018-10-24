import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./config";

//import './assets/css/bootstrap.min.css';
import './styles/index.min.css';
import './styles/tree.css';
import './index.css';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'turtleDB:*');
}

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
  });

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );