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
var router_service_1 = require("../../services/router.service");
var ng2_file_upload_1 = require("ng2-file-upload");
var pdfparsingresponse_1 = require("../models/pdfparsingresponse");
var class_transformer_1 = require("class-transformer");
var newtemplatestate_1 = require("../models/newtemplatestate");
var program_1 = require("../models/program");
var status_1 = require("../models/status");
var UploadUrl = '/admin/api/templatemanager/uploadpdftemplate';
var TemplateManagerTemplateComponent = (function () {
    //-------------------------------
    function TemplateManagerTemplateComponent(routerService) {
        this.routerService = routerService;
        this.programs = [
            new program_1.Program("DDD", "TestProgram1", "Some code", [new status_1.Status("TestStatus11"), new status_1.Status("TestStatus12"), new status_1.Status("TestStatus13")]),
            new program_1.Program("EEE", "TestProgram2", "Some code", [new status_1.Status("TestStatus21"), new status_1.Status("TestStatus22"), new status_1.Status("TestStatus23")]),
            new program_1.Program("CCC", "TestProgram3", "Some code", [new status_1.Status("TestStatus31"), new status_1.Status("TestStatus32"), new status_1.Status("TestStatus33")])
        ];
        this.orgUnits = ["OrgUnit1", "OrgUnit2", "OrgUnit3", "OrgUnit4", "OrgUnit5"];
        this.uploader = new ng2_file_upload_1.FileUploader({ url: window.serverSideSettings.appPath + UploadUrl });
        this.uploader.onCompleteItem = this.onUploadComplete.bind(this);
        this.uploader.onErrorItem = this.onUploadError.bind(this);
        this.newTemplateState = new newtemplatestate_1.NewTemplateState();
        this.newTemplateState.programs.push(this.programs[2]);
        this.newTemplateState.orgUnit = this.orgUnits[0];
    }
    TemplateManagerTemplateComponent.prototype.onUploadFileChanged = function (e) {
        this.isError = false;
        this.parsingResponse = null;
        this.uploader.uploadAll();
        this.newTemplateState.file = e.value;
    };
    TemplateManagerTemplateComponent.prototype.onUploadComplete = function (item, response, status, headers) {
        if (status != 200 || response == '')
            return;
        var plainObj = JSON.parse(response);
        this.parsingResponse = class_transformer_1.plainToClass(pdfparsingresponse_1.PdfParsingResponse, plainObj);
        this.newTemplateState.templateName = this.parsingResponse.FileName;
        this.newTemplateState.file = item;
    };
    TemplateManagerTemplateComponent.prototype.onUploadError = function (item, response, status, headers) {
        this.isError = true;
    };
    TemplateManagerTemplateComponent.prototype.onOrgUnitSelected = function (orgUnit) {
        this.newTemplateState.orgUnit = orgUnit;
    };
    TemplateManagerTemplateComponent.prototype.isFormValid = function () {
        return this.newTemplateState.templateName !== "" &&
            this.newTemplateState.orgUnit !== "" &&
            this.newTemplateState.programs != null &&
            this.newTemplateState.file != null;
    };
    //public removeProgram(program: Program) {
    //    let tempPrograms: Array<Program> = [];
    //    //Adding to tempPrograms
    //    for (let p of this.newTemplateState.programs) {
    //        if (p.id !== program.id) tempPrograms.push(p);
    //    }
    //    //Removing from newTemplateState.programs
    //    for (let i = 0; i < this.newTemplateState.programs.length; i++) {
    //        this.newTemplateState.programs.pop();
    //    }
    //    //Adding to newTemplateState.programs from tempPrograms
    //    for (let p of tempPrograms) {
    //        this.newTemplateState.programs.push(p);
    //    }
    //}
    TemplateManagerTemplateComponent.prototype.goback = function () {
        this.routerService.navigateBack();
    };
    return TemplateManagerTemplateComponent;
}());
TemplateManagerTemplateComponent = __decorate([
    core_1.Component({
        selector: 'app-template-template',
        templateUrl: window.serverSideSettings.appPath +
            '/AdminSite/app/templateManager/views/templateManager.template.view.html'
    }),
    __metadata("design:paramtypes", [router_service_1.RouterService])
], TemplateManagerTemplateComponent);
exports.TemplateManagerTemplateComponent = TemplateManagerTemplateComponent;
//# sourceMappingURL=templateManager.template.component.js.map