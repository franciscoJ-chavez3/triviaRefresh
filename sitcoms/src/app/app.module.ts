import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlePageComponent } from './views/title-page/title-page.component';
import { MenuPageComponent } from './views/menu-page/menu-page.component';
import { GamePageComponent } from './views/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    MenuPageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
