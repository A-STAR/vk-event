import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { RegistrationGuard } from './core/registration.guard';
import { PageNotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
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
      }
    ]
  },
  {
    path: 'registration',
    canActivate: [RegistrationGuard],
    loadChildren: 'app/registration/registration.module#RegistrationModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  providers: [AuthGuard, RegistrationGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
