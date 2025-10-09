/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function WeatherList() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const res = await fetch(`${process.env.REACT_APP_API_URL}/weather/all`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [isAuthenticated, getAccessTokenSilently]);

  // if (!isAuthenticated) return <div>Please login to view weather</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div style={{ padding: 20 }}>
      <h2>Weather</h2>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {data.map(item => (
          <div key={item.id} style={{ borderRadius: 8, padding: 12, boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <h3>{item.name || 'Unknown'}</h3>
            {item.error ? (
              <div style={{ color: 'red' }}>{item.error}</div>
            ) : (
              <>
                <div>{item.description}</div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{item.temp !== null ? `${item.temp}°C` : '—'}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
