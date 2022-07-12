package lk.ijse.repo;

import lk.ijse.entity.BookingPayments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingPaymentsRepo extends JpaRepository<BookingPayments, String> {
}
