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
    @OneToOne(cascade = {CascadeType.DETACH,CascadeType.REFRESH})//mehema daala baluwada.? nh sir poddk ek explain krnnko ai ehm wenne oken  mkkd wenne kiyl
    @JoinColumn(referencedColumnName = "boId")
    private BookingRequest boId;
    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.REFRESH})//menna meken yanne update eka. meka balala hadanna sir ek tm aul ynne ok ain krhm hriynw eunt othnt oka ywnnonine// methana reqqirements monawada..?  payment entity ekt cusNic ek save krnn
    @JoinColumn(referencedColumnName = "nic")
    private Customer cusNic;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate dateOfPayment;
    private String timeOfPayment;
    private double lossDamageWaiver;
    private String lossDamageWaiverPaymentSlip;
    private double cost;
}
