System.register(["@angular/core", "../../services/router.service", "../../services/http.service", "ng2-file-upload", "../models/pdfparsingresponse", "class-transformer", "../models/newtemplatestate"], function (exports_1, context_1) {
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
    var core_1, router_service_1, http_service_1, ng2_file_upload_1, pdfparsingresponse_1, class_transformer_1, newtemplatestate_1, uploadUrl, templateDictionariesUrl, TemplateManagerTemplateComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_service_1_1) {
                router_service_1 = router_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (pdfparsingresponse_1_1) {
                pdfparsingresponse_1 = pdfparsingresponse_1_1;
            },
            function (class_transformer_1_1) {
                class_transformer_1 = class_transformer_1_1;
            },
            function (newtemplatestate_1_1) {
                newtemplatestate_1 = newtemplatestate_1_1;
            }
        ],
        execute: function () {
            uploadUrl = '/admin/api/templatemanager/uploadpdftemplate';
            templateDictionariesUrl = '/admin/api/templatemanager/gettemplatedictionaries';
            TemplateManagerTemplateComponent = (function () {
                //-------------------------------
                function TemplateManagerTemplateComponent(routerService, httpService) {
                    var _this = this;
                    this.routerService = routerService;
                    this.httpService = httpService;
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: window.serverSideSettings.appPath + uploadUrl });
                    this.uploader.onCompleteItem = this.onUploadComplete.bind(this);
                    this.uploader.onErrorItem = this.onUploadError.bind(this);
                    httpService.get(templateDictionariesUrl).subscribe(function (o) {
                        _this.programs = o.programs;
                        _this.orgUnits = o.orgUnits;
                        _this.newTemplateState = new newtemplatestate_1.NewTemplateState();
                        _this.newTemplateState.programs.push(_this.programs[0]);
                        _this.newTemplateState.orgUnit = _this.orgUnits[0];
                    });
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
                        this.newTemplateState.orgUnit != null &&
                        this.newTemplateState.programs != null &&
                        this.newTemplateState.file != null;
                };
                TemplateManagerTemplateComponent.prototype.addProgram = function () {
                    var _this = this;
                    this.newTemplateState.programs.push(this.programs.find(function (p) { return _this.newTemplateState.programs.every(function (value) { return p.id != value.id; }); }));
                };
                TemplateManagerTemplateComponent.prototype.getProgramsWithoutSelected = function (program) {
                    if (this.newTemplateState.programs.length > 1) {
                        var currentProgramms = [];
                        var _loop_1 = function (p) {
                            if (p.id == program.id)
                                currentProgramms.push(p);
                            else if (this_1.newTemplateState.programs.every(function (value) { return value.id != p.id; }))
                                currentProgramms.push(p);
                        };
                        var this_1 = this;
                        for (var _i = 0, _a = this.programs; _i < _a.length; _i++) {
                            var p = _a[_i];
                            _loop_1(p);
                        }
                        return currentProgramms;
                    }
                    return this.programs;
                };
                TemplateManagerTemplateComponent.prototype.onProgramSelected = function (programIndex, selectedProgramIndex) {
                    this.newTemplateState.programs[programIndex] = this.programs[selectedProgramIndex];
                };
                TemplateManagerTemplateComponent.prototype.removeProgram = function (program) {
                    this.newTemplateState.programs = this.newTemplateState.programs.filter(function (value) { return value.id != program.id; });
                };
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
                __metadata("design:paramtypes", [router_service_1.RouterService, http_service_1.HttpService])
            ], TemplateManagerTemplateComponent);
            exports_1("TemplateManagerTemplateComponent", TemplateManagerTemplateComponent);
        }
    };
});
//# sourceMappingURL=templateManager.template.component.js.map