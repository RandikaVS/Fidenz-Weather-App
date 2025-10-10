FROM node:20-alpine

ARG ARG_VITE_RDB_SERVER_URL

ENV VITE_RDB_SERVER_URL=${ARG_VITE_RDB_SERVER_URL}

WORKDIR /app

RUN npm install -g npm@11.0.0

COPY package.json package-lock.json ./

RUN npm install --only=production

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 5173
CMD ["serve", "-s", "dist"]