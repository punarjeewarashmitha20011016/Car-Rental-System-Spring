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
public class CarScheduleDTO {
    private String c_RegNo;
    private String bookedStatus;
    private LocalDate bookedDate;
    private String bookedTime;
    private LocalDate returnedDate;
    private String returnedTime;
}
