package lk.ijse.repo;

import lk.ijse.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface BookingCarRepo extends JpaRepository<Booking, String> {
    List<Booking> getAllByDate(LocalDate date);
}
