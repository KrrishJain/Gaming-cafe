import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-8fk132kbvvfnj6f6.uk.auth0.com"
    clientId="Il1d9QcBZRQGCbXHiq3TwJFJagyO8fG7"
    authorizationParams={{
    redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
)
