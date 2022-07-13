package lk.ijse.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
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
public class BookingRequestDTO {
    private String boId;
    private String cusNic;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate date;
    private String time;
    private double cost;
    private List<BookingRequestDetailsDTO> bookingDetails;
    private BookingRequestPaymentsDTO payments;
}
