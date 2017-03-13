import { Program } from "./program";
import { FileItem } from 'ng2-file-upload';
import { OrgUnit } from "./orgunit";

export class NewTemplateState {
    file: FileItem;
    programs: Array<Program>=[];
    orgUnit: OrgUnit;
    templateName: string = "";
}