# Random Quotes OOP with API

Welcome to the Random Quotes app!
This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app.

## Running the App in the development Mode

### Run server

1. Navigate tp the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder
   `cd server`
4. Install server dependecies by running npm commad:
   `npm install`
5. Run server in the development mode with hot-reload feature:
   `npm run dev`
6. Server will be running at the `http://localhost:3000`

### Run client

1. Open new terminal window in the root of the project.
2. Run client in the development mode with hot-reload:
   `npx live-server client`

## Running the App in the production Mode

### Run server

1. Navigate tp the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependecies by running npm commad:
   `npm install`
5. Run server in the development mode with hot-reload feature:
   `npm start`
6. Configure hosting server where you run application to forward all requests to the http://localhost:3000
7. Get assigned by the hosting provider URL for your backend API server for example `https://random-quotes-api.com`

### Run client

1. There is no need to builad the client as it already contains HTML, CSS and JS file.
2. In the `client/src/config.js` replace `http://localhost:3000` which URL assign to the server API in the step 7, in the previous section. For example `https://random-quotes-api.com`
3. Host all client files from the `client` subfolder on the public web server.
4. Get assigned by the hosting provider URL for your client frontend application.
   For example: `https://random-quotes-frontend.com`
5. Open in the web-browser: `https://random-quotes-frontend.com`.
