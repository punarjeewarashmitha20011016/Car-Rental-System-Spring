package lk.ijse.repo;

import lk.ijse.entity.CarNotifications;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarNotificationsRepo extends JpaRepository<CarNotifications, String> {
    void deleteByRegNo(String car_regNo);
}
