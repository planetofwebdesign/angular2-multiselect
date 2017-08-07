import { Component, Input,  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import { IItem } from './multselect.model';


@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MulltiselectComponent {
   
  expanded: boolean = false;
  selectedValues: any[] = [];
  filterString: string;
  @Input() items: Array<IItem>;
  
  constructor() {}

  toggleList(){
      this.expanded = !this.expanded;
  }

    isChecked(item: any): boolean {
        return this.selectedValues.filter((value) => {
                return item.id === value.id;
            }).length > 0;
    }
    
  toggleValue(item : any, checkbox: any) {

    if (checkbox.checked) {
         this.selectedValues.push(item);
    } else {
        this.selectedValues.forEach( (value, index) => {
                if(value.id === item.id) {
                    this.selectedValues.splice(index,1)
                }
        });
    }
  }

  removeValue(event:any, item: any) {
      event.stopPropagation();
        this.selectedValues.forEach( (value, index) => {
                        if(value.id === item.id) {
                            this.selectedValues.splice(index,1);
                            return false;
                        }
                });
  }

  getSelectedValues() {
      console.dir(this.selectedValues);
  }
 
}
