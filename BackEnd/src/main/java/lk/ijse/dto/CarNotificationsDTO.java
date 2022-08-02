package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarNotificationsDTO {
    private int id;
    private String regNo;
    private String message;

    public CarNotificationsDTO(String regNo, String message) {
        this.regNo = regNo;
        this.message = message;
    }
}
