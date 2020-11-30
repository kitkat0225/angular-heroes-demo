import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RxjstestComponent } from './rxjstest/rxjstest.component';
import { GeneralComponent } from './general/general.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HookParentComponent } from './hook/hook-parent/hook-parent.component';
import { VotetakerComponent } from './vote/votetaker/votetaker.component';
import { CountdownParentComponent } from './countdown/countdown-parent/countdown-parent.component';
import { MissionComponent } from './mission/mission.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'rxjstest', component: RxjstestComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'hook', component: HookParentComponent },
  { path: 'vote', component: VotetakerComponent },
  { path: 'countdown', component: CountdownParentComponent },
  { path: 'mission', component: MissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
