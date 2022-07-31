package lk.ijse.repo;

import lk.ijse.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepo extends JpaRepository<Driver, String> {
    Driver findAllByAvailableStatus(String status);

    boolean existsDriverByEmailAndPassword(String email, String password);

    @Query(value = "SELECT COUNT(nic) from Driver", nativeQuery = true)
    int countAllDrivers();

    Driver findByEmail(String email);
}
