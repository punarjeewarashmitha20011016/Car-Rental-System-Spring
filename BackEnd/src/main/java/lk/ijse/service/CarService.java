package lk.ijse.service;

import lk.ijse.dto.CarDTO;
import lk.ijse.dto.CarScheduleDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface CarService {
    void save(CarDTO dto);

    void update(CarDTO dto);

    void delete(String nic);

    List<CarDTO> getAll();

    CarDTO search(String nic);

    List<CarScheduleDTO> carScheduleList();

    int countAllCars();

    int countAllCarsUnderAndNeedMaintenance();
}
