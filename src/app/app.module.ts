import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1componentComponent } from './parent1component/parent1component.component';
import { Parent2componentComponent } from './parent2component/parent2component.component';
import { Child1componentComponent } from './child1component/child1component.component';
import { Child2componentComponent } from './child2component/child2component.component';
import { Child3componentComponent } from './child3component/child3component.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1componentComponent,
    Parent2componentComponent,
    Child1componentComponent,
    Child2componentComponent,
    Child3componentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
