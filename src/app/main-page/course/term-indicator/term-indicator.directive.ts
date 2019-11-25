import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appTermIndicator]'
})
export class TermIndicatorDirective {
  @Input('appTermIndicator') creationDate: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.defineColor());
  }

  private defineColor(): string {
    const difference = (+new Date() - this.creationDate)/(3600*24*1000);

    switch (true) {
      case (difference >= 14): {
        return '';
      }
      case (difference < 0): {
        return '#30b6dd';
      }
      default: {
        return '#9bc837';
      }
    }
  }
}
