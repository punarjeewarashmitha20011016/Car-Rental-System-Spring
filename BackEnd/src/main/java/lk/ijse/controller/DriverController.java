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

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestPart("dto") DriverDTO dto, @RequestPart("nicPhoto") MultipartFile nicPhoto, @RequestPart("licensePhoto") MultipartFile licensePhoto) {
        MultipartFile licenseFile = saveAnUpdateFile(licensePhoto);
        MultipartFile nicFile = saveAnUpdateFile(nicPhoto);
        dto.setNicPhoto("uploads/" + nicFile.getOriginalFilename());
        dto.setLicensePhoto("uploads/" + licenseFile.getOriginalFilename());
        driverService.save(dto);
        return new ResponseUtil(200, "Driver Saved Successfully", dto);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestPart("dto") DriverDTO dto, @RequestPart("nicPhoto") MultipartFile nicPhoto, @RequestPart("licensePhoto") MultipartFile licensePhoto) {
        MultipartFile licenseFile = saveAnUpdateFile(licensePhoto);
        MultipartFile nicFile = saveAnUpdateFile(nicPhoto);
        dto.setNicPhoto("uploads/" + nicFile.getOriginalFilename());
        dto.setLicensePhoto("uploads/" + licenseFile.getOriginalFilename());
        driverService.update(dto);
        return new ResponseUtil(200, "Driver Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String nic) {
        driverService.delete(nic);
        return new ResponseUtil(200, "Driver delete Successfully", null);
    }

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", driverService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Driver Searched Successfully", driverService.search(nic));
    }
    @GetMapping(path = "searchDriverByUsername", params = {"userName"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil searchDriverByUsername(@RequestParam String userName) {
        return new ResponseUtil(200, "Driver Searched Successfully", driverService.searchDriverByUsername(userName));
    }

    @GetMapping(path = "loginCheckDriver", params = {"email", "password"})
    ResponseUtil checkDriverLogin(@RequestParam String email, @RequestParam String password) {
        return new ResponseUtil(200, "Driver Login Successful", driverService.checkDriverLogin(email, password));
    }

    @GetMapping(path = "countRegisteredDrivers")
    ResponseUtil countRegisteredDrivers() {
        return new ResponseUtil(200, "Count Registered Drivers Successfully", driverService.countAllDrivers());
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
