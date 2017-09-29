import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: 'app/registration/registration.module#RegistrationModule'
  },
  {
    path: 'tabs',
    loadChildren: 'app/tabs/tabs.module#TabsModule'
  },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule'
  },
  {
    path: 'appointment',
    loadChildren: 'app/appointment/appointment.module#AppointmentModule'
  },
  {
    path: 'event',
    loadChildren: 'app/event/event.module#EventModule'
  },
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
