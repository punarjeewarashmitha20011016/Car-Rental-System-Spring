package lk.ijse.repo;

import lk.ijse.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin, String> {
    boolean existsAdminByEmailAndPassword(String email, String password);
}
