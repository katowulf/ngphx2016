import {Component, OnInit} from "@angular/core";
import {Hobby} from "./hobby";
import {RouteParams, Router} from "@angular/router-deprecated";
import {HobbyService} from "./hobby.service";
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
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
    <p><button (click)="goBack()">Back</button></p>
  `,
  styleUrls: ['app/hobby-detail.component.css']
})
export class HobbyDetailComponent implements OnInit {
  // Use dependency injection to grab our hobbies service and routing data
  constructor(private hobbyService:HobbyService,
              private routeParams:RouteParams,
              private router:Router) {}

  hobby: FirebaseObjectObservable<Hobby>;

  ngOnInit() {
    // fetch the hobby id from the URL paramater
    let id = this.routeParams.get('id');
    // fetch the hobby detail from our hobbies service
    this.hobby = this.hobbyService.getHobby(id);
  }

  goBack() {
    // A rudimentary way to get back to the list of hobbies.
    // We could use window.history.back(), but then our history of details viewed would be lost.
    this.router.navigate(['List']);
  }

  toNumber(val) {
    return parseInt(val);
  }
}