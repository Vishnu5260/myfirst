import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { studentcomponent } from './studentlist/student-list/student-list.component';
import { formComponent } from './person/form.Component';

const routes: Routes = [

    { path:'person',component:formComponent},
    { path:'student-list',component:studentcomponent},
    { path:' ',component:AppComponent},
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
