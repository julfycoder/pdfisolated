import { Directive, OnInit, ElementRef, Renderer, HostBinding, Input,AfterViewInit } from "@angular/core";
import "select-picker";

declare var jQuery: any;




@Directive({
    selector: "[custom-status]"
})
export class SelectPicker{
    ngAfterViewInit(): void {
        this.renderer.setElementAttribute(this.el.nativeElement, "id", "multi");
        this.renderer.setElementAttribute(this.el.nativeElement, "name", "multi");
        this.renderer.setElementAttribute(this.el.nativeElement, "multiple", "multiple");
        jQuery('#multi').picker({ search: true });
    }

    constructor(public el: ElementRef, public renderer: Renderer) {
        
    }
}

