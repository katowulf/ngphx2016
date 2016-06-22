import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {HOBBIES} from "./mock-hobbies";

@Injectable()
export class HobbyService {
  hobbies: Observable<any>;

  getHobbies() {}

  getHobby(id: String) {}
}