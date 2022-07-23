package lk.ijse.repo;

import lk.ijse.entity.PendingBookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PendingBookingDetailsRepo extends JpaRepository<PendingBookingDetails, String> {
}
