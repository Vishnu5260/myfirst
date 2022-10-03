import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { highlightdirective } from "../highlight directive/highlight.directive";
import { studentcomponent } from "./student-list/student-list.component";


@NgModule({
    declarations: [studentcomponent,
        
    ],
    imports:[CommonModule,
        FormsModule
    ],
    exports: [studentcomponent
    ],
    providers: [],
})
export class StudentlistModule{

}