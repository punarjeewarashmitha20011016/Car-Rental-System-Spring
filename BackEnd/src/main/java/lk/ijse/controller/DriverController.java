package lk.ijse.controller;

import lk.ijse.dto.DriverDTO;
import lk.ijse.service.DriverService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping(path = "driver")
@CrossOrigin
public class DriverController {
    @Autowired
    private DriverService driverService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestBody DriverDTO dto) throws URISyntaxException {
        /*======================================*/
        MultipartFile file = saveAnUpdateFile(dto);
        /*======================================*/
        dto.setLicensePhoto("uploads/" + file.getOriginalFilename());
        driverService.save(dto);
        return new ResponseUtil(200, "Driver Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody DriverDTO dto) {
        /*======================================*/
        MultipartFile file = saveAnUpdateFile(dto);
        /*======================================*/
        dto.setLicensePhoto("uploads/" + file.getOriginalFilename());
        driverService.update(dto);
        return new ResponseUtil(200, "Driver Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String nic) {
        driverService.delete(nic);
        return new ResponseUtil(200, "Driver delete Successfully", null);
    }

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", driverService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Driver Searched Successfully", driverService.search(nic));
    }

    private MultipartFile saveAnUpdateFile(DriverDTO dto) {
        MultipartFile file = (MultipartFile) dto.getLicensePhotoFile();
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
