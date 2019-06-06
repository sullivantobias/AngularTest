import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHovering]"
})
export class HoveringDirective {
  constructor(private el: ElementRef) {}

  @Input("appHovering") appHovering: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.appHovering || "red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
