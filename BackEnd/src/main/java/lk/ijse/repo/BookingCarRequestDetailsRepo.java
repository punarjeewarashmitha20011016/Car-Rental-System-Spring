package lk.ijse.repo;

import lk.ijse.entity.BookingRequestDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingCarRequestDetailsRepo extends JpaRepository<BookingRequestDetails, String> {
}
