import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemDetalleComponent } from './pages/item-detalle/item-detalle.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'home', component: PortafolioComponent},
  {path:'item/:id', component: ItemDetalleComponent},
  {path:'search/:termino', component: SearchComponent},
  {path:'asercade', component: AboutComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
