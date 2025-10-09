import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div style={{ padding: 20 }}>
      <h1>Fidenz Weather</h1>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      ) : (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
      )}
    </div>
  );
}

export default Home
