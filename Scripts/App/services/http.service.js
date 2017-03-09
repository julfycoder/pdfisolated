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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_service_1 = require("./router.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var class_transformer_1 = require("class-transformer");
var HttpService = (function () {
    function HttpService(http, routerService) {
        this.http = http;
        this.routerService = routerService;
        this.appPath = window.serverSideSettings.appPath;
    }
    HttpService.prototype.get = function (path) {
        return this.http.get(this.appPath + path)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.post = function (path, data, options) {
        if (options === void 0) { options = null; }
        var jsonData = class_transformer_1.classToPlain(data);
        var body = JSON.stringify(jsonData);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;  charset=utf-8 ' });
        if (!options) {
            options = new http_1.RequestOptions({ headers: headers });
        }
        return this.http.post(this.appPath + path, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService.prototype.handleError = function (error) {
        this.error = error.json();
        console.error(error);
        return Observable_1.Observable.throw(this.error);
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_service_1.RouterService])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map