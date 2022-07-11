package lk.ijse.service;

import lk.ijse.dto.BookingRequestDTO;
import lk.ijse.dto.DriverDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface BookingCarRequestService {
    String generateBookingRequestId();

    void requestingABookingSave(BookingRequestDTO dto);

    void requestingABookingUpdate(BookingRequestDTO dto);

    void deleteABookingRequest(String boId);

    BookingRequestDTO searchRequestBooking(String boId);

    List<BookingRequestDTO> getAll();

    DriverDTO getAvailableDriver();
}
