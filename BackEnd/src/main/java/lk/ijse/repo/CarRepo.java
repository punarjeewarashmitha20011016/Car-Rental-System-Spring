package lk.ijse.repo;

import lk.ijse.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepo extends JpaRepository<Car, String> {
}
