import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { Profile } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

  step1: Object;
  step2: Object;
  step3: Object;

  constructor(private http: HttpService) { }

  get form(): FormData {
    const form: Profile = null;

    if (this.step1['file'] !== null) {
      form['avatar'] = this.step1['file'];
    }

    form['name'] = this.step1['name'];
    form['second_name'] = this.step1['surname'];
    form['work_place'] = this.step1['job'];
    form['work_position'] = this.step1['position'];
    form['url'] = this.step1['link'];
    form['email'] = this.step1['email'];

    form['what_search'] = this.step2['search'];
    form['what_offer'] = this.step2['offer'];

    form['scheduleFull'] = this.step3['schedule'];

    console.log('form', form);


    const fd = new FormData();

    console.log('fd before', fd);

    for (const prop in form) {
      if (form.hasOwnProperty(prop)) {
        fd.append(prop, form[prop]);
      }
    }

    console.log('fd after', fd);


    return fd;
  }

  post(): Observable<Object> {
    return this.http.post('/profile/', this.form);
  }

}
