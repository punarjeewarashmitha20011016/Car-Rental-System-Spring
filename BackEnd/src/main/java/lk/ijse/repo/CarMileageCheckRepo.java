package lk.ijse.repo;

import lk.ijse.entity.CarMileageCheck;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarMileageCheckRepo extends JpaRepository<CarMileageCheck, String> {
    CarMileageCheck findByRegNo(String regNo);

    boolean existsByRegNo(String regNo);

    void deleteByRegNo(String regNo);
}
