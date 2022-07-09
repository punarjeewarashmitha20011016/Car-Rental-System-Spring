package lk.ijse.repo;

import lk.ijse.dto.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin, String> {
}
