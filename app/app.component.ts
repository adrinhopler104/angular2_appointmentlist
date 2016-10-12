import { Component } 		        from '@angular/core';
import { AppointmentService}    from './hr-appointmentList/appointment.service';

import { hrAppointmentList}     from './hr-appointmentList/hr-appointmentlist.component';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AppointmentService]
})
export class AppComponent { 
  
}

