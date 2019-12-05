package org.taktik.icure.services.external.rest.v1.dto.be.mikrono;

import java.util.List;


public class MikronoAppointmentTypeRestsDto {
    private List<MikronoAppointmentTypeRestDto> appointmentTypes;

    public List<MikronoAppointmentTypeRestDto> getAppointmentTypes() {
        return appointmentTypes;
    }

    public void setAppointmentTypes(List<MikronoAppointmentTypeRestDto> appointmentTypes) {
        this.appointmentTypes = appointmentTypes;
    }
}
