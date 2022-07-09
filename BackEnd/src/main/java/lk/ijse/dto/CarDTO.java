package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarDTO {
    private String c_RegNo;
    private String brand;
    private String type;
    private String transmissionType;
    private String fuelType;
    private String images;
    private int noOfPassengers;
    private double freeMileage;
    private double priceForExtraKm;
    private double dailyRate;
    private double monthlyRate;
    private String carBookedOrNotStatus;
}
