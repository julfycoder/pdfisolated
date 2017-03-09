import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination';
import { FileUploadModule } from 'ng2-file-upload';

import { TemplateManagerComponent } from './components/templateManager.component';
import { TemplateManagerRoutingModule, templateManagerRoutingComponents } from './templateManager.routing';
import {TemplateManagerProgramComponent} from './components/templateManager.program.component';


@NgModule({
	imports: [BrowserModule, HttpModule, TemplateManagerRoutingModule, FormsModule, Ng2PaginationModule, FileUploadModule],
	declarations: [templateManagerRoutingComponents, TemplateManagerProgramComponent ],
	bootstrap: [TemplateManagerComponent]
})

export class TemplateManagerModule {
}
