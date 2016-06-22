
import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
  <h1>{{id}}</h1>
  <p><button [routerLink]="['List']">Go Back</button></p>
  `,
  styleUrls: ['app/hobby-detail.component.css']
})
export class HobbyDetailComponent {
  id: String;

  constructor(routeParams:RouteParams) {
    this.id = routeParams.get('id');
  }
}