import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleMenu]',
  standalone: true
})
export class ToggleMenuDirective {
  private isOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') toggleMenu() {
    this.isOpen = !this.isOpen;
    const menuElement = this.el.nativeElement.nextElementSibling;

    if (menuElement) {
      if (this.isOpen) {
        menuElement.classList.remove('hidden');
      } else {
        menuElement.classList.add('hidden');
      }
    }
  }
}
