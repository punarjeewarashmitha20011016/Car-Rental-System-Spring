package lk.ijse.controller;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.service.BookingCarService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RequestMapping(path = "bookingCarController")
@RestController
@CrossOrigin
public class BookingCarController {

    /*Comes here when a request is accepted*/

    /*Test image file process in sanu sirs project*/
    @Autowired
    private BookingCarService bookingCarService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    ResponseUtil saveBooking(@RequestBody BookingDTO dto) {
        bookingCarService.bookingACar(dto);
        return new ResponseUtil(200, "Booking Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody BookingDTO dto) {
        bookingCarService.updateBookingForFinal(dto);
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
        return new ResponseUtil(200, "Booking Id generated Successfully", bookingCarService.generateBookingId());
    }

    @GetMapping(path = "checkAvailableDriver", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil checkAvailableDriverForBooking() {
        return new ResponseUtil(200, "Driver is randomly Selected for booking Successfully", bookingCarService.generateBookingId());
    }

    private MultipartFile saveAnUpdateLossWaiverPaymentSlip(DriverDTO dto) {
        /*Put an alert in front end to */
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
    }
}
