package lk.ijse.repo;

import lk.ijse.entity.PendingBookingPayments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PendingBookingPaymentsRepo extends JpaRepository<PendingBookingPayments, String> {
}
