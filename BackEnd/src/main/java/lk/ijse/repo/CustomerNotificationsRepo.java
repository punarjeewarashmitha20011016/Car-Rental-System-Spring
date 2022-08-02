package lk.ijse.repo;

import lk.ijse.entity.CustomerNotifications;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerNotificationsRepo extends JpaRepository<CustomerNotifications, String> {
    void deleteByBoId(String boId);

    boolean existsByBoId(String boId);
}
