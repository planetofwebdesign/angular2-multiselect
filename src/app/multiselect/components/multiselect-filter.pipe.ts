import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'multiselectfilter'
})
export class MultiselectFilterPipe implements PipeTransform{

    transform(items: any, value: string) {
        if(!items || !value) {
            return items;
        }

       return items.filter( item => {
           return item.name.toLowerCase().indexOf(value.toLowerCase())!== -1;
       });
    }
}