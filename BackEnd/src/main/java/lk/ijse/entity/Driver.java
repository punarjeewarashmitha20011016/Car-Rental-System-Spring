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
public class Driver{
    @Id
    private String nic;
    private String licenseNo;
    private String licensePhoto;
    private String nicPhoto;
    private int contactNo;
    private String address;
}
