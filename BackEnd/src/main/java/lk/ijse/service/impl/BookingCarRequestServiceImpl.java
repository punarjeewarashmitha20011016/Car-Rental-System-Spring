package lk.ijse.service.impl;

import lk.ijse.dto.*;
import lk.ijse.entity.*;
import lk.ijse.repo.*;
import lk.ijse.service.BookingCarRequestService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BookingCarRequestServiceImpl implements BookingCarRequestService {
    @Autowired
    private BookingCarRequestRepo repo;

    @Autowired
    private BookingCarRequestDetailsRepo bookingCarDetailsRepo;

    @Autowired
    private PendingBookingRepo pendingBookingRepo;

    @Autowired
    private PendingBookingDetailsRepo pendingBookingDetailsRepo;

    @Autowired
    private PendingBookingPaymentsRepo pendingBookingPaymentsRepo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private BookingRequestPaymentsRepo paymentsRepo;

    @Autowired
    private CustomerNotificationsRepo notificationsRepo;

    @Override
    public void requestingABookingSave(BookingRequestDTO dto) {
        /*Customer Requesting a Booking = Pending*/
        if (repo.existsById(dto.getBoId())) {
            /*When request failed the loss waiver payments should be return to customer by delete the records of the payments request table*/
            /*paymentsRepo.deleteById(dto.getPayments().getPaymentsId());*/
            throw new RuntimeException("Booking a Car Request failed");
        }

        System.out.println("Booking Request= " + dto.toString());
        System.out.println("Booking Request Details = " + dto.getBookingDetails().toString());
        System.out.println("Payments = " + dto.getPayments().toString());
        BookingRequest req = mapper.map(dto, BookingRequest.class);
        System.out.println(req.toString());
        repo.save(req);

        List<BookingRequestDetailsDTO> bookingList = dto.getBookingDetails();

        paymentsRepo.save(mapper.map(dto.getPayments(), BookingRequestPayments.class));

        for (BookingRequestDetailsDTO b : bookingList
        ) {
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Booked") || car.getMaintenanceStatus().equals("Under Maintenance")) {
                paymentsRepo.deleteById(dto.getPayments().getPaymentsId());
                throw new RuntimeException("Booking a Car failed Because this Car iss already booked or in Under Maintenance state");
            }
            if (b.getDriverNic() == null) {

            } else {
                DriverDTO driver = mapper.map(driverRepo.findById(b.getDriverNic()), DriverDTO.class);
                if (driver.getAvailableStatus().equals("Available")) {

                } else {
                    paymentsRepo.deleteById(dto.getPayments().getPaymentsId());
                    throw new RuntimeException("Booking a Car failed");
                }
            }
        }
    }

    @Override
    public void requestingAPendingBookingSave(PendingBookingsDTO dto) {
        /*If admin accept the customer request this method invokes..And admin should send an email to the customer by informing that his/her request in confirmed*/
        if (!repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Booking a Car failed");
        }
        System.out.println("Pending Booking = " + dto.toString());
        System.out.println("Pending Booking Details = " + dto.getBookingDetails().toString());

        PendingBooking map = mapper.map(dto, PendingBooking.class);
        System.out.println("Pending Booking Entity = " + map.toString());
        pendingBookingRepo.save(map);
        if (dto.getPayments().getPaymentsId() == null) {
            throw new RuntimeException("Booking a Car failed");
        }
        pendingBookingPaymentsRepo.save(mapper.map(dto.getPayments(), PendingBookingPayments.class));
        paymentsRepo.deleteById(dto.getPayments().getPaymentsId());

        for (PendingBookingDetailsDTO b : dto.getBookingDetails()
        ) {
            pendingBookingDetailsRepo.save(mapper.map(b, PendingBookingDetails.class));
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Booked")) {
                throw new RuntimeException("Booking a Car failed");
            }

            car.setCarBookedOrNotStatus("Booked");
            carRepo.save(car);
            if (b.getDriverNic() == null) {

            } else {
                DriverDTO driver = mapper.map(driverRepo.findById(b.getDriverNic()), DriverDTO.class);
                if (driver.getAvailableStatus().equals("Available")) {
                    driver.setAvailableStatus("Not Available");
                    driverRepo.save(mapper.map(driver, Driver.class));
                } else {
                    throw new RuntimeException("Booking a Car failed");
                }
            }
        }

        if (pendingBookingRepo.existsById(dto.getBoId())) {
            /*Deleting the requested booking entity*/
            if (notificationsRepo.existsByBoId(dto.getBoId())) {
                notificationsRepo.deleteByBoId(dto.getBoId());
            }
            notificationsRepo.save(new CustomerNotifications(dto.getBoId(), dto.getBoId() + " Is Accepted. Collect Your Rental Car On Pickup Date"));
            repo.deleteById(dto.getBoId());
        }
    }

    @Override
    public void requestingABookingUpdate(BookingRequestDTO dto) {
        /*Customer Requested Booking Request Can Be Updated In Here*/
        if (!repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Updating a Booking Request failed");
        }
        System.out.println("Booking Request= " + dto.toString());
        System.out.println("Booking Request Details = " + dto.getBookingDetails().toString());
        System.out.println("PaymentsDto = " + dto.getPayments().toString());

        BookingRequest map = mapper.map(dto, BookingRequest.class);
        System.out.println("Booking : " + map.toString());
        System.out.println("Payments : " + map.getPayments().toString());

        repo.save(map);

        List<BookingRequestDetailsDTO> bookingList = dto.getBookingDetails();

        paymentsRepo.save(mapper.map(dto.getPayments(), BookingRequestPayments.class));

        for (BookingRequestDetailsDTO b : bookingList
        ) {
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Booked") || car.getMaintenanceStatus().equals("Under Maintenance")) {
                throw new RuntimeException("Booking a Car failed Because this Car is already booked or in Under Maintenance state");
            }
            if (b.getDriverNic() == null) {

            } else {
                DriverDTO driver = mapper.map(driverRepo.findById(b.getDriverNic()), DriverDTO.class);
                if (driver.getAvailableStatus().equals("Available")) {

                } else {
                    throw new RuntimeException("Booking a Car failed");
                }
            }
            /*bookingCarDetailsRepo.save(mapper.map(b, BookingRequestDetails.class));*/
        }
    }

    @Override
    public void deleteABookingRequest(String boId) {
        if (repo.existsById(boId)) {
            BookingRequestDTO request = mapper.map(repo.findById(boId), BookingRequestDTO.class);
            paymentsRepo.deleteById(request.getPayments().getPaymentsId());
            repo.deleteById(boId);
        } else {
            throw new RuntimeException("Booking Request Deleted Successfully");
        }
    }

    @Override
    public void deleteBookingRequestWhenDeclined(String boId) {
        /*This invokes when admin decline the booking request*/
        /*For decline = this invokes because the relevant request should by deleted from the entity and payments of loss damage should be returned by deleting the relevant record */
        /*For accepts = this invokes because the relevant booking request entity should be deleted as that entity should be saved in the booking entity and request payment should be deleted*/

        /*After declining admin should notify customer with an email with the fact that leads to decline*/
        try {
            if (!repo.existsById(boId)) {
                throw new RuntimeException("Deleting Booking Request failed");
            }

            BookingRequestDTO bookingRequestDTO = searchRequestBooking(boId);
            if (!paymentsRepo.existsById(bookingRequestDTO.getPayments().getPaymentsId())) {
                throw new RuntimeException("Deleting Booking Request failed");
            }
            notificationsRepo.save(new CustomerNotifications(boId, boId + " Is Declined. Because We Are Not Satisfied With Your Request..Please Try Again With A New Request"));
            System.out.println(bookingRequestDTO.getPayments().getPaymentsId());
            paymentsRepo.deleteById(bookingRequestDTO.getPayments().getPaymentsId());
            repo.deleteById(boId);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public BookingRequestDTO searchRequestBooking(String boId) {
        if (!repo.existsById(boId)) {
            throw new RuntimeException("Booking Request Search failed");
        }
        return mapper.map(repo.findById(boId), BookingRequestDTO.class);
    }

    @Override
    public PendingBookingsDTO searchPendingBooking(String boId) {
        if (pendingBookingRepo.existsById(boId)) {
            return mapper.map(pendingBookingRepo.findById(boId), PendingBookingsDTO.class);
        } else {
            throw new RuntimeException("Pending Booking Search Unsuccessful");
        }
    }

    @Override
    public CarDTO searchCarsForBooking(String regNo) {
        if (carRepo.existsById(regNo)) {
            return mapper.map(carRepo.findById(regNo), CarDTO.class);
        } else {
            throw new RuntimeException("Car Search Failed");
        }
    }

    @Override
    public List<BookingRequestDTO> getAll() {
        List<BookingRequestDTO> list = mapper.map(repo.findAll(), new TypeToken<List<BookingRequestDTO>>() {
        }.getType());
        return list;
    }

    public List<PendingBookingsDTO> getAllPendingBookings() {
        List<PendingBookingsDTO> list = mapper.map(pendingBookingRepo.findAll(), new TypeToken<List<PendingBookingsDTO>>() {
        }.getType());
        return list;
    }

    @Override
    public DriverDTO getAvailableDriver() {
        Driver available = driverRepo.findAllByAvailableStatus("Available");
        if (available != null) {
            return mapper.map(available, DriverDTO.class);
        } else {
            throw new RuntimeException("No driver available for booking");
        }
    }

    @Override
    public List<CustomerNotificationsDTO> getAllNotifications() {
        List<CustomerNotificationsDTO> map = mapper.map(notificationsRepo.findAll(), new TypeToken<List<CustomerNotificationsDTO>>() {
        }.getType());
        return map;
    }

    @Override
    public List<CusBookingsDTO> getCustomerOwnBookings(String nic) {
        List<PendingBookingsDTO> pendingList = mapper.map(pendingBookingRepo.findAll(), new TypeToken<List<PendingBookingsDTO>>() {
        }.getType());
        System.out.println(pendingList.toString());
        List<BookingRequestDTO> requestList = mapper.map(repo.findAll(), new TypeToken<List<BookingRequestDTO>>() {
        }.getType());
        List<CusBookingsDTO> list = new ArrayList<>();
        for (int i = 0; i < requestList.size(); i++) {
            if (requestList.get(i).getCusNic().equals(nic)) {
                List<CusOwnBookingDetailsDTO> details = mapper.map(requestList.get(i).getBookingDetails(), new TypeToken<List<CusOwnBookingDetailsDTO>>() {
                }.getType());
                list.add(new CusBookingsDTO(requestList.get(i).getBoId(), "Requested", requestList.get(i).getCusNic(), requestList.get(i).getDate(), requestList.get(i).getTime(), requestList.get(i).getCost(), details));
            }
        }

        for (int i = 0; i < pendingList.size(); i++) {
            if (pendingList.get(i).getCusNic().equals(nic)) {
                List<CusOwnBookingDetailsDTO> details = mapper.map(pendingList.get(i).getBookingDetails(), new TypeToken<List<CusOwnBookingDetailsDTO>>() {
                }.getType());
                list.add(new CusBookingsDTO(pendingList.get(i).getBoId(), "Pending", pendingList.get(i).getCusNic(), pendingList.get(i).getDate(), pendingList.get(i).getTime(), pendingList.get(i).getCost(), details));
            }
        }
        return list;
    }
}
