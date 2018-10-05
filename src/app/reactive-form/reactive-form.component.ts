import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors, } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {

  contactForm: FormGroup;

  message = new ReactiveMessage();
  courses = ['Angular', 'Java8', 'React'];

  ngOnInit() {
    this.contactForm = new FormGroup({
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null, [Validators.required, Validators.minLength(50)]),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      course: new FormControl(this.courses[0]),
      bot: new FormControl(null, Validators.required),
      questions: new FormArray([new FormControl(null), new FormControl(null)], this.questionsValidator)
    });
    this.contactForm.get('topic').valueChanges.subscribe(value => {
      console.log(value);
    });
    this.contactForm.get('email').statusChanges.subscribe(value => {
      console.log(value);
    });
  }

  addQuestion() {
    const arr = this.contactForm.get('questions') as FormArray;
    arr.push(new FormControl(null));
  }

  questionsValidator(control: AbstractControl): ValidationErrors {
    const arr = control.value as [string];
    if (arr.includes('angularjs')) {
      return { forbbidenCourse: true };
    }
  }

  onSubmit() {
    //console.log(this.contactForm);
    // -- PIERWSZY SPOSÓB
    this.message.topic = this.contactForm.value.topic;
    this.message.message = this.contactForm.value.message;
    this.message.name = this.contactForm.value.name;
    this.message.email = this.contactForm.value.email;
    this.message.course = this.contactForm.value.course;
    this.message.bot = this.contactForm.value.bot;
    console.log(this.message);
    // -- DRUGI SPOSÓB
    this.message.topic = this.contactForm.get('topic').value;
  }

  onReset() {
    this.contactForm.reset({
      topic: 'Fajny kurs',
      course: this.courses[2]
    })
  }

  class ReactiveMessage {
    constructor(
      public topic?: string,
      public message?: string,
      public name?: string,
      public email?: string,
      public course = 'Angular',
      public bot?: boolean
    )
  }

}
