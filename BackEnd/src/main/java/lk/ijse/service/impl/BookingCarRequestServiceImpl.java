package lk.ijse.service.impl;

import lk.ijse.dto.BookingRequestDTO;
import lk.ijse.dto.BookingRequestDetailsDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.*;
import lk.ijse.repo.*;
import lk.ijse.service.BookingCarRequestService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BookingCarRequestServiceImpl implements BookingCarRequestService {
    @Autowired
    private BookingCarRequestRepo repo;

    @Autowired
    private BookingCarRequestDetailsRepo bookingCarDetailsRepo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private BookingRequestPaymentsRepo paymentsRepo;

    @Override
    public String generateBookingRequestId() {
        PageRequest request = PageRequest.of(0, 1, Sort.by("boId").descending());
        Booking map = mapper.map(repo.findAll(request), Booking.class);
        if (map.getBoId() != null) {
            int temp = Integer.parseInt(map.getBoId().split("-")[1]);
            temp = temp + 1;
            if (temp <= 9) {
                return "BO-00" + temp;
            } else if (temp <= 99) {
                return "BO-0" + temp;
            } else {
                return "BO-" + temp;
            }
        } else {
            return "BO-001";
        }
    }

    @Override
    public String generateBookingRequestPaymentsId() {
        PageRequest request = PageRequest.of(0, 1, Sort.by("paymentsId").descending());
        BookingRequestPayments map = mapper.map(repo.findAll(request), BookingRequestPayments.class);
        if (map.getBoId() != null) {
            int temp = Integer.parseInt(map.getPaymentsId().split("-")[1]);
            temp = temp + 1;
            if (temp <= 9) {
                return "POR-00" + temp;
            } else if (temp <= 99) {
                return "POR-0" + temp;
            } else {
                return "POR-" + temp;
            }
        } else {
            return "POR-001";
        }
    }

    @Override
    public void requestingABookingSave(BookingRequestDTO dto) {
        try {
            /*Customer Requesting a Booking = Pending*/
            if (repo.existsById(dto.getBoId())) {
                /*When request failed the loss waiver payments should be return to customer by delete the records of the payments request table*/
                /*paymentsRepo.deleteById(dto.getPayments().getPaymentsId());*/
                throw new RuntimeException("Booking a Car Request failed");
            }

            System.out.println("Booking Request= " + dto.toString());
            System.out.println("Booking Request Details = " + dto.getBookingDetails().toString());

            repo.save(mapper.map(dto, BookingRequest.class));

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
                bookingCarDetailsRepo.save(mapper.map(b, BookingRequestDetails.class));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void requestingABookingUpdate(BookingRequestDTO dto) {
        if (!repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Updating a Booking Request failed");
        }
        System.out.println("Booking Request= " + dto.toString());
        System.out.println("Booking Request Details = " + dto.getBookingDetails().toString());

        repo.save(mapper.map(dto, BookingRequest.class));
        List<BookingRequestDetailsDTO> bookingList = dto.getBookingDetails();

        paymentsRepo.save(mapper.map(dto.getPayments(), BookingRequestPayments.class));

        for (BookingRequestDetailsDTO b : bookingList
        ) {
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Not Booked") || car.getMaintenanceStatus().equals("Under Maintenance")) {
                throw new RuntimeException("Booking a Car failed Because this Car iss already booked or in Under Maintenance state");
            }
            if (b.getDriverNic() == null) {

            } else {
                DriverDTO driver = mapper.map(driverRepo.findById(b.getDriverNic()), DriverDTO.class);
                if (driver.getAvailableStatus().equals("Available")) {

                } else {
                    throw new RuntimeException("Booking a Car failed");
                }
            }
            bookingCarDetailsRepo.save(mapper.map(b, BookingRequestDetails.class));
        }
    }

    @Override
    public void deleteABookingRequest(String boId) {
        /*This invokes when admin decline the booking request or when admin accepts*/
        /*For decline = this invokes because the relevant request should by deleted from the entity and payments of loss damage should be returned by deleting the relevant record */
        /*For accepts = this invokes because the relevant booking request entity should be deleted as that entity should be saved in the booking entity and request payment should be deleted*/

        /*After declining admin should notify customer with an email with the fact that leads to decline*/

        if (!repo.existsById(boId)) {
            throw new RuntimeException("Deleting Booking Request failed");
        }

        BookingRequestDTO bookingRequestDTO = searchRequestBooking(boId);
        if (!paymentsRepo.existsById(bookingRequestDTO.getPayments().getPaymentsId())) {
            throw new RuntimeException("Deleting Booking Request failed");
        }
        paymentsRepo.deleteById(bookingRequestDTO.getPayments().getPaymentsId());
        repo.deleteById(boId);
    }

    @Override
    public BookingRequestDTO searchRequestBooking(String boId) {
        if (!repo.existsById(boId)) {
            throw new RuntimeException("Booking Request Search failed");
        }
        return mapper.map(repo.findById(boId), BookingRequestDTO.class);
    }

    @Override
    public List<BookingRequestDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<BookingRequestDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO getAvailableDriver() {
        List<DriverDTO> driverDTOList = mapper.map(driverRepo.findAllByAvailableStatus("available"), new TypeToken<List<DriverDTO>>() {
        }.getType());
        for (DriverDTO dto : driverDTOList
        ) {
            return dto;
        }
        throw new RuntimeException("No driver available for booking");
    }
}
