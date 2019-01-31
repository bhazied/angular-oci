import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
    {path: 'add', component: AddComponent},
    {path: '', component: ListComponent}
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class CarRoutingModule {
}