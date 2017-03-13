import { Directive, OnInit, ElementRef, Renderer,HostBinding,Input } from "@angular/core";

@Directive({
    selector: "[custom-status]",
    inputs:["allPrograms"]
})
export class SelectPicker implements OnInit{
    constructor(public el: ElementRef, public renderer: Renderer) { }

    ngOnInit() {
        this.renderer.setElementAttribute(this.el.nativeElement, "id", "multi");
        this.renderer.setElementAttribute(this.el.nativeElement, "name", "multi");
        
    }
}