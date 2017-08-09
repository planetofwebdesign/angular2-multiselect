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
    name: 'karbon'
  },
    {
    id: 11,
    name: 'Apple1'
  }, {
    id: 12,
    name: 'Blackberry1'
  }, {
    id: 13,
    name: 'HTC1'
  }, {
    id: 14,
    name: 'Sony 1'
  }, {
    id:15,
    name: 'Motorola11' 
  }, {
    id: 16,
    name: 'Nokia1'
  }, {
    id: 17,
    name: 'Lenovo1'
  }, {
    id: 18,
    name: 'Xiaomi1'
  }, {
    id: 19,
    name: 'karbon1'
  }];

}
