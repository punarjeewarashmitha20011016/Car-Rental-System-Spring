package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarImagesDTO {
    private String firstImage;
    private String secondImage;
    private String thirdImage;
    private String fourthImage;
}
