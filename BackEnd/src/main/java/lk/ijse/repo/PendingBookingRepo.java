package lk.ijse.repo;

import lk.ijse.entity.PendingBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PendingBookingRepo extends JpaRepository<PendingBooking,String> {
}
