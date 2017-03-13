"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng2_pagination_1 = require("ng2-pagination");
var ng2_file_upload_1 = require("ng2-file-upload");
var templateManager_component_1 = require("./components/templateManager.component");
var templateManager_routing_1 = require("./templateManager.routing");
var select_picker_1 = require("./directives/select.picker");
var TemplateManagerModule = (function () {
    function TemplateManagerModule() {
    }
    return TemplateManagerModule;
}());
TemplateManagerModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, templateManager_routing_1.TemplateManagerRoutingModule, forms_1.FormsModule, ng2_pagination_1.Ng2PaginationModule, ng2_file_upload_1.FileUploadModule],
        declarations: [templateManager_routing_1.templateManagerRoutingComponents, select_picker_1.SelectPicker],
        bootstrap: [templateManager_component_1.TemplateManagerComponent]
    })
], TemplateManagerModule);
exports.TemplateManagerModule = TemplateManagerModule;
//# sourceMappingURL=templateManager.module.js.map