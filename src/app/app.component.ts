import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // title = "testAngular";
  // title = "Ćwiczymy interpolację stringow";
  // dog = new Dog("Burek", 6);
  // showDog() {
  //   return `Mój pies to ${this.dog.name} i ma ${this.dog.age} lat`;
  // }
  // pi = Math.PI;
  // date = new Date();
  // days = [
  //   "Poniedziałek",
  //   "Wtorek",
  //   "Środa",
  //   "Czwartek",
  //   "Piątek",
  //   "Sobota",
  //   "Niedziela"
  // ];
  // dogs = new Array<Dog>();
  // constructor() {
  //   this.dogs.push(
  //     new Dog("Reksio", 4),
  //     new Dog("Burek", 3),
  //     new Dog("Maksiu", 9),
  //     new Dog("Łapek", 6),
  //     new Dog("Pluto", 1)
  //   );
  // }
  // colorClass = "color";
  // logoUrl = "";
  // maxLength = 5;
  // inputText = "Tekst";
  // isDisable = "true";

  // onFocus() {
  //   this.colorClass = "color2"
  // }
  // onClick(event){
  //   console.log(event);
  // }
  // onMouseMove(event) {
  //   console.log("x: " + event.clientX);
  // })
  // onPaste() {
  //   this.inputText = "Nie wklejaj, wpisz leniu!";
  // }
  // change() {
  //   this.isDisable = false;
  // }

  // profession = "programista";
  // skill = "angular";

  // saveP(event) {
  //   this.profession = event.target.value;
  // }
  // saveS(event) {
  //   this.skill = event.target.value;
  // }
  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];
  add(task: string) {
    this.tasksList.push(task);
  }
  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }
  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
  tasks = ["Kawka", "Papieros", "Toaleta"];
  selected(task: string) {
    console.log(task);
  }
}
// class Dog {
//   constructor(public name: string, public age: number) {}
// }
