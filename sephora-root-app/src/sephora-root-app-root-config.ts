import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});
console.log('intializing applicaton', routes);
console.log('location', document.location);
let contextId = sessionStorage.getItem('contextId');

const fetchData = async (contextId) => {
  if (!contextId) {
    const result = await fetch(
      'https://csc-agent-platform-service-qa1.lower.internal.sephora.com/csc-agent-platform-service/v1/context/create'
    );
    const payload = await result.json();
    contextId = payload?.contextId;
    sessionStorage.setItem('contextId', contextId);
  }

  let useCookies = true;
  if (contextId) {
    useCookies = false;
    const customProps = {
      contextId: contextId,
      useCookies: false,
      // callback: (data) => console.log(data),
    };
    applications.forEach((e) => (e.customProps = customProps));
  }

  applications.forEach(registerApplication);
  layoutEngine.activate();
  start();
};

fetchData(contextId);
