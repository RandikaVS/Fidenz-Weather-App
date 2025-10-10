FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

ENV NODE_ENV=production
ENV PORT=4000
ENV OPENWEATHER_KEY=3165db4e8f07bee4f2d90aab6ae05729
ENV AUTH0_DOMAIN=dev-7qqo80kikrtj62it.us.auth0.com
ENV AUTH0_AUDIENCE=https://weather-api
ENV OPENWEATHER_API_ROOT= https://api.openweathermap.org/data/2.5/weather

CMD ["nodemon", "index.js"]
