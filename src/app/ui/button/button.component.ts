import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() public title: string;
  @Input() public type: string;
  @Input() public size: string;
  @Input() public customClass: string;

  @Output() callback = new EventEmitter<any>();

  public click(): void {
      this.callback.emit();
  }

  public get classes(): string {
    const baseClass = 'button';
    const typeModifier = this.type ? `${baseClass}--type-${this.type}` : `${baseClass}--type-default`;
    const sizeModifier = this.size ? `${baseClass}--size-${this.size}` : `${baseClass}--size-medium`;

    return [ baseClass, typeModifier, sizeModifier, this.customClass ].join(' ');
  }

  constructor() { }

  ngOnInit() {
  }

}
