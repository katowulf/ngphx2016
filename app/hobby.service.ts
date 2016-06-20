import {Injectable} from "@angular/core";
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class HobbyService {
  // FirebaseListObservable is used rather than just Observable as this tracks bi-directional updates.
  hobbies: FirebaseListObservable<any>;

  constructor(private af:AngularFire) {
    this.hobbies = af.database.list('hobbies');
  }

  // Returns a list of all hobbies for use in our list page.
  getHobbies() {
    return this.hobbies;
  }

  // Returns a single hobby for use in our detail page
  getHobby(id:string) {
    return this.af.database.object(`hobbies/${id}`);
  }
}