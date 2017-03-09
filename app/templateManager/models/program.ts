import {Status} from "./status";

export class Program {
    constructor(public id: string,
        public name: string,
        public code: string,
        public statuses: Array<Status>) {

    }
}