import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipieComponent } from './recipie/recipie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipieListComponent } from './recipie/recipie-list/recipie-list.component';
import { RecipieDetailsComponent } from './recipie/recipie-details/recipie-details.component';
import { RecipieItemComponent } from './recipie/recipie-list/recipie-item/recipie-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipieComponent,
    ShoppingListComponent,
    HeaderComponentComponent,
    RecipieListComponent,
    RecipieDetailsComponent,
    RecipieItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
