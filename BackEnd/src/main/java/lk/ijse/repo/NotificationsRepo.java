package lk.ijse.repo;

import lk.ijse.entity.Notifications;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationsRepo extends JpaRepository<Notifications, String> {
    void deleteByBoId(String boId);

    boolean existsByBoId(String boId);
}
