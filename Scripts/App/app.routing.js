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
var referenceTable_component_1 = require("./referenceTable/referenceTable.component");
var templateManager_component_1 = require("./templateManager/components/templateManager.component");
var templateManager_routing_1 = require("./templateManager/templateManager.routing");
var routes = [
    { path: window.serverSideSettings.appPath + '/admin', redirectTo: window.serverSideSettings.appPath + '/admin' + '/templatemanager' },
    { path: '', pathMatch: 'full', redirectTo: window.serverSideSettings.appPath + '/admin' + '/templatemanager' },
    {
        path: window.serverSideSettings.appPath + '/admin' + '/templatemanager', component: templateManager_component_1.TemplateManagerComponent,
        children: templateManager_routing_1.templateManagerRoutes
    },
    { path: window.serverSideSettings.appPath + '/admin' + '/referencetable', component: referenceTable_component_1.ReferenceTableComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [
    referenceTable_component_1.ReferenceTableComponent,
    templateManager_component_1.TemplateManagerComponent
];
//# sourceMappingURL=app.routing.js.map