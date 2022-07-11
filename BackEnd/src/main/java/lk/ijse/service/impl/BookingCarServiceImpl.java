package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.BookingDetailsDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.Booking;
import lk.ijse.entity.BookingDetails;
import lk.ijse.entity.Car;
import lk.ijse.entity.Driver;
import lk.ijse.repo.BookingCarDetailsRepo;
import lk.ijse.repo.BookingCarRepo;
import lk.ijse.repo.CarRepo;
import lk.ijse.repo.DriverRepo;
import lk.ijse.service.BookingCarService;
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
public class BookingCarServiceImpl implements BookingCarService {
    @Autowired
    private BookingCarRepo repo;

    @Autowired
    private BookingCarDetailsRepo bookingCarDetailsRepo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private DriverRepo driverRepo;

    @Override
    public String generateBookingId() {
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
    public void bookingACar(BookingDTO dto) {
        if (repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Booking a Car failed");
        }
        System.out.println("Booking = " + dto.toString());
        System.out.println("Booking Details = " + dto.getBookingDetails().toString());

        repo.save(mapper.map(dto, Booking.class));
        for (BookingDetailsDTO b : dto.getBookingDetails()
        ) {
            bookingCarDetailsRepo.save(mapper.map(b, BookingDetails.class));
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Booked")) {
                throw new RuntimeException("Booking a Car failed");
            }
            car.setCarBookedOrNotStatus("Booked");
            carRepo.save(car);
            if (b.getDriverNic() == "") {

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

    }

    @Override
    public void updateBookingForFinal(BookingDTO dto) {
        if (!repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Booking Update failed");
        }
        repo.save(mapper.map(dto, Booking.class));
        List<BookingDetailsDTO> bookingList = dto.getBookingDetails();
        for (BookingDetailsDTO b : bookingList
        ) {
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Not Booked")) {
                throw new RuntimeException("Booking a Car failed");
            }
            car.setCarBookedOrNotStatus("Not Booked");
            if (b.getDriverNic() == "") {

            } else {
                DriverDTO driver = mapper.map(driverRepo.findById(b.getDriverNic()), DriverDTO.class);
                if (driver.getAvailableStatus().equals("Not Available")) {
                    driver.setAvailableStatus("Available");
                    driverRepo.save(mapper.map(driver, Driver.class));
                } else {
                    throw new RuntimeException("Booking a Car failed");
                }
            }
            carRepo.save(car);
        }
    }

    @Override
    public void deleteABooking(String boId) {
        if (!repo.existsById(boId)) {
            throw new RuntimeException("Deleting Booking failed");
        }
        repo.deleteById(boId);

    }

    @Override
    public BookingDTO searchBooking(String boId) {
        if (!repo.existsById(boId)) {
            throw new RuntimeException("Booking Search failed");
        }
        return mapper.map(repo.findById(boId), BookingDTO.class);
    }

    @Override
    public List<BookingDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<BookingDTO>>() {
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
