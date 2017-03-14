System.register(["@angular/core", "select-picker"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, SelectPicker;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            SelectPicker = (function () {
                function SelectPicker(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                SelectPicker.prototype.ngAfterViewInit = function () {
                    this.renderer.setElementAttribute(this.el.nativeElement, "id", "multi");
                    this.renderer.setElementAttribute(this.el.nativeElement, "name", "multi");
                    this.renderer.setElementAttribute(this.el.nativeElement, "multiple", "multiple");
                    jQuery('#multi').picker({ search: true });
                };
                return SelectPicker;
            }());
            SelectPicker = __decorate([
                core_1.Directive({
                    selector: "[custom-status]"
                }),
                __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
            ], SelectPicker);
            exports_1("SelectPicker", SelectPicker);
        }
    };
});
//# sourceMappingURL=select.picker.js.map