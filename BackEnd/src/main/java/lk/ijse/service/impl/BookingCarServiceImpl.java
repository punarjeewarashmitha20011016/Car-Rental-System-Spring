package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.BookingDetailsDTO;
import lk.ijse.dto.BookingPaymentsDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.*;
import lk.ijse.repo.*;
import lk.ijse.service.BookingCarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
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

    @Autowired
    private BookingCarRequestRepo bookingRequestRepo;

    @Autowired
    private BookingPaymentsRepo paymentsRepo;

    @Autowired
    private BookingRequestPaymentsRepo requestPaymentsRepo;

    @Override
    public void bookingACar(BookingDTO dto) {
        /*If admin accept the customer request this method invokes..And admin should send an email to the customer by informing that his/her request in confirmed*/
        if (repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Booking a Car failed");
        }
        System.out.println("Booking = " + dto.toString());
        System.out.println("Booking Details = " + dto.getBookingDetails().toString());

        repo.save(mapper.map(dto, Booking.class));
        if (dto.getPayments().getPaymentsId() == null) {
            throw new RuntimeException("Booking a Car failed");
        }
        paymentsRepo.save(mapper.map(dto.getPayments(), BookingPayments.class));
        requestPaymentsRepo.deleteById(dto.getPayments().getPaymentsId());

        for (BookingDetailsDTO b : dto.getBookingDetails()
        ) {
            bookingCarDetailsRepo.save(mapper.map(b, BookingDetails.class));
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

        if (repo.existsById(dto.getBoId())) {
            /*Deleting the requested booking entity*/
            bookingRequestRepo.deleteById(dto.getBoId());
        }

    }

    @Override
    public void updateBookingForFinal(BookingDTO dto) {
        /*This will finalize the payment by updating the records*/
        if (!repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Booking Update failed");
        }
        repo.save(mapper.map(dto, Booking.class));

        if (dto.getPayments().getPaymentsId() == null) {
            throw new RuntimeException("Booking a Car failed");
        }
        paymentsRepo.save(mapper.map(dto.getPayments(), BookingPayments.class));

        List<BookingDetailsDTO> bookingList = dto.getBookingDetails();
        for (BookingDetailsDTO b : bookingList
        ) {
            bookingCarDetailsRepo.save(mapper.map(b, BookingDetails.class));
            Car car = mapper.map(carRepo.findById(b.getCar_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("Not Booked")) {
                throw new RuntimeException("Booking a Car failed");
            }
            /*Updating the car booked status to Not booked after returning the car*/
            car.setCarBookedOrNotStatus("Not Booked");
            /*Updating the mileage of the car*/
            car = updateMileageOfTheCarAccordingToTheTrip(car, b.getTripInKm(), b.getExtraKmDriven());
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
            if (b.getDamageStatus().equals("Damaged")) {
                car.setMaintenanceStatus("Under Maintenance");
            } else {
                car.setMaintenanceStatus("No Maintenance Required");
                dto.setCost(dto.getCost() - b.getLossDamage());
                dto.getPayments().setCost(dto.getPayments().getCost() - b.getLossDamage());
                repo.save(mapper.map(dto, Booking.class));
                updateBookingPaymentsByCheckingCarDamagedOrNot(dto.getPayments());
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
    public int getCountOfTotalBookingsOfTheDay() {
        Calendar cal = Calendar.getInstance();
        Date date = cal.getTime();
        List<BookingDTO> dtoList = mapper.map(repo.getAllByDate(LocalDate.parse(new SimpleDateFormat("yyyy-MM-dd").format(date))), new TypeToken<List<BookingDTO>>() {
        }.getType());
        int count = 0;
        for (int i = 0; i < dtoList.size(); i++) {
            count++;
        }
        return count;
    }

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

    public void updateBookingPaymentsByCheckingCarDamagedOrNot(BookingPaymentsDTO dto) {
        if (dto.getPaymentsId() == null) {
            throw new RuntimeException("Updating Payments Entity by returning loss damage when no damage occurred in the car");
        }
        paymentsRepo.save(mapper.map(dto, BookingPayments.class));
    }

    Car updateMileageOfTheCarAccordingToTheTrip(Car c, double tripInKm, double extraKmDriven) {
        Car car = c;
        double totalTripToUpdate = 0.0;
        if (extraKmDriven > c.getFreeMileage()) {
            totalTripToUpdate = tripInKm + extraKmDriven;
        } else {
            totalTripToUpdate = tripInKm;
        }
        car.setMileageInKm(car.getMileageInKm() + totalTripToUpdate);
        return car;
    }
}
