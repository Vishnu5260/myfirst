import { Component,EventEmitter,Input, Output} from "@angular/core";
@Component({
    selector:'ecount',
    templateUrl:'./eCount.component.html'
    
})
export class EmpCountComponent{
    
    @Input()
    allCount:number=0;
    @Input()
    maleCount:number=0;
    @Input()
    femaleCount:number=0;

   selectedRBvalue:string='all';
   
   @Output()
   rbselectionChange:EventEmitter<string>=new  EventEmitter<string>();

   onRadioButtonSelectionChange(){
    console.log("child="+this.selectedRBvalue)
    this.rbselectionChange.emit(this.selectedRBvalue);
    
   }

}