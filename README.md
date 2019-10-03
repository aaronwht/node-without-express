### Project demonstrates WHY you should use a Node.js framework like Express.

This project defaults to using raw Node.js without Express.

[Contact me](https://www.aaronwht.com/contact-me) if you run into problems with this code.  

Instructions to run the app:  
1.) Run `npm install` to install dependencies  
2.) Fire up the client-side React app by running `npm start`  
3.) Run the Node.js app by running `node index.js`

To run the Express version of the app:  
4.) Stop previous processes (usually `Ctrl+C` to stop the Node.js runtime)  
5.) Open src/index.js and update useExpress = true  
6.) Run `node express.js`

To run with Docker(non-express server only):
7.) Stop any previous processes.
8.) Open src/index.js and update useExpress = false
9.) Install docker
10.) Run `npm run docker:build` to build docker image
11.) Run `npm run docker:run` to run image in container
12.) Visit `localhost:3000`
