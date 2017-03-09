"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var templateManager_list_component_1 = require("./components/templateManager.list.component");
var templateManager_preview_component_1 = require("./components/templateManager.preview.component");
var templateManager_template_component_1 = require("./components/templateManager.template.component");
exports.templateManagerRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: templateManager_list_component_1.TemplateManagerListComponent },
    { path: 'new', component: templateManager_template_component_1.TemplateManagerTemplateComponent },
    { path: 'preview', component: templateManager_preview_component_1.TemplateManagerPreviewComponent }
];
var TemplateManagerRoutingModule = (function () {
    function TemplateManagerRoutingModule() {
    }
    return TemplateManagerRoutingModule;
}());
TemplateManagerRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.templateManagerRoutes)],
        exports: [router_1.RouterModule]
    })
], TemplateManagerRoutingModule);
exports.TemplateManagerRoutingModule = TemplateManagerRoutingModule;
exports.templateManagerRoutingComponents = [
    templateManager_list_component_1.TemplateManagerListComponent,
    templateManager_preview_component_1.TemplateManagerPreviewComponent,
    templateManager_template_component_1.TemplateManagerTemplateComponent
];
//# sourceMappingURL=templateManager.routing.js.map