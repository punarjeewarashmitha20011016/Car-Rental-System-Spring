package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String nic;
    private String name;
    private String nicPhoto;
    private String licenseNo;
    private String licensePhoto;
    private int contactNo;
    private String email;
    private String password;
}
