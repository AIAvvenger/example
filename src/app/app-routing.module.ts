import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Child1componentComponent} from './child1component/child1component.component'
import {Child2componentComponent} from './child2component/child2component.component'
import {Child3componentComponent} from './child3component/child3component.component'
import {Parent2componentComponent} from './parent2component/parent2component.component'
import {Parent1componentComponent} from './parent1component/parent1component.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
