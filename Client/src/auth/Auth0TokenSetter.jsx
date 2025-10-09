import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";
import { setSession } from "src/utils/session";
import { useSnackbar } from 'src/components/snackbar';

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

export default Auth0TokenSetter;
