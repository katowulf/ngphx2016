import {Component, OnInit} from "@angular/core";
import {Hobby} from "./hobby";
import {RouteParams, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {HobbyService} from "./hobby.service";
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="detail">
      <h1>{{ (hobby | async)?.name }}</h1>
      <form #form (submit)="$event.preventDefault()">  
        <label>Name</label>
        <input [ngModel]="(hobby | async)?.name" (ngModelChange)="hobby.update({name: $event})" placeholder="name">
        
        <label>Description</label>
        <input [ngModel]="(hobby | async)?.description" (ngModelChange)="hobby.update({description: $event})" placeholder="description">
        
        <label>Count</label>
        <input type="number" [ngModel]="(hobby | async)?.count" (ngModelChange)="hobby.update({count: toNumber($event)})" placeholder="count">
        
        <label>Units</label>
        <input [ngModel]="(hobby | async)?.units" (ngModelChange)="hobby.update({units: $event})" placeholder="units">
      </form>
    </div>
    
    <!--<pre>{{hobby | async | json}}</pre>-->
    <p><button [routerLink]="['List']">Back to List</button></p>
  `,
  styleUrls: ['app/hobby-detail.component.css']
})
export class HobbyDetailComponent implements OnInit {
  // Use dependency injection to grab our hobbies service and routing data
  constructor(private hobbyService:HobbyService,
              private routeParams:RouteParams) {}

  hobby: FirebaseObjectObservable<Hobby>;

  ngOnInit() {
    // fetch the hobby id from the URL paramater
    let id = this.routeParams.get('id');
    // fetch the hobby detail from our hobbies service
    this.hobby = this.hobbyService.getHobby(id);
  }

  toNumber(val) {
    return parseInt(val);
  }
}