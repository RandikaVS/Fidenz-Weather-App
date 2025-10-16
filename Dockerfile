# Step 1: Build frontend
FROM node:18 AS build
WORKDIR /app
COPY client ./client
RUN cd client && npm install && npm run build

# Step 2: Setup backend
FROM node:18
WORKDIR /app
COPY server ./server
COPY --from=build /app/client/dist ./server/public
WORKDIR /app/server
RUN npm install

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]
