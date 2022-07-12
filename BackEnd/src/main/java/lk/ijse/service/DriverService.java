package lk.ijse.service;

import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.DriverScheduleDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface DriverService {
    void save(DriverDTO dto);

    void update(DriverDTO dto);

    void delete(String nic);

    List<DriverDTO> getAll();

    DriverDTO search(String nic);

    List<DriverScheduleDTO>getDriverScheduleList();
}
