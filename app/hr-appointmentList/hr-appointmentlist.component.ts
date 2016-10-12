import { Component, OnInit, Input } 		from '@angular/core';
import { Appointment }                      from './appointment';

import { AppointmentService }               from './appointment.service';

@Component({
    moduleId: module.id,
    selector: 'hr-appointment-list',                                                                // selector of component
    templateUrl: 'hr-appointmentlist.component.html',                                               // view of component
    styleUrls: ['hr-appointmentlist.component.css']                                                 // style of component
})

export class hrAppointmentList implements OnInit{

    @Input() title              : string;                                                           
    @Input() baseClass          : string;
    @Input() appointmentClass   : string;
    @Input() subjectClass       : string;
    appointments: Appointment[];

    constructor (
        private appointmentService: AppointmentService ) {

    }

    getAppointments(): void {
        this.appointmentService.getAppointments()
        .then( appointments => this.appointments = appointments );
    }

    ngOnInit(): void {
        this.getAppointments();                                                                     //get data from getAppointments() API
    }
}
