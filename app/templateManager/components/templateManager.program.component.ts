import { Component, Input, ElementRef } from "@angular/core";
import { Program } from "../models/program";
import { Status } from "../models/status";
import {NewTemplateState} from "../models/newtemplatestate";

declare var window: any;

@Component({
    selector: "program-template",
    templateUrl: window.serverSideSettings.appPath +
        '/AdminSite/app/templateManager/views/templateManager.program.view.html'
})
export class TemplateManagerProgramComponent {
    @Input()
    newTemplateState: NewTemplateState;
    //currentProgramIndex: number;
    //currentProgram: Program;
    public programs: Array<Program> = [
        new Program("DDD",
            "TestProgram1",
            "Some code1",
            [new Status("TestStatus11"), new Status("TestStatus12"), new Status("TestStatus13")]),
        new Program("EEE",
            "TestProgram2",
            "Some code2",
            [new Status("TestStatus21"), new Status("TestStatus22"), new Status("TestStatus23")]),
        new Program("CCC",
            "TestProgram3",
            "Some code3",
            [new Status("TestStatus31"), new Status("TestStatus32"), new Status("TestStatus33")])
    ];

    constructor(private element: ElementRef) {

    }

    ngOnInit() {
        //this.currentProgramIndex = this.newTemplateState.programs.length - 1;
        //this.currentProgram = this.newTemplateState[this.currentProgramIndex];

        //let select: any = document.getElementById("selectProgram" + this.currentProgramIndex.toString()) as HTMLSelectElement;
        //alert(select);
        //select.addEventListener('change',
        //    () => {
        //        var index = select.selectedIndex;
        //        alert(index);
        //        this.newTemplateState.programs[this.currentProgramIndex] = this.programs[index];
        //        this.currentProgram = this.newTemplateState[this.currentProgramIndex];
        //    });
        //let select: any = document.getElementById("selectProgram") as HTMLSelectElement;
        //select.addEventListener('change'), () => {
        //    var index = select.selectedIndex;
        //    alert(index);
        //    //this.newTemplateState.programs[this.currentProgramIndex] = this.programs[index];
        //    //this.currentProgram = this.newTemplateState[this.currentProgramIndex];
        //}
    }

    public addProgram() {
        this.newTemplateState.programs.push(this.programs[0]);
        let select: any = document.getElementById("selectProgram") as HTMLSelectElement;
        select.addEventListener('change'), () => {
            var index = select.selectedIndex;
            alert(index);
            //this.newTemplateState.programs[this.currentProgramIndex] = this.programs[index];
            //this.currentProgram = this.newTemplateState[this.currentProgramIndex];
        }
    }
    public updateListener() {
        alert("Update");
    }
}
