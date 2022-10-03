import { Component} from "@angular/core";
@Component({
    selector:'emp',
    templateUrl:'./employee.component.html'
    
})
export class EmpComponent{
    selectedRbValue:string="all";
    
    empp:any[]=[
        {gender:"female",name:'tom',sal:2300,loc:'pune'},
        {gender:"male",name:'ta',sal:2300,loc:'goa'},
        {gender:"female",name:'tome',sal:2300,loc:'pok'},
        {gender:"male",name:'lom',sal:2300,loc:'loc'},
        {gender:"female",name:'cat',sal:23090,loc:'loc'},
        {gender:"male",name:'dog',sal:23008,loc:'loc'},
        {gender:"male",name:'ram',sal:23000,loc:'loc'}
        
    ];

    

    getallEmpCount():number
    {
        return this.empp.length;
    }

    getmaleEmpCount():number
    {
        return this.empp.filter(e=>e.gender==="male").length;
    }
    getfemaleEmpCount():number
    {
        return this.empp.filter(e=>e.gender==="female").length;
    }

    gettingtheSelectedRadioButtonvalue(value:string){
        console.log("parent="+value);
        this.selectedRbValue=value;
    }

    empflag:boolean=true;

    value:string="hide";

    show()
    {
         if(this.value=="hide")
         this.value="show";
         else if(this.value=="show")
         this.value="hide";
        //  console.log('hide');
        
        this.empflag=!this.empflag;       
        
    }
}
