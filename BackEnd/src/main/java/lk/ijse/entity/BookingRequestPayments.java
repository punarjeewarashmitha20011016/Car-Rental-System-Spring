package lk.ijse.entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class BookingRequestPayments {
    @Id
    private String paymentsId;
    @OneToOne(cascade = {CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(referencedColumnName = "boId")
    private BookingRequest boId;
    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(referencedColumnName = "nic")
    private Customer cusNic;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate dateOfPayment;
    private String timeOfPayment;
    private double lossDamageWaiver;
    private String lossDamageWaiverPaymentSlip;
    private double cost;
}
