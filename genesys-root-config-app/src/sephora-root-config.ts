import { registerApplication, start, LifeCycles } from "single-spa";



 registerApplication({
   name: "@sephora/customer-mfe",
   app: () => System.import<LifeCycles>("@sephora/customer-mfe"),
   activeWhen: ["/"]
 });

start({
  urlRerouteOnly: true,
});
