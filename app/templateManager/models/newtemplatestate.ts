import { Program } from "./program";
import { FileItem } from 'ng2-file-upload';

export class NewTemplateState {
    file: FileItem;
    programs: Array<Program>=[];
    orgUnit: string="";
    templateName: string = "";
}