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
public class BookingRequestPaymentsDTO {
    private String paymentsId;
    private String boId;
    private String cusNic;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate dateOfPayment;
    private String timeOfPayment;
    private double lossDamageWaiver;
    private String lossDamageWaiverPaymentSlip;
    private double cost;
}
