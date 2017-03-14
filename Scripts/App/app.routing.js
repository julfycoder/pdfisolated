System.register(["@angular/core", "@angular/router", "./referenceTable/referenceTable.component", "./templateManager/components/templateManager.component", "./templateManager/templateManager.routing"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, referenceTable_component_1, templateManager_component_1, templateManager_routing_1, routes, AppRoutingModule, routingComponents;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (referenceTable_component_1_1) {
                referenceTable_component_1 = referenceTable_component_1_1;
            },
            function (templateManager_component_1_1) {
                templateManager_component_1 = templateManager_component_1_1;
            },
            function (templateManager_routing_1_1) {
                templateManager_routing_1 = templateManager_routing_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: window.serverSideSettings.appPath + '/admin', redirectTo: window.serverSideSettings.appPath + '/admin' + '/templatemanager' },
                { path: '', pathMatch: 'full', redirectTo: window.serverSideSettings.appPath + '/admin' + '/templatemanager' },
                {
                    path: window.serverSideSettings.appPath + '/admin' + '/templatemanager', component: templateManager_component_1.TemplateManagerComponent,
                    children: templateManager_routing_1.templateManagerRoutes
                },
                { path: window.serverSideSettings.appPath + '/admin' + '/referencetable', component: referenceTable_component_1.ReferenceTableComponent }
            ];
            AppRoutingModule = (function () {
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
            exports_1("AppRoutingModule", AppRoutingModule);
            exports_1("routingComponents", routingComponents = [
                referenceTable_component_1.ReferenceTableComponent,
                templateManager_component_1.TemplateManagerComponent
            ]);
        }
    };
});
//# sourceMappingURL=app.routing.js.map