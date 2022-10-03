import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { depcomponent } from './dep/dep.component';
import { departcountcomponent } from './dep/depcount.component';


import { EmpCountComponent } from './employee/eCount.component';
import { EmpComponent } from './employee/employee.component';
import { simplecomponent } from './simplechanges/simplechanges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,EmpComponent,EmpCountComponent,simplecomponent,depcomponent,departcountcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
