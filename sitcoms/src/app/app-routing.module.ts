import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageComponent } from './views/menu-page/menu-page.component';
import { TitlePageComponent } from './views/title-page/title-page.component';
import { GamePageComponent } from './views/game-page/game-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'title', pathMatch: 'full' },
  { path: 'title', component: TitlePageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'game', component: GamePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
