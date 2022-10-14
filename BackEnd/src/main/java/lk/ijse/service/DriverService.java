package lk.ijse.service;

import lk.ijse.dto.DriverDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DriverService {
    void save(DriverDTO dto);

    void update(DriverDTO dto);

    void delete(String nic);

    List<DriverDTO> getAll();

    DriverDTO search(String nic);

    boolean checkDriverLogin(String email, String password);

    int countAllDrivers();

    DriverDTO searchDriverByUsername(String userName);
}
