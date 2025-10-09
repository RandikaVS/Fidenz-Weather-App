# Fidenz-Weather-App# Fidenz Weather - Full Stack Assignment

## Local setup

1. Clone Repo using this URL 
    `https://github.com/RandikaVS/Fidenz-Weather-App.git`

## .env values
- VITE_API_URL = `http://localhost:4000/api`
- VITE_AUTH0_CLIENT_ID = `BGmxAUNxdB4YAu9US8vNlWn7hNZjHP0c`
- OPENWEATHER_KEY : `3165db4e8f07bee4f2d90aab6ae05729`
- AUTH0_DOMAIN : `dev-7qqo80kikrtj62it.us.auth0.com`
- AUTH0_AUDIENCE : `https://weather-api`
- Test user: Email = `careers@fidenz.com` Password =  `Pass#fidenz`

### Backend
1. `cd Server`
2. Copy `.env` with `OPENWEATHER_KEY`, `AUTH0_DOMAIN`, `AUTH0_AUDIENCE`, `OPENWEATHER_API_ROOT`, `PORT`
3. `npm install`
4. `npm start` (runs on port 4000)

### Frontend
1. `cd Client`
2. Copy `.env` with `VITE_API_URL`, `VITE_AUTH0_DOMAIN`, `VITE_AUTH0_CLIENT_ID`, `VITE_AUTH0_AUDIENCE`
3. `npm install`
4. `npm run dev` (runs on port 5173)
5. `http://localhost:5173/`


## Notes
- Added `kanishka.d@fidenz.com`, `srimal.w@fidenz.com`, `narada.a@fidenz.com`, `amindu.l@fidenz.com` as collaborators in repo.
