import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import {isAuthenticated} from '@auth0/auth0-react'
ReactDOM.render(
  <Auth0Provider
    domain="dev-81ai49ky.us.auth0.com"
    clientId="tKKS21LPYIyTp9DwWUgJ38WyGrNoom2F"
    redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
document.getElementById('root')
);

