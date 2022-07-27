package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class BookingRequest {
    @Id
    @Column(name = "boId", unique = true, nullable = false)
    private String boId;
    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(referencedColumnName = "nic")
    private Customer cusNic;
    private LocalDate date;
    private String time;
    private double cost;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "bookingEntity")
    @NotFound(action = NotFoundAction.IGNORE)
    private List<BookingRequestDetails> bookingDetails;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "paymentsId")
    private BookingRequestPayments payments;
}
