import { Component,Input, SimpleChanges } from "@angular/core";
@Component({
    selector:'simple',
    template:`Entered value:{{title}}

    `
})
export class simplecomponent{
    @Input()
    title:string="";
    
    ngOnChanges(changes:SimpleChanges){
        console.log(changes);
        for(let propertyname in changes){
            console.log(propertyname);
            let changeJson=changes[propertyname];
            let curvalue=JSON.stringify(changeJson.currentValue);
            let prevvalue=JSON.stringify(changeJson.previousValue);
            console.log(`${curvalue}${prevvalue}`)
        }


    }
}