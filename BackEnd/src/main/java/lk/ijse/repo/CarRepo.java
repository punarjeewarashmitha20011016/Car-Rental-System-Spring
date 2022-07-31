package lk.ijse.repo;

import lk.ijse.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarRepo extends JpaRepository<Car, String> {
    @Query(value = "SELECT COUNT(c_RegNo) from Car", nativeQuery = true)
    int countAllCars();

    int countAllByMaintenanceStatus(String status);
}
