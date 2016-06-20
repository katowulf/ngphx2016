import {Component, OnInit} from "@angular/core";
import {HobbyService} from "./hobby.service";
import {Hobby} from "./hobby";
import {Router} from "@angular/router-deprecated";

@Component({
  template: `
    <h1>Kato's Hobbies</h1>
    <div *ngFor="let hobby of hobbies"
        class="card"
        (click)="showDetail(hobby.id)">
      <h2>{{hobby.name}}</h2>
      <div *ngIf="hobby.count">{{hobby.count | number}} {{hobby.units}}</div>
      <div *ngIf="hobby.description" class="count"><em>{{hobby.description}}</em></div>
    </div>
  `,
  styleUrls: ['app/hobby-list.component.css']
})
export class HobbyListComponent implements OnInit {
  // Use dependency injection to fetch the hobbies service
  constructor(private hobbyService:HobbyService, private router:Router) {}

  // Declare a default value until our hobbies get fetched. Some of the early Angular betas
  // have trouble with empty values here.
  hobbies: Hobby[] = [];

  ngOnInit() {
    // Asynchronously fetch the list of hobbies from our service.
    this.hobbyService.getHobbies().then(hobbies => this.hobbies = hobbies);
  }

  showDetail(id:string) {
    // Navigate to the detail view by adding it into the URL and browsing history.
    this.router.navigate(['Detail', {id: id}]);
  }
}