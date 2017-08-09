import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// import { IOption } from './multselect.model';
import { IOption } from './multselect.model';


@Component({
    selector: 'app-multiselect',
    templateUrl: './multiselect.component.html',
    styleUrls: ['./multiselect.component.scss'],
    // host: {'(document:click)': 'hostClick($event)'},
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MulltiselectComponent),
            multi: true
        }
    ]
})
export class MulltiselectComponent implements ControlValueAccessor {


    expanded: boolean = false;
    selectedValues: any[] = [];
    filterString: string;
    @Input() options: Array<IOption>;
    propagateChange = (_: any) => { };

    constructor() { }


    writeValue(value: IOption): void {
        if (value) {
            this.selectedValues.push(value);
        } else {
            // throw new Error("Please pass value in key value formate");
        }

    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
        // throw new Error("Method not implemented.");
    }
    setDisabledState(isDisabled: boolean): void {
        // throw new Error("Method not implemented.");
    }


    isChecked(item: any): boolean {
        return this.selectedValues.filter((value) => {
            return item.id === value.id;
        }).length > 0;
    }

    toggleValue(item: any, checkbox: any) {

        if (checkbox.checked) {
            this.selectedValues.push(item);
        } else {
            this.selectedValues.forEach((value, index) => {
                if (value.id === item.id) {
                    this.selectedValues.splice(index, 1)
                }
            });
        }

        this.propagateChange(this.selectedValues);
    }

    removeValue(event: any, item: any) {
        event.stopPropagation();
        this.selectedValues.forEach((value, index) => {
            if (value.id === item.id) {
                this.selectedValues.splice(index, 1);
                return false;
            }
        });
        this.propagateChange(this.selectedValues);
    }

    close() {
        if (this.expanded) {
            this.expanded = false;
        }
    }
    getSelectedValues() {
        console.dir(this.selectedValues);
    }

}
