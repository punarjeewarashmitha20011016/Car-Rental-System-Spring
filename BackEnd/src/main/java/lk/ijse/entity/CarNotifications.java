package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class CarNotifications {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String regNo;
    private String message;

    public CarNotifications(String regNo, String message) {
        this.regNo = regNo;
        this.message = message;
    }
}
