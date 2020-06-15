import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';


var routes:Routes=[
  { path:'menu',component:FoodmenuComponent} ,
  { path :'',component:MenuComponent}
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    FoodmenuComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatCheckboxModule,
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
