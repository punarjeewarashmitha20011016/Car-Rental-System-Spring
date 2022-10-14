package lk.ijse.service;

import lk.ijse.dto.AdminDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService {
    void save(AdminDTO dto);

    void update(AdminDTO dto);

    void delete(String nic);

    List<AdminDTO> getAll();

    AdminDTO search(String nic);

    boolean checkAdminLogin(String email, String password);
}
