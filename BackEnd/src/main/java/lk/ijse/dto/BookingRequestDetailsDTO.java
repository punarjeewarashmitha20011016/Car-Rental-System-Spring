package lk.ijse.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class BookingRequestDetailsDTO {
    private String bookingId;
    private String car_RegNo;
    private String driverNic;
    private String carType;
    private String rentalType;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate dateOfPickup;
    private String timeOfPickup;
    private String pickupVenue;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate returnedDate;
    private String returnedTime;
    private String returnedVenue;
    private double lossDamage;
    private double cost;
}
