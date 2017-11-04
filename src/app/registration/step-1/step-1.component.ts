import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {

  // @ViewChild('image', { read: ElementRef }) image: ElementRef;

  src: string;
  name: string;

  constructor(private location: Location, private renderer: Renderer2, private elementRef: ElementRef, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.content();
  }

  content() {
    this.src = 'assets/images/vlad.jpg';
    this.name = 'Резников Владислав';
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

    this.renderer.listen(fileReader, 'load', event => this.src = event.target['result']);
    // this.renderer.listen(fileReader, 'load', event => event => this.image.nativeElement.src = event.target['result']);

    fileReader.readAsDataURL(file);
  }

  photo(event) {
    const fileList: { [key: string]: File | any } = event.target.files;

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

    // this.registration.form.avatar = file;

    // this.image(file);

    this.base64(file);
  }

  submit(event) {
    event.preventDefault();
    this.next();
  }

  next() {
    this.location.replaceState('registration/step-2');

    this.router.navigate(['step-2'], { relativeTo: this.route });
  }

}
