import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    name: string;
    email: string;
    message: string;
   
  constructor() { }

  ngOnInit(): void {
  }

    submitForm() {
      const response =`Hello! My name is ${this.name}. My Email is ${this.email}. My Message is ${this.message}`
      //grab all fields and values
      alert("Form Submitted!");
      alert(response)


  }
}
