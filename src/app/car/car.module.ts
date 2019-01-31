import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CarRoutingModule } from './car.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class CarModule { }
