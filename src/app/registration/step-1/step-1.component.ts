import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../shared/registration.service';
import { Step1 } from '../shared';

@Component({
  selector: 'step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {

  // @ViewChild('image', { read: ElementRef }) image: ElementRef;

  src: string;
  name: string;

  file: File;

  constructor(private registration: RegistrationService, private location: Location, private renderer: Renderer2, private elementRef: ElementRef, private router: Router, private route: ActivatedRoute) {
    this.file = null;
  }

  content() {
    this.src = 'assets/images/vlad.jpg';
    this.name = 'Резников Владислав';
  }

  ngOnInit() {
    this.content();
  }

  // image(file: File) {
  //   const url = URL.createObjectURL(file);

  //   const image = this.renderer.createElement('img');

  //   this.renderer.listen(image, 'load', event => {
  //     this.renderer.insertBefore(this.elementRef.nativeElement.querySelector('main'), image, this.elementRef.nativeElement.querySelector('img'));
  //     URL.revokeObjectURL(url);
  //   });

  //   this.renderer.addClass(image, 'uploaded');
  //   this.renderer.setStyle(image, 'width', '100px');
  //   this.renderer.setStyle(image, 'height', '100px');
  //   this.renderer.setStyle(image, 'object-fit', 'cover');
  //   this.renderer.setAttribute(image, 'src', url);
  // }

  base64(file: File) {
    const fileReader = new FileReader();

    this.renderer.listen(fileReader, 'load', event => this.src = event.target.result);
    // this.renderer.listen(fileReader, 'load', event => event => this.image.nativeElement.src = event.target.result);

    fileReader.readAsDataURL(file);
  }

  photo(event) {
    const fileList: FileList = event.target.files;

    if (!fileList.length) {
      return;
    }

    let file: File = null;

    const type = /^image\//;

    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].type.match(type)) {
        file = fileList[i];
        break;
      }
    }

    if (file === null) {
      return;
    }

    this.file = file;

    // this.image(file);

    this.base64(file);
  }

  submit({ value }) {
    event.preventDefault();

    const form = { };

    if (this.file !== null) {
      form['avatar'] = this.file;
    }

    form['name'] = value.name;
    form['second_name'] = value.surname;
    form['work_place'] = value.job;
    form['work_position'] = value.position;
    form['url'] = value.link;
    form['email'] = value.email;

    console.log('form', form);

    const step = Object.assign({ }, form);

    console.log('step', step);
    console.log('step1', this.registration.step1);

    this.next();
  }

  next() {
    this.location.replaceState('registration/step-2');

    this.router.navigate(['step-2'], { relativeTo: this.route });
  }

}
