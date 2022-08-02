package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class CarMileageCheck {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String regNo;
    private double initialMileage;
    private double nextServiceMileage;

    public CarMileageCheck(String regNo, double initialMileage, double nextServiceMileage) {
        this.regNo = regNo;
        this.initialMileage = initialMileage;
        this.nextServiceMileage = nextServiceMileage;
    }
}
