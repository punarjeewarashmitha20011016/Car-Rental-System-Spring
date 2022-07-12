package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.service.CustomerService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping(path = "customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestBody CustomerDTO dto) {
        /*======================================*//*
        MultipartFile licenseFile = saveAnUpdateFileForLicense(dto);
        MultipartFile nicFile = saveAnUpdateFileForNic(dto);
        *//*======================================*//*
        dto.setLicensePhoto("uploads/" + licenseFile.getOriginalFilename());
        dto.setNicPhoto("uploads/" + nicFile.getOriginalFilename());*/
        customerService.save(dto);
        return new ResponseUtil(200, "Customer Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody CustomerDTO dto) {
        /*======================================*/
        MultipartFile licenseFile = saveAnUpdateFileForLicense(dto);
        MultipartFile nicFile = saveAnUpdateFileForNic(dto);
        /*======================================*/
        dto.setLicensePhoto("uploads/" + licenseFile.getOriginalFilename());
        dto.setNicPhoto("uploads/" + nicFile.getOriginalFilename());
        customerService.update(dto);
        return new ResponseUtil(200, "Customer Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String nic) {
        customerService.delete(nic);
        return new ResponseUtil(200, "Customer delete Successfully", null);
    }

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", customerService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Customer Searched Successfully", customerService.search(nic));
    }

    private MultipartFile saveAnUpdateFileForLicense(CustomerDTO dto) {
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

    private MultipartFile saveAnUpdateFileForNic(CustomerDTO dto) {
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

    @GetMapping(path = "loginCheckCustomer", params = {"email", "password"}, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil checkAdminLogin(@RequestParam String email, @RequestParam String password) {
        return new ResponseUtil(200, "Customer Login Successful", customerService.checkCustomerLogin(email, password));
    }
}
