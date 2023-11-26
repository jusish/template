import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { SidenavComponentComponent } from './sidenav-component/sidenav-component.component';
import { SidenavContentComponentComponent } from './sidenav-content-component/sidenav-content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    SidenavComponentComponent,
    SidenavContentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
