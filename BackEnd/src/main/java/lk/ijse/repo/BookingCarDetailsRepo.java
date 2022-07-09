package lk.ijse.repo;

import lk.ijse.entity.BookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingCarDetailsRepo extends JpaRepository<BookingDetails, String> {
}
