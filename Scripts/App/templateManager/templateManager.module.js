System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "@angular/forms", "ng2-pagination", "ng2-file-upload", "./components/templateManager.component", "./templateManager.routing", "./directives/select.picker", "./components/templateManager.status-select.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, http_1, forms_1, ng2_pagination_1, ng2_file_upload_1, templateManager_component_1, templateManager_routing_1, select_picker_1, templateManager_status_select_component_1, TemplateManagerModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (templateManager_component_1_1) {
                templateManager_component_1 = templateManager_component_1_1;
            },
            function (templateManager_routing_1_1) {
                templateManager_routing_1 = templateManager_routing_1_1;
            },
            function (select_picker_1_1) {
                select_picker_1 = select_picker_1_1;
            },
            function (templateManager_status_select_component_1_1) {
                templateManager_status_select_component_1 = templateManager_status_select_component_1_1;
            }
        ],
        execute: function () {
            TemplateManagerModule = (function () {
                function TemplateManagerModule() {
                }
                return TemplateManagerModule;
            }());
            TemplateManagerModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, http_1.HttpModule, templateManager_routing_1.TemplateManagerRoutingModule, forms_1.FormsModule, ng2_pagination_1.Ng2PaginationModule, ng2_file_upload_1.FileUploadModule],
                    declarations: [templateManager_routing_1.templateManagerRoutingComponents, select_picker_1.SelectPicker, templateManager_status_select_component_1.StatusSelectComponent],
                    bootstrap: [templateManager_component_1.TemplateManagerComponent]
                })
            ], TemplateManagerModule);
            exports_1("TemplateManagerModule", TemplateManagerModule);
        }
    };
});
//# sourceMappingURL=templateManager.module.js.map