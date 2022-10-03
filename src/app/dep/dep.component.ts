import { Component } from "@angular/core";
@Component({
    selector:'dep',
    templateUrl:'./dep.component.html'
})
export class depcomponent{
    sel:string="all";
    dep:any[]=[
        {name:"tom",domain:"manager"},
        {name:"rat",domain:"web"},
        {name:"bat",domain:"pro"}
    ]

    getall():number{
        return this.dep.length;
    }
    getM():number{
        return this.dep.filter(e=>e.domain=="manager").length;
    }
    getPro():number{
        return this.dep.filter(e=>e.domain=="pro").length;
    }
    getWeb():number{
        return this.dep.filter(e=>e.domain=="web").length;
    }
    onselectButtonSelectionChange(value:string){
        console.log("parent"+value);
        this.sel=value;
    }
}