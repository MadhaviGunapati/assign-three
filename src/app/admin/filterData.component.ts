import { Pipe, PipeTransform } from "@angular/core";
import { Idetails } from "./admin.model";

@Pipe({
    name: 'filterData'
})

export class FilterPipe implements PipeTransform{
    transform(value: Idetails[], filterBy: string): Idetails[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((admin: Idetails) =>
        admin.username.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}