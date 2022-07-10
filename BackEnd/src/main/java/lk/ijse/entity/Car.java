package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
    private String c_RegNo;
    private String brand;
    private String type;
    private String transmissionType;
    private String fuelType;
    private String images;
    private int noOfPassengers;
    private String freeMileage;
    private double priceForExtraKm;
    private double dailyRate;
    private double monthlyRate;
    private String carBookedOrNotStatus;

}
