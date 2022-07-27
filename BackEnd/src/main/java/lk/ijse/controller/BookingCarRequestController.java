package lk.ijse.controller;

import lk.ijse.dto.BookingRequestDTO;
import lk.ijse.dto.BookingRequestPaymentsDTO;
import lk.ijse.dto.PendingBookingsDTO;
import lk.ijse.service.BookingCarRequestService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RequestMapping(path = "bookingCarRequestController")
@RestController
@CrossOrigin
public class BookingCarRequestController {
    @Autowired
    private BookingCarRequestService bookingCarService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, path = "placeBookingRequest")
    @ResponseStatus(HttpStatus.CREATED)
    ResponseUtil saveBooking(@RequestPart("dto") BookingRequestDTO dto, @RequestPart("lossDamageWaiverSlip") MultipartFile lossDamageWaiver) {
        BookingRequestPaymentsDTO payments = dto.getPayments();
        MultipartFile file = saveAnUpdateFile(lossDamageWaiver);
        payments.setLossDamageWaiverPaymentSlip(file.getOriginalFilename());
        dto.setBookingDetails(dto.getBookingDetails());
        bookingCarService.requestingABookingSave(dto);
        return new ResponseUtil(200, "Booking Request Saved Successfully", dto);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, path = "pendingBookingRequestSave")
    @ResponseStatus(HttpStatus.CREATED)
    ResponseUtil savePendingBooking(@RequestBody PendingBookingsDTO dto) {
        bookingCarService.requestingAPendingBookingSave(dto);
        return new ResponseUtil(200, "Pending Booking Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody BookingRequestDTO dto) {
        bookingCarService.requestingABookingUpdate(dto);
        return new ResponseUtil(200, "Booking Request Updated Successfully", dto);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, path = "updatePendingBooking")
    ResponseUtil updatePendingBooking(@RequestBody PendingBookingsDTO dto) {
        /*bookingCarService.*/
        return new ResponseUtil(200, "Pending Booking Updated Successfully", dto);
    }

    @DeleteMapping(params = {"boId"}, produces = MediaType.APPLICATION_JSON_VALUE,path = "deleteBookingRequest")
    ResponseUtil delete(@RequestParam String boId) {
        bookingCarService.deleteABookingRequest(boId);
        return new ResponseUtil(200, "Booking Request deleted Successfully", null);
    }

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", bookingCarService.getAll());
    }

    @GetMapping(path = "search", params = {"boId"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String boId) {
        return new ResponseUtil(200, "Booking Request Searched Successfully", bookingCarService.searchRequestBooking(boId));
    }

    @GetMapping(path = "generateBookingId", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil generateBookingId() {
        return new ResponseUtil(200, "Booking Request Id generated Successfully", bookingCarService.generateBookingRequestId());
    }

    @GetMapping(path = "generatePaymentsRequestId", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil generatePaymentsRequestId() {
        return new ResponseUtil(200, "Payments Request Id generated Successfully", bookingCarService.generateBookingRequestPaymentsId());
    }

    @GetMapping(path = "checkAvailableDriver", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil checkAvailableDriverForBooking() {
        return new ResponseUtil(200, "Driver is randomly Selected for booking Successfully", bookingCarService.getAvailableDriver());
    }

    private MultipartFile saveAnUpdateFile(MultipartFile file1) {
        MultipartFile file = file1;
        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            file.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file.getOriginalFilename()));
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
        }
        return file;
    }
}
