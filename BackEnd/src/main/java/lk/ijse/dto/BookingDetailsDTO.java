package lk.ijse.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import sun.util.resources.LocaleData;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class BookingDetailsDTO {
    private String boId;
    private String c_RegNo;
    private String driverNic;
    private String carType;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocaleData pickupDate;
    private String pickupTime;
    private String pickupVenue;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocaleData returnedDate;
    private String returnTime;
    private String returnedVenue;
    private double lossDamage;
    private double cost;
}
