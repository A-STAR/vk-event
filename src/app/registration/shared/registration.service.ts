import { Injectable } from '@angular/core';
import { Step1, Step2, Step3 } from './';

@Injectable()
export class RegistrationService {

  step1: Step1;
  step2: Step2;
  step3: Step3;

  constructor() { }

}
