package lk.ijse.repo;

import lk.ijse.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver, String> {
    Driver findAllByAvailableStatus(String status);
}
