package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String nic;
    private String licenseNo;
    private String licensePhoto;
    private String nicPhoto;
    private int contactNo;
    private String address;
    private String availableStatus;
    private Object licensePhotoFile;
    private Object nicPhotoFile;
}
