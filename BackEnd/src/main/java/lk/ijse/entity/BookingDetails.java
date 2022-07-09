package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import sun.util.resources.LocaleData;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@IdClass(BookingCar_Pk.class)
public class BookingDetails {
    @Id
    private String boId;
    @Id
    private String c_RegNo;
    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(referencedColumnName = "nic")
    private Driver driverNic;
    private String carType;
    private LocalDate pickupDate;
    private String pickupTime;
    private String pickupVenue;
    private LocalDate returnedDate;
    private String returnTime;
    private String returnedVenue;
    private double lossDamage;
    private double cost;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "boId", referencedColumnName = "boId", insertable = false, updatable = false)
    private Booking booking;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "c_RegNo", referencedColumnName = "c_RegNo", insertable = false, updatable = false)
    private Car car;
}
