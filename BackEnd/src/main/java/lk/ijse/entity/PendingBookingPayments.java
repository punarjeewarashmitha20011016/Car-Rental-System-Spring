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
public class PendingBookingPayments {
    @Id
    private String paymentsId;
    @OneToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(referencedColumnName = "boId", name = "boId")
    private PendingBooking boId;
    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(referencedColumnName = "nic", name = "cusNic")
    private Customer cusNic;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate dateOfPayment;
    private String timeOfPayment;
    private double lossDamageWaiver;
    private String lossDamageWaiverPaymentSlip;
    private double cost;
}
