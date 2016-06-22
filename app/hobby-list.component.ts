import {Component, OnInit} from "@angular/core";
import {HobbyService} from "./hobby.service";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import { FirebaseListObservable } from 'angularfire2';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Kato's Hobbies</h1>
    <div *ngFor="let hobby of hobbies | async"
        class="card"
        [routerLink]="['Detail', {id: hobby.id}]">
      <h2>{{hobby.name}}</h2>
      <div *ngIf="hobby.count">{{hobby.count | number}} {{hobby.units}}</div>
      <div *ngIf="hobby.description" class="count"><em>{{hobby.description}}</em></div>
    </div>
  `,
  styleUrls: ['app/hobby-list.component.css']
})
export class HobbyListComponent implements OnInit {
  // Use dependency injection to fetch the hobbies service
  constructor(private hobbyService:HobbyService) {}

  // For now, we use <any> because AngularFire2 doesn't have a good story for typed observables.
  // David East is working on improving this.
  hobbies: FirebaseListObservable<any>;

  ngOnInit() {
    // Asynchronously fetch the list of hobbies from our service.
    this.hobbies = this.hobbyService.getHobbies();
  }
}