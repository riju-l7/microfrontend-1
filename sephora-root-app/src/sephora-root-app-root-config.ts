import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
console.log('intializing applicaton', routes);
console.log('location', document.location);
let params = (new URL(document.location.href)).searchParams;
let contextId = params.get("contextId");
console.log('contextId from params ', contextId);
//let contextId = null;

const fetchData = async (contextId)=>{
  if (!contextId) {
    const result = await fetch('http://localhost:8686/browseexpservice/v1/context/create')
    const payload = await result.json();
    contextId = payload?.contextId;
  }
  
  let useCookies= true;
  if(contextId) {
    useCookies= false;
    const customProps = { contextId: contextId, useCookies: false }
    applications.forEach((e)=>e.customProps = customProps)
  }

  applications.forEach(registerApplication);
  layoutEngine.activate();
  start();

}


fetchData(contextId);

