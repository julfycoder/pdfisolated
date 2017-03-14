System.register(["@angular/core", "@angular/router", "./components/templateManager.list.component", "./components/templateManager.preview.component", "./components/templateManager.template.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, templateManager_list_component_1, templateManager_preview_component_1, templateManager_template_component_1, templateManagerRoutes, TemplateManagerRoutingModule, templateManagerRoutingComponents;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (templateManager_list_component_1_1) {
                templateManager_list_component_1 = templateManager_list_component_1_1;
            },
            function (templateManager_preview_component_1_1) {
                templateManager_preview_component_1 = templateManager_preview_component_1_1;
            },
            function (templateManager_template_component_1_1) {
                templateManager_template_component_1 = templateManager_template_component_1_1;
            }
        ],
        execute: function () {
            exports_1("templateManagerRoutes", templateManagerRoutes = [
                { path: '', pathMatch: 'full', redirectTo: 'list' },
                { path: 'list', component: templateManager_list_component_1.TemplateManagerListComponent },
                { path: 'new', component: templateManager_template_component_1.TemplateManagerTemplateComponent },
                { path: 'preview', component: templateManager_preview_component_1.TemplateManagerPreviewComponent }
            ]);
            TemplateManagerRoutingModule = (function () {
                function TemplateManagerRoutingModule() {
                }
                return TemplateManagerRoutingModule;
            }());
            TemplateManagerRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forRoot(templateManagerRoutes)],
                    exports: [router_1.RouterModule]
                })
            ], TemplateManagerRoutingModule);
            exports_1("TemplateManagerRoutingModule", TemplateManagerRoutingModule);
            exports_1("templateManagerRoutingComponents", templateManagerRoutingComponents = [
                templateManager_list_component_1.TemplateManagerListComponent,
                templateManager_preview_component_1.TemplateManagerPreviewComponent,
                templateManager_template_component_1.TemplateManagerTemplateComponent
            ]);
        }
    };
});
//# sourceMappingURL=templateManager.routing.js.map