package lk.ijse.service;

import lk.ijse.dto.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface BookingCarRequestService {

    void requestingABookingSave(BookingRequestDTO dto);

    void requestingAPendingBookingSave(PendingBookingsDTO dto);

    void requestingABookingUpdate(BookingRequestDTO dto);

    void deleteABookingRequest(String boId);

    void deleteBookingRequestWhenDeclined(String boId);

    BookingRequestDTO searchRequestBooking(String boId);

    PendingBookingsDTO searchPendingBooking(String boId);

    CarDTO searchCarsForBooking(String regNo);

    List<BookingRequestDTO> getAll();

    List<PendingBookingsDTO> getAllPendingBookings();

    DriverDTO getAvailableDriver();

    List<CustomerNotificationsDTO> getAllNotifications();

    List<CusBookingsDTO> getCustomerOwnBookings(String nic);
}
