console.log('Loading SystemJS');
var systemJsScript = document.createElement('script');
systemJsScript.setAttribute('src','https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js"');
document.head.appendChild(systemJsScript);


var amdSystemJsScript = document.createElement('script');
amdSystemJsScript.setAttribute('src','https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js');
document.head.appendChild(amdSystemJsScript);

alert(system);
console.log('importSytemmap', System);

System.import({
  imports: {
    'single-spa': 'https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js',
    '@single-spa/welcome': 'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js',
    '@sephora/root-config': 'https://localhost:9006/sephora-root-config.js',
    react: 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',
    '@sephora/customer-mfe': 'https://localhost:8080/sephora-customer-mfe.js',
    '@sephora/order-mfe': 'https://localhost:8084/sephora-order-mfe.js',
    '@sephora/navbar-mfe': 'https://localhost:8081/sephora-navbar-mfe.js',
  },
});