import {Injectable} from "@angular/core";
import {HOBBIES} from "./mock-hobbies";
import {Hobby} from "./hobby";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HobbyService {
  hobbies: Observable<Hobby> = Observable.create(observer => {
    observer.next(HOBBIES);
  });

  // Returns a list of all hobbies for use in our list page.
  // For now, this is just mock data fetched from mock-hobbies.ts.
  // Later we'll hook this up to Firebase.
  // We use a promise because our data service will be asynchronous
  // later, so this saves some refactoring.
  getHobbies():Observable<Hobby> {
    return this.hobbies;
  }

  // Returns a single hobby for use in our detail page
  // For now, we just use mock data and find the record in the array
  // Later, when we hook up Firebase, we'll do something more sophisticated.
  getHobby(id:string) {
    return HOBBIES.filter((hobby:Hobby) => hobby.id === id)[0];
  }
}