import { Component, ElementRef, contentChild }{ Component, ElementRef, contentChild }{ Component, ElementRef, contentChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'lib-lib',
  styles: ``,
  template: ` <p>lib works!</p> `,
})
export class Lib {
  readonly ref = contentChild<ElementRef>('someRef');readonly ref = contentChild<ElementRef>('someRef');readonly ref = contentChild<ElementRef>('someRef');
}
