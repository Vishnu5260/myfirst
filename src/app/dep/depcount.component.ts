import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector:'depCount',
    templateUrl:'./depcount.component.html'
})
export class departcountcomponent{
    selectd:string="all"
    @Input()
    allCount:number=0;
    @Input()
    allM:number=0;
    @Input()
    allW:number=0;
    @Input()
    allP:number=0;

    @Output()
    selectSelectionChange:EventEmitter<string>=new EventEmitter<string>();

    onselectButtonSelectionChange(){
        console.log("child="+this.selectd);
        this.selectSelectionChange.emit(this.selectd);

    }

}