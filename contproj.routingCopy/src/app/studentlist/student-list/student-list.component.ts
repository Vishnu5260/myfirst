import { Component } from "@angular/core";

@Component({
    selector:'std',
    templateUrl:'./student-list.component.html'
})
export class studentcomponent{
    
    student:any[]=[
    {class:"x",fname:"tom", mname:'raom',lname:'lat',gender:"male",Rollno:"st1",maths:55,English:5,hindi:5,science:55,drawing:55},
    {class:"x",fname:"rat", mname:'raom',lname:'lat',gender:"male",Rollno:"st1",maths:5,English:55,hindi:55,science:5,drawing:55},
    {class:"x",fname:"bat", mname:'raom',lname:'lat',gender:"male",Rollno:"st1",maths:55,English:55,hindi:55,science:55,drawing:55},
    {class:"x",fname:'raom',mname:'lat', lname:"tom", gender:"female",Rollno:"st2",maths:55,English:55,hindi:55,science:55,drawing:55},
    {class:"x",fname:"rat",mname:'raom',lname:'lat',gender:"female",Rollno:"st2",maths:5,English:5,hindi:55,science:5,drawing:55},
    {class:"x",fname:"bat",mname:'raom',lname:'lat',gender:"female",Rollno:"st2",maths:55,English:55,hindi:55,science:55,drawing:55},
    {class:"x",fname:'raom',mname:'lat', lname:'lat',gender:"male",Rollno:"st3",maths:55,English:55,hindi:55,science:55,drawing:55},
    {class:"x",fname:"rat", mname:'raom',lname:'lat',gender:"male",Rollno:"st3",maths:55,English:5,hindi:5,science:5,drawing:55},
    {class:"x",fname:"bat", mname:'raom',lname:'lat',gender:"male",Rollno:"st3",maths:55,English:55,hindi:55,science:55,drawing:55},
    {class:"x",fname:"bat", mname:'raom',lname:'lat',gender:"male",Rollno:"st3",maths:55,English:55,hindi:55,science:55,drawing:55},

        ];

   
}