import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'testAngular';
  // title = "Ćwiczymy interpolację stringow";
  // dog = new Dog("Burek", 6);
  // showDog() {
  //   return `Mój pies to ${this.dog.name} i ma ${this.dog.age} lat`;
  // }
  // pi = Math.PI;
  // date = new Date();
  days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  dogs = new Array<Dog>();
  constructor() {
    this.dogs.push(new Dog('Reksio', 4), new Dog('Burek', 3), new Dog('Maksiu', 9));
  }
}
class Dog {
  constructor(public name: string, public age: number) {}
}
