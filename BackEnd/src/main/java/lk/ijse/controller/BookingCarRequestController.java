package lk.ijse.controller;

import lk.ijse.dto.BookingRequestDTO;
import lk.ijse.service.BookingCarRequestService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping(path = "bookingCarRequestController")
@RestController
@CrossOrigin
public class BookingCarRequestController {
    /*Test image file process in sanu sirs project*/
    @Autowired
    private BookingCarRequestService bookingCarService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    ResponseUtil saveBooking(@RequestBody BookingRequestDTO dto) {
        bookingCarService.requestingABookingSave(dto);
        return new ResponseUtil(200, "Booking Request Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody BookingRequestDTO dto) {
        bookingCarService.requestingABookingUpdate(dto);
        return new ResponseUtil(200, "Booking Request Updated Successfully", dto);
    }

    @DeleteMapping(params = {"boId"}, produces = MediaType.APPLICATION_JSON_VALUE)
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

    /*private MultipartFile saveAnUpdateLossWaiverPaymentSlip(DriverDTO dto) {
     *//*Put an alert in front end to *//*
        MultipartFile file = (MultipartFile) dto.getNicPhotoFile();
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
    }*/
}
