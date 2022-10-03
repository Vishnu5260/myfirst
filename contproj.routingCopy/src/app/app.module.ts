import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { StudentlistModule } from './studentlist/studentlist.module';

import { highlightdirective } from './highlight directive/highlight.directive';
import { formComponent } from './person/form.Component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatModule } from './matModules/matmodules';
@NgModule({
  declarations: [
    AppComponent,

    
    highlightdirective,formComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,StudentlistModule,
    MatButtonModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatTableModule,MatModule,
    FormsModule,
    BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
