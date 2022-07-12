package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @OneToMany(mappedBy = "carEntity", cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
    List<BookingDetails> carList;
    @Id
    private String c_RegNo;
    private String brand;
    private String type;
    private String transmissionType;
    private String fuelType;
    @Embedded
    private CarImages images;
    private int noOfPassengers;
    private String freeMileage;
    private double priceForExtraKm;
    private double dailyRate;
    private double monthlyRate;
    private String carBookedOrNotStatus;
    private String maintenanceStatus;
}
