import { Component, Input } from '@angular/core';
import {Program} from '../models/program';

declare var window: any;


@Component({
    selector: "status-select",
    templateUrl: window.serverSideSettings.appPath +
    '/AdminSite/app/templateManager/views/templateManager.status-select.view.html'
})
export class StatusSelectComponent {
    currentProgram: Program;
    @Input() originalProgram: Program;
}