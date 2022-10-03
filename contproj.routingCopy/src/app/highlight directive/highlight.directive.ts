import { Directive,Input,HostBinding } from "@angular/core";
@Directive({
    selector:'[Highlight]'
})
export class highlightdirective{
    @Input()
    backgroundcolor:string="";
    
    @HostBinding('style.backgroundColor') bgColor:string='';
    
 ngOnInit() {
    
    this.bgColor=this.backgroundcolor;
    
     }
}

