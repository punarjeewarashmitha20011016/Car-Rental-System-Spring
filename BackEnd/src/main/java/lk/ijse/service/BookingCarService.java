package lk.ijse.service;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CarNotificationsDTO;
import lk.ijse.dto.CarScheduleDTO;
import lk.ijse.dto.DriverScheduleDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface BookingCarService {
    void bookingACar(BookingDTO dto);

    void updateBooking(BookingDTO dto);

    void deleteABooking(String boId);

    BookingDTO searchBooking(String boId);

    List<BookingDTO> getAll();

    double getDailyIncome();

    double getMonthlyIncome();

    double getAnnualIncome();

    String generateBookingId();

    String generateBookingPaymentsId();

    int getCountOfTotalBookingsOfTheDay();

    int getCountOfTodayPendingBookings();

    List<CarScheduleDTO> getCarSchedule();

    List<DriverScheduleDTO> getDriverSchedule(String nic);

    List<CarNotificationsDTO> getAdminNotifications();

}
