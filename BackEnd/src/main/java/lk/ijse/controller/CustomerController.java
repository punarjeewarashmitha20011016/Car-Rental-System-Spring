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

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestPart("dto") CustomerDTO dto, @RequestPart("nicPhoto") MultipartFile nicPhoto, @RequestPart("licensePhoto") MultipartFile licensePhoto) {
        System.out.println("Post Request");
        System.out.println(dto.toString());
        MultipartFile licenseFile = saveAnUpdateFile(licensePhoto);
        MultipartFile nicFile = saveAnUpdateFile(nicPhoto);
        dto.setNicPhoto("uploads/" + nicFile.getOriginalFilename());
        dto.setLicensePhoto("uploads/" + licenseFile.getOriginalFilename());
        customerService.save(dto);
        return new ResponseUtil(200, "Customer Saved Successfully", dto);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestPart("dto") CustomerDTO dto, @RequestPart("nicPhoto") MultipartFile nicPhoto, @RequestPart("licensePhoto") MultipartFile licensePhoto) {
        MultipartFile licenseFile = saveAnUpdateFile(licensePhoto);
        MultipartFile nicFile = saveAnUpdateFile(nicPhoto);
        dto.setNicPhoto("uploads/" + nicFile.getOriginalFilename());
        dto.setLicensePhoto("uploads/" + licenseFile.getOriginalFilename());
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

    @GetMapping(path = "loginCheckCustomer", params = {"email", "password"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil checkAdminLogin(@RequestParam String email, @RequestParam String password) {
        return new ResponseUtil(200, "Customer Login Successful", customerService.checkCustomerLogin(email, password));
    }

    @GetMapping(path = "searchCustomerByEmailAndPassword", params = {"email", "password"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil searchCustomerByEmailAndPassword(@RequestParam String email, @RequestParam String password) {
        return new ResponseUtil(200, "Customer Search Successful", customerService.searchCustomerByEmailAndPassword(email, password));
    }

    @GetMapping(path = "countAllCustomers", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil countAllCustomers() {
        return new ResponseUtil(200, "Customer Counted Successfully", customerService.countAllCustomers());
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
