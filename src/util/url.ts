export const putIoAuthorizationUrl = `https://api.put.io/v2/oauth2/authenticate` +
  `?client_id=${process.env.REACT_APP_PUTIO_CLIENT_ID}` +
  `&response_type=code&redirect_uri=${encodeURIComponent(location.origin)}`;
