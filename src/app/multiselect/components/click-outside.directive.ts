import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {


    constructor( private elementRef: ElementRef) {}
    @Output()
    public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement){
        const clickInside = this.elementRef.nativeElement.contains(targetElement);
        if(!clickInside){
            this.clickOutside.emit(null);
        }
    }


}