package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@IdClass(BookingCar_Pk.class)
public class BookingRequestDetails implements Serializable {
    @Id
    private String bookingId;
    @Id
    private String car_RegNo;
    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.REFRESH})
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(referencedColumnName = "nic", nullable = true)
    private Driver driverNic;
    private String carType;
    private String rentalType;
    private LocalDate dateOfPickup;
    private String timeOfPickup;
    private String pickupVenue;
    private LocalDate returnedDate;
    private String returnedTime;
    private String returnedVenue;
    private double lossDamage;
    private double cost;

    @ManyToOne
    @JoinColumn(name = "bookingId", referencedColumnName = "boId", insertable = false, updatable = false)
    private BookingRequest bookingEntity;

    @ManyToOne
    @JoinColumn(name = "car_RegNo", referencedColumnName = "c_RegNo", insertable = false, updatable = false)
    private Car carEntity;
}
