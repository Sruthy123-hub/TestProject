import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SubcategoryListComponent } from './subcategory-list/subcategory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    CategoryListComponent,
    SubcategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
