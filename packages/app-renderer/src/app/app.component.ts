import { Component } from '@angular/core';
import {MyClass} from 'app-common';
const remote = window.require("electron").remote;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myInstance = new MyClass();
  click() {
    remote.dialog.showOpenDialog({ title: "Hello", message: "World!" });
  }
}
