package lk.ijse.repo;

import lk.ijse.entity.BookingPayments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;

public interface BookingPaymentsRepo extends JpaRepository<BookingPayments, String> {
    BookingPayments findAllByDateOfPayment(LocalDate date);

    @Query(value = "SELECT SUM(cost) FROM bookingpayments WHERE MONTH(dateOfPayment) = :month", nativeQuery = true)
    double findMonthlyIncome(@Param("month") int month);

    @Query(value = "SELECT SUM(cost) FROM bookingpayments WHERE YEAR(dateOfPayment) = :year", nativeQuery = true)
    double findAnnualIncome(@Param("year") int year);
}
