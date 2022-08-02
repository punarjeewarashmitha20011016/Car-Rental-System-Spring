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
public class CustomerNotifications {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String boId;
    private String message;

    public CustomerNotifications(String boId, String message) {
        this.boId = boId;
        this.message = message;
    }
}
