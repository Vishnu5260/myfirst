import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatModule } from "../matModules/matmodules";

@Component({
    selector:'for',
    templateUrl:'./form.Component.html'
})
export class formComponent{

    saveData(detform:NgForm){
        alert('insertion succes');

    }
    
    
}