package lk.ijse.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embeddable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Embeddable
public class CarImages {
    private String firstImage;
    private String secondImage;
    private String thirdImage;
    private String fourthImage;
}
