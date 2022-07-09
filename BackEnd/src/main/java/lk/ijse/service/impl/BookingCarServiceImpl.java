package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.entity.Booking;
import lk.ijse.entity.BookingDetails;
import lk.ijse.entity.Car;
import lk.ijse.repo.BookingCarRepo;
import lk.ijse.repo.CarRepo;
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
    private CarRepo carRepo;

    @Autowired
    private ModelMapper mapper;

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
        repo.save(mapper.map(dto, Booking.class));
        List<BookingDetails> bookingList = mapper.map(dto.getBookingDetails(), new TypeToken<List<BookingDetails>>() {
        }.getType());
        for (BookingDetails b : bookingList
        ) {
            Car car = mapper.map(carRepo.findById(b.getC_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("not booked")) {
                throw new RuntimeException("Booking a Car failed");
            }
            car.setCarBookedOrNotStatus("booked");
            carRepo.save(car);
        }
    }

    @Override
    public void updateBookingForFinal(BookingDTO dto) {
        if (!repo.existsById(dto.getBoId())) {
            throw new RuntimeException("Booking Update failed");
        }
        repo.save(mapper.map(dto, Booking.class));
        List<BookingDetails> bookingList = mapper.map(dto.getBookingDetails(), new TypeToken<List<BookingDetails>>() {
        }.getType());
        for (BookingDetails b : bookingList
        ) {
            Car car = mapper.map(carRepo.findById(b.getC_RegNo()), Car.class);
            if (car.getC_RegNo() == null || car.getCarBookedOrNotStatus().equals("booked")) {
                throw new RuntimeException("Booking a Car failed");
            }
            car.setCarBookedOrNotStatus("not booked");
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
        return mapper.map(repo.findAll(), new TypeToken<List<Booking>>() {
        }.getType());
    }
}
