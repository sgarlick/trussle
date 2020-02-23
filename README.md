# Trussle

## Available Scripts

In the project directory, you can run:

### `npm install`


Clone this GIT Repo, Navigate to the Project Directory using PowerShell or Terminal and run "npm install".
This will install the Node Modules required to run the Application.

### `npm run dev`

Runs the app in the development mode.<br>

This will run the Front End on [http://localhost:3000](http://localhost:3000).
The backend is running on http://localhost:3001/server

### Starting Server and Front End seperately

To start the server use 'npm run server'

To start the Front End use 'npm start'

The backend receives one parameter "message" as a query string parameter
http://localhost:3001/server?message=1167

The page will reload if you make edits.

### npm test

Running NPM Test will runs the Unit Tests for:
1. Comparison to Snapshot
2. Homepage rendering
3. The Input being captured
4. The input state updating
5. Test the response value for 13 27 26 5
6. Test the response value for 432 21 19 5832 5 135 14 6561 59049 15 486 275562
7. Test the response value for 20 486 21 513 19 324 5 21924 540 135 3 8
8. Test the response value for 8 5 324 8748 295245 730 23 405 13122 12 108


