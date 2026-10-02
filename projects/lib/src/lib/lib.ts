import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'lib-lib',
  styles: ``,
  template: ` <p>lib works!</p> `,
})
export class Lib {
  @ContentChild('someRef') ref: ElementRef | undefined = undefined;
}
