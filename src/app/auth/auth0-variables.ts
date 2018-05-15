interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'ihvIbtkXsD55gnuX5dBRdg1xZFVTkwqT',
  CLIENT_DOMAIN: 'goran-auth0-ict.eu.auth0.com',
  AUDIENCE: 'https://goran-auth0-ict.eu.auth0.com/userinfo',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid'
};
