import {Component} from "@angular/core";

// uses the 2.x router as the 3.0 alpha was not functional as of this demo
// (it was released 2 days before and still had some version bugs)
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

// import our components used in routing
import {HobbyListComponent} from "./hobby-list.component";
import {HobbyDetailComponent} from "./hobby-detail.component";
import {HobbyService} from "./hobby.service";

@Component({
  directives: [ROUTER_DIRECTIVES],
  // import our HobbyService here so it's available in all components
  providers: [ROUTER_PROVIDERS, HobbyService],
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {
    path: '/list',
    name: 'List',
    component: HobbyListComponent,
    useAsDefault: true // this is the default page
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: HobbyDetailComponent
  }
])
export class AppComponent { } // this class is now purely for routing and bootstrap