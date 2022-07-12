package lk.ijse.service.impl;

import lk.ijse.dto.BookingRequestDTO;
import lk.ijse.dto.BookingRequestDetailsDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.Booking;
import lk.ijse.entity.BookingRequest;
import lk.ijse.entity.BookingRequestPayments;
import lk.ijse.entity.Car;
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
                return "BOR-00" + temp;
            } else if (temp <= 99) {
                return "BOR-0" + temp;
            } else {
                return "BOR-" + temp;
            }
        } else {
            return "BOR-001";
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
                return "PBR-00" + temp;
            } else if (temp <= 99) {
                return "PBR-0" + temp;
            } else {
                return "PBR-" + temp;
            }
        } else {
            return "PBR-001";
        }
    }

    @Override
    public void requestingABookingSave(BookingRequestDTO dto) {
        /*Customer Requesting a Booking = Pending*/
        if (repo.existsById(dto.getBoId())) {
            /*When request failed the loss waiver payments should be return to customer by delete the records of the payments request table*/
            paymentsRepo.deleteById(dto.getRequestPaymentsDTO().getPaymentsId());
            throw new RuntimeException("Booking a Car Request failed");
        }
        System.out.println("Booking Request= " + dto.toString());
        System.out.println("Booking Request Details = " + dto.getBookingDetails().toString());

        repo.save(mapper.map(dto, BookingRequest.class));
        List<BookingRequestDetailsDTO> bookingList = dto.getBookingDetails();

        paymentsRepo.save(mapper.map(dto.getRequestPaymentsDTO(), BookingRequestPayments.class));

        for (BookingRequestDetailsDTO b : bookingList
        ) {
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Booked")) {
                paymentsRepo.deleteById(dto.getRequestPaymentsDTO().getPaymentsId());
                throw new RuntimeException("Booking a Car failed");
            }
            if (b.getDriverNic() == "") {

            } else {
                DriverDTO driver = mapper.map(driverRepo.findById(b.getDriverNic()), DriverDTO.class);
                if (driver.getAvailableStatus().equals("Available")) {

                } else {
                    paymentsRepo.deleteById(dto.getRequestPaymentsDTO().getPaymentsId());
                    throw new RuntimeException("Booking a Car failed");
                }
            }
        }
    }

    @Override
    public void requestingABookingUpdate(BookingRequestDTO dto) {
        requestingABookingSave(dto);
    }

    @Override
    public void deleteABookingRequest(String boId) {
        /*This invokes when admin decline the booking request or when admin accepts*/
        /*For decline = this invokes because the relevant request should by deleted from the entity and payments of loss damage should be returned by deleting the relevant record */
        /*For accepts = this invokes because the relevant booking request entity should be deleted as that entity should be saved in the booking entity and request payment should be deleted*/
        if (!repo.existsById(boId)) {
            throw new RuntimeException("Deleting Booking Request failed");
        }
        repo.deleteById(boId);
        BookingRequestDTO bookingRequestDTO = searchRequestBooking(boId);
        if (!paymentsRepo.existsById(bookingRequestDTO.getRequestPaymentsDTO().getPaymentsId())) {
            throw new RuntimeException("Deleting Booking Request failed");
        }
        paymentsRepo.deleteById(bookingRequestDTO.getRequestPaymentsDTO().getPaymentsId());

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
