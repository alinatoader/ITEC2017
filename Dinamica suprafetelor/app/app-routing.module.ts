import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuprafeteComponent} from './components/suprafete.component';
import { VanzariComponent} from './components/vanzari.component';

export const routes: Routes = [
    { path: 'suprafete', component:SuprafeteComponent},
    { path: '', redirectTo: 'suprafete', pathMatch: 'full' },
    { path: 'vanzari', component:VanzariComponent},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}