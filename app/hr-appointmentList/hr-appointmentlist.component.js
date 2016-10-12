"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var appointment_service_1 = require('./appointment.service');
var hrAppointmentList = (function () {
    function hrAppointmentList(appointmentService) {
        this.appointmentService = appointmentService;
    }
    hrAppointmentList.prototype.getAppointments = function () {
        var _this = this;
        this.appointmentService.getAppointments()
            .then(function (appointments) { return _this.appointments = appointments; });
    };
    hrAppointmentList.prototype.ngOnInit = function () {
        this.getAppointments(); //get data from getAppointments() API
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], hrAppointmentList.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], hrAppointmentList.prototype, "baseClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], hrAppointmentList.prototype, "appointmentClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], hrAppointmentList.prototype, "subjectClass", void 0);
    hrAppointmentList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hr-appointment-list',
            templateUrl: 'hr-appointmentlist.component.html',
            styleUrls: ['hr-appointmentlist.component.css'] // style of component
        }), 
        __metadata('design:paramtypes', [appointment_service_1.AppointmentService])
    ], hrAppointmentList);
    return hrAppointmentList;
}());
exports.hrAppointmentList = hrAppointmentList;
//# sourceMappingURL=hr-appointmentlist.component.js.map