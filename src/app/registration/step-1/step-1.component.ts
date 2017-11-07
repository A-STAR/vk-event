import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { RegistrationService } from '../shared/registration.service';

@Component({
  selector: 'step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {

  // @ViewChild('image', { read: ElementRef }) image: ElementRef;

  src: string;
  alt: string;
  name: string;
  surname: string;

  file: File;

  constructor(private auth: AuthService, private registration: RegistrationService, private location: Location, private renderer: Renderer2, private elementRef: ElementRef, private router: Router, private route: ActivatedRoute) {
    this.alt = 'Фото';
  }

  content() {
    const { src, name, surname, id } = this.auth.profile;

    this.src = src;
    this.name = name;
    this.surname = surname;
    this.alt = `${name} ${surname}`;
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

    if (this.file !== null) {
      value['file'] = this.file;
    }

    console.log('value', value);

    this.registration.step1 = Object.assign({ }, value);

    console.log('step', this.registration.step1);

    this.next();
  }

  next() {
    this.location.replaceState('registration/step-2');

    this.router.navigate(['step-2'], { relativeTo: this.route });
  }

}
