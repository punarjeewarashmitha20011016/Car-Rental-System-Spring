package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CusBookingsDTO {
    private String boId;
    private String reqStatus;
    private String cusNic;
    private LocalDate bookedDate;
    private String bookedTime;
    private double cost;
    private List<CusOwnBookingDetailsDTO> details;
}
