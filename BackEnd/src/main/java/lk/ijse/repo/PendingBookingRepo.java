package lk.ijse.repo;

import lk.ijse.entity.PendingBooking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface PendingBookingRepo extends JpaRepository<PendingBooking, String> {
    int countAllByDate(LocalDate date);
}
