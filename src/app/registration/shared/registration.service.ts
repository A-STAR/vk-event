import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { Step1, Step2, Step3 } from './';

@Injectable()
export class RegistrationService {

  step1: Step1;
  step2: Step2;
  step3: Step3;

  constructor(private http: HttpService) {
    this.step1 = null;
    this.step2 = null;
    this.step3 = null;
  }

  post() {
    const form = Object.assign({ }, this.step1, this.step2, this.step3);

    const fd = new FormData();
  }

}
