import { Component } from '@angular/core';
 import { FormBuilder, FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  
  form: FormGroup;
  constructor( 
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      'mselect': ['']
    })
  }

  items: any[] = [{
    id: 1,
    name: 'Apple'
  }, {
    id: 2,
    name: 'Blackberry'
  }, {
    id: 3,
    name: 'HTC'
  }, {
    id: 4,
    name: 'Sony Ericson'
  }, {
    id: 5,
    name: 'Motorola'
  }, {
    id: 6,
    name: 'Nokia'
  }, {
    id: 7,
    name: 'Lenovo'
  }, {
    id: 8,
    name: 'Xiaomi'
  }, {
    id: 9,
    name}];

    
}
