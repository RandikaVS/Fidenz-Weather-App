import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'src/components/snackbar';


const Auth0ProviderWithConfig = ({ children }) => {

  const { enqueueSnackbar } = useSnackbar()

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const navigate = useNavigate();

  if (!domain || !clientId) {
    enqueueSnackbar('⚠️ Auth0 configuration!', { variant: 'error' });
    return <div>⚠️ Auth0 not configured</div>;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience,
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true} 
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || window.location.pathname);
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithConfig;
