package lk.ijse.repo;

import lk.ijse.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface BookingCarRepo extends JpaRepository<Booking, String> {
    int countAllByDate(LocalDate date);
}
