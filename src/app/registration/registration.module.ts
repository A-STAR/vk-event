import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { Step1Component } from './step-1/step-1.component';
import { Step2Component } from './step-2/step-2.component';
import { Step3Component } from './step-3/step-3.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationComponent, Step1Component, Step2Component, Step3Component]
})
export class RegistrationModule { }
