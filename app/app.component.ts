import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HobbyListComponent} from "./hobby-list.component";
import {HobbyDetailComponent} from "./hobby-detail.component";

@Component({
  directives: [ROUTER_DIRECTIVES],
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
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: HobbyDetailComponent
  }
])
export class AppComponent {
  title = 'Hello World';
}