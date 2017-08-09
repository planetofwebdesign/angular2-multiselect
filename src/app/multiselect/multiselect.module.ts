import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MulltiselectComponent } from './components/multiselect.component';
import { MultiselectFilterPipe } from './components/multiselect-filter.pipe';

import { ClickOutsideDirective } from './components/click-outside.directive';

@NgModule({
 declarations: [
    MulltiselectComponent,
    MultiselectFilterPipe,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      MulltiselectComponent,
      MultiselectFilterPipe
  ],
  providers: [],
})
export class MultiselectModule {}