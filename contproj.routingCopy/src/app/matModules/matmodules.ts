import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    declarations: [ ],

    imports:[CommonModule,RouterModule,
        FormsModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatTableModule
  
    ],
})
export class MatModule{

}