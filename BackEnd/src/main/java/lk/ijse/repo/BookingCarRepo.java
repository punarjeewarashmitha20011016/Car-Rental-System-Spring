package lk.ijse.repo;

import lk.ijse.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface BookingCarRepo extends JpaRepository<Booking, String> {
    List<Booking> getAllByDate(LocalDate date);

    Optional<Booking> findById(String id);
}
