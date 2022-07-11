package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String nic;
    private String name;
    private String nicPhoto;
    private String licenseNo;
    private String licensePhoto;
    private int contactNo;
    private String email;
    private String password;
    @OneToMany(mappedBy = "cusNic",cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
    List<Booking>bookings;
}
