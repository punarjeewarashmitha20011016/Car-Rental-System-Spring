package lk.ijse.service;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.DriverDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface BookingCarService {
    String generateBookingId();

    void bookingACar(BookingDTO dto);

    void updateBookingForFinal(BookingDTO dto);

    void deleteABooking(String boId);

    BookingDTO searchBooking(String boId);

    List<BookingDTO> getAll();

    DriverDTO getAvailableDriver();

    void updateBookingPaymentsByCheckingCarDamagedOrNot(BookingDTO dto);
}
