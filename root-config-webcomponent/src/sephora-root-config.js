import { registerApplication, start, unregisterApplication } from "single-spa";

//import "script-loader!../../node_modules/systemjs/dist/system.min.js"

//import { System } from "systemjs";



/*var System = '';
import('systemjs/dist/system.min.js').then((SystemJS) => {
  // Your code using SystemJS goes here
  System = SystemJS;
}).catch((err) => {
  console.error(err);
});*/


// registerApplication({
//   name: "@sephora/navbar",
//   app: () => System.import("@sephora/navbar"),
//   activeWhen: ["/"]
// });

 
//start({
//  urlRerouteOnly: true,
//});

console.log('system', System);



class SingleSpaRoot extends HTMLElement {

  constructor() {
    super();

    // Create a nav eement
    const navElement = document.createElement('nav');
    // Append the child element to the root element
    this.appendChild(navElement);

    // Create a nav eement
    const contentElement = document.createElement('content');
    // Append the child element to the root element
    this.appendChild(contentElement);
    console.log('Loading importmap.json');
    debugger;
   /* System.addImportMap({
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
      "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
      "@sephora/root-config": "https://local.sephora.com:9006/sephora-root-config.js",
      "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
      "@sephora/customer-mfe": "https://local.sephora.com:8080/sephora-customer-mfe.js",
      "@sephora/order-mfe": "https://local.sephora.com:8084/sephora-order-mfe.js",
      "@sephora/navbar-mfe": "https://local.sephora.com:8081/sephora-navbar-mfe.js"
        
      }).then(() => {
      console.log('Loaded importmap.json');
     System.import('@sephora/root-config');
      console.log('Installed importmap.json');
    });*/
    //System.config({ importmap: 'https://local.sephora.com:9006/importmap.json' }).then(() => {
      //console.log('Loaded importmap.json');
      //System.import('@sephora/root-config');
      //console.log('Installed importmap.json');
    //});
  }

  connectedCallback() {
    // Register the microfrontend applications

    

    registerApplication({
      name: '@sephora/navbar-mfe',
      app: () => System.import('@sephora/navbar-mfe'),
      activeWhen: ['/']
    });
    
    registerApplication({
      name: '@sephora/customer-mfe',
      app: () => System.import('@sephora/customer-mfe'),
      activeWhen: ['/customer']
    });

    registerApplication({
      name: '@sephora/order-mfe',
      app: () => System.import('@sephora/order-mfe'),
      activeWhen: ['/order']
    });

    // Initialize single-spa
    debugger;
    start();
  }

  disconnectedCallback() {
    // Unregister the microfrontend applications
    unregisterApplication('@sephora/navbar-mfe');
    unregisterApplication('@sephora/customer-mfe');
    unregisterApplication('@sephora/order-mfe');
  }
}

customElements.define('single-spa-root', SingleSpaRoot);