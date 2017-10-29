import { Component } from "@angular/core";
const remote = window.require("electron").remote;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  click() {
    remote.dialog.showOpenDialog({ title: "Hello", message: "World!" });
  }
}
