npm start

http://localhost:9000/

For static build, run npm build and deploy the dist folder to nginx

Before building, please update index.ejs for the following linr

 "@sephora-root-app/root-config": "http://localhost:9000/sephora-root-app-root-config.js",
 Use the nginix server path for the sephora-root-app-root-config.js"
