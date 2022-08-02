package lk.ijse.controller;

import lk.ijse.dto.BookingDTO;
import lk.ijse.service.BookingCarService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping(path = "bookingCarController")
@RestController
@CrossOrigin
public class BookingCarController {

    /*Comes here when a request is accepted*/
    @Autowired
    private BookingCarService bookingCarService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    ResponseUtil saveBooking(@RequestBody BookingDTO dto) {
        bookingCarService.bookingACar(dto);
        return new ResponseUtil(200, "Booking Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody BookingDTO dto) {
        bookingCarService.updateBooking(dto);
        return new ResponseUtil(200, "Booking Updated Successfully", dto);
    }

    @DeleteMapping(params = {"boId"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String boId) {
        bookingCarService.deleteABooking(boId);
        return new ResponseUtil(200, "Booking deleted Successfully", null);
    }

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", bookingCarService.getAll());
    }

    @GetMapping(path = "search", params = {"boId"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String boId) {
        return new ResponseUtil(200, "Booking Searched Successfully", bookingCarService.searchBooking(boId));
    }

    @GetMapping(path = "generateBookingId", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil generateBookingId() {
        return new ResponseUtil(200, "Booking ID generated Successfully", bookingCarService.generateBookingId());
    }

    @GetMapping(path = "generatePaymentsId", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil generatePaymentsRequestId() {
        return new ResponseUtil(200, "Payments Id generated Successfully", bookingCarService.generateBookingPaymentsId());
    }

    @GetMapping(path = "getDailyIncome", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getDailyIncome() {
        return new ResponseUtil(200, "Daily Income Fetched Successfully", bookingCarService.getDailyIncome());
    }

    @GetMapping(path = "getMonthlyIncome", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getMonthlyIncome() {
        return new ResponseUtil(200, "Monthly Income Fetched Successfully", bookingCarService.getMonthlyIncome());
    }

    @GetMapping(path = "getAnnualIncome", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAnnualIncome() {
        return new ResponseUtil(200, "Annual Income Fetched Successfully", bookingCarService.getAnnualIncome());
    }

    @GetMapping(path = "getCountOfTodayBookings", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getCountOfTodayBookings() {
        return new ResponseUtil(200, "Today Booking Count generated Successfully", bookingCarService.getCountOfTotalBookingsOfTheDay());
    }

    @GetMapping(path = "getCountOfTodayPendingBookings", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getCountOfTodayPendingBookings() {
        return new ResponseUtil(200, "Today Pending Booking Count generated Successfully", bookingCarService.getCountOfTodayPendingBookings());
    }

    @GetMapping(path = "getCarSchedule", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getCarSchedule() {
        return new ResponseUtil(200, "Car Schedule Fetched Successfully", bookingCarService.getCarSchedule());
    }

    @GetMapping(path = "getDriverSchedule", produces = MediaType.APPLICATION_JSON_VALUE, params = {"nic"})
    ResponseUtil getDriverSchedule(@RequestParam("nic") String nic) {
        return new ResponseUtil(200, "Driver Schedule Fetched Successfully", bookingCarService.getDriverSchedule(nic));
    }

    @GetMapping(path = "getAllNotificationOfAdmin", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAllNotificationOfAdmin() {
        return new ResponseUtil(200, "Admin Notifications Fetched Successfully", bookingCarService.getAdminNotifications());
    }
}
