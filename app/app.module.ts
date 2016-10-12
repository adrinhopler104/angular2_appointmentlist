import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';
import { FormsModule } 			from '@angular/forms';

import { AppComponent } 		from './app.component';
import { hrAppointmentList }	from './hr-appointmentList/hr-appointmentlist.component';

import { AppointmentService }	from './hr-appointmentList/appointment.service';

@NgModule( {
  imports: [ BrowserModule,
  			 FormsModule
			],
  declarations: [	
  					AppComponent,
					hrAppointmentList,
  				],
  				
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
