package lk.ijse.repo;

import lk.ijse.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingCarRepo extends JpaRepository<Booking, String> {
}
