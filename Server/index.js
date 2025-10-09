require('dotenv').config();
const express = require('express');
const cors = require("cors");
const weatherRouter = require('./routes/weather');


const app = express();
const PORT = process.env.PORT || 4000;

// Auth0 JWT validation middleware
// const { expressjwt: jwt } = require('express-jwt');
// const jwksRsa = require('jwks-rsa');

// const authConfig = {
//   domain: process.env.AUTH0_DOMAIN,
//   audience: process.env.AUTH0_AUDIENCE,
// };

// if (!authConfig.domain || !authConfig.audience) {
//   console.log('⚠️ WARNING: AUTH0_DOMAIN or AUTH0_AUDIENCE not set - server will still run (unprotected).');
// }

// if (authConfig.domain && authConfig.audience) {
//   app.use(
//     jwt({
//       secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
//       }),
//       audience: authConfig.audience,
//       issuer: `https://${authConfig.domain}/`,
//       algorithms: ['RS256']
//     }).unless({ path: ['/health'] })
//   );

//   // Error handler for JWT
//   app.use((err, req, res, next) => {
//     if (err.name === 'UnauthorizedError')
//       return res.status(401).json({ error: 'Invalid token' });
//     next(err);
//   });
// }

// public route

// app.get('/health', (req, res) => res.json({ ok: true }));


app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api/weather', weatherRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}...`));
