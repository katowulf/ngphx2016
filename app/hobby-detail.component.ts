
import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
  <h1>Detail</h1>
  <p><button [routerLink]="['List']">Go Back</button></p>
  `
})
export class HobbyDetailComponent {

}