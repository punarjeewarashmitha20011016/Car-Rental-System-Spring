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
    private String boId;
    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(referencedColumnName = "nic", name = "cusNic")
    private Customer cusNic;
    private LocalDate date;
    private String time;
    private double cost;
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE}, mappedBy = "bookingEntity")
    @NotFound(action = NotFoundAction.IGNORE)
    private List<BookingRequestDetails> bookingDetails;
}