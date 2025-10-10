import React, { useEffect } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'src/components/snackbar';
import { CLIENT_ID, DOMAIN, AUDIENCE } from "src/config-global";
import { setSession } from "src/utils/session";
import axios from "src/utils/axios";


const Auth0ProviderWithConfig = ({ children }) => {

  // Snackbar provider for notifications
  const { enqueueSnackbar } = useSnackbar()

  // Component to set Auth0 token in Axios headers
  const Auth0TokenSetter = () => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
      const setAxiosToken = async () => {
        if (isAuthenticated) {
          try {
            const accessToken = await getAccessTokenSilently();
            setSession(accessToken);
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          } catch (error) {
            enqueueSnackbar('Error setting access token', { variant: 'error' });
          }
        }
      };

      setAxiosToken();
    }, [isAuthenticated, getAccessTokenSilently]);

    return null;
  };

  const navigate = useNavigate();

  // Ensure Auth0 is properly configured
  if (!DOMAIN || !CLIENT_ID) {
    enqueueSnackbar('⚠️ Auth0 configuration!', { variant: 'error' });
    return <div>⚠️ Auth0 not configured</div>;
  }

  // Render Auth0Provider with necessary configurations
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: AUDIENCE,
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true} 
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || window.location.pathname);
      }}
    >
      <Auth0TokenSetter/> // Sets the Auth0 token in Axios headers
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithConfig;
