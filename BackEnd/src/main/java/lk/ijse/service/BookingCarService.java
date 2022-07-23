package lk.ijse.service;

import lk.ijse.dto.BookingDTO;
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

    int getCountOfTotalBookingsOfTheDay();

    String generateBookingId();
}
