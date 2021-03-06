System.register(["@angular/core", "@angular/router", "@angular/common"], function (exports_1, context_1) {
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
    var core_1, router_1, common_1, RouterService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            RouterService = (function () {
                function RouterService(location, router) {
                    this.location = location;
                    this.router = router;
                    this.appPath = window.serverSideSettings.appPath;
                }
                RouterService.prototype.navigateToUrl = function (url) {
                    this.router.navigateByUrl(this.appPath + url);
                };
                RouterService.prototype.navigateBack = function () {
                    this.location.back();
                };
                RouterService.prototype.navigateForward = function () {
                    this.location.forward();
                };
                return RouterService;
            }());
            RouterService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [common_1.Location, router_1.Router])
            ], RouterService);
            exports_1("RouterService", RouterService);
        }
    };
});
//# sourceMappingURL=router.service.js.map