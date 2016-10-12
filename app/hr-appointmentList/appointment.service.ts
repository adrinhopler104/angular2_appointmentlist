import { Injectable }               from '@angular/core'

import { Appointment }              from './appointment';
import { APPOINTMENTS }             from './mock-appointments'


//AppointmentService Class for mock-service-data 
@Injectable()
export class AppointmentService {
    getAppointments(): Promise<Appointment[]> {
        return Promise.resolve(APPOINTMENTS);
    }

    getAppointmentsSlowly(): Promise<Appointment[]> {
        return new Promise<Appointment[]>(resolve =>
        setTimeout(resolve, 2000))
        .then(() => this.getAppointments());
    }
}
