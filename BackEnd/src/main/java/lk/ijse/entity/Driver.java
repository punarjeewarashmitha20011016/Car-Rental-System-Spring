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
public class Driver {
    @Id
    private String nic;
    private String name;
    private String licenseNo;
    private String licensePhoto;
    private String nicPhoto;
    private int contactNo;
    private String address;
    private String availableStatus;
    private String email;
    private String password;

    @OneToMany(mappedBy = "driverNic", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<BookingDetails> bookingDetails;

    @OneToMany(mappedBy = "driverNic", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<BookingRequestDetails> bookingRequestDetails;
}
