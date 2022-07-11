package lk.ijse.repo;

import lk.ijse.entity.BookingRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingCarRequestRepo extends JpaRepository<BookingRequest, String> {
}
