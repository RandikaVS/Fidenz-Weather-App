# Fidenz-Weather-App# Fidenz Weather - Full Stack Assignment

## Overview
Simple full-stack app to display weather by city. Backend caches OpenWeatherMap responses for 5 minutes. Frontend protected by Auth0.

## Local setup

### Backend
1. `cd backend`
2. Copy `.env` with `OPENWEATHER_KEY`, `AUTH0_DOMAIN`, `AUTH0_AUDIENCE`
3. `npm install`
4. `node server.js` (runs on port 4000)

### Frontend
1. `cd frontend`
2. Copy `.env` with `REACT_APP_AUTH0_*` variables
3. `npm install`
4. `npm start` (runs on port 3000)

## Auth0 setup (already described in the assignment)
- Auth0 domain: `...`
- API Audience: `https://fidenz-weather-api`
- Test user: `careers@fidenz.com` / `Pass#fidenz`

## Notes
- Do not commit `.env`.
- Add `kanishka.d@fidenz.com`, `srimal.w@fidenz.com`, `narada.a@fidenz.com`, `amindu.l@fidenz.com` as collaborators.
