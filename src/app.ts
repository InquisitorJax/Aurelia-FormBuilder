import {StaffMember, WorkOrderFeedback} from './Models/Models';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';


export class App {
    message: string;
    staffMember : StaffMember;
    workOrderFeedback : WorkOrderFeedback;

    constructor() {
        this.message = 'Oh hai';
    }

    exclaim() {
        this.message += '!!!';
    }
    
    
}