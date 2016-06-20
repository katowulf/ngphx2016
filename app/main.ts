import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { FIREBASE_CONFIG } from "./firebase.config";

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase(FIREBASE_CONFIG)
]);