package lk.ijse.controller;

import lk.ijse.dto.AdminDTO;
import lk.ijse.service.AdminService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping(path = "admin")
@RestController
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestBody AdminDTO dto) {
        adminService.save(dto);
        return new ResponseUtil(200, "Admin Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody AdminDTO dto) {
        adminService.update(dto);
        return new ResponseUtil(200, "Admin Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"},produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String nic) {
        adminService.delete(nic);
        return new ResponseUtil(200, "Admin delete Successfully", null);
    }

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", adminService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Admin Searched Successfully", adminService.search(nic));
    }

    @GetMapping(path = "loginCheckAdmin", params = {"email", "password"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil checkAdminLogin(@RequestParam String email, @RequestParam String password) {
        return new ResponseUtil(200, "Admin Login Successful", adminService.checkAdminLogin(email, password));
    }
}
