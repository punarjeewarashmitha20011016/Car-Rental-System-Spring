package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class DriverScheduleDTO {
    private String nic;
    private String name;
    private String boId;
    private String availableStatus;
    private LocalDate pickupDate;
    private String pickupTime;
    private LocalDate returnedDate;
    private String returnedTime;
}
