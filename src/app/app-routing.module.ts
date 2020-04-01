import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemDetalleComponent } from './pages/item-detalle/item-detalle.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'home', component: PortafolioComponent},
  {path:'item', component: ItemDetalleComponent},
  {path:'asercade', component: AboutComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
