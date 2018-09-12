import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  tasks;

  @Output()
  eventTask = new EventEmitter<string>();

  select(task) {
    this.eventTask.emit(task);
  }

  constructor() { }

  ngOnInit() {
  }

}
