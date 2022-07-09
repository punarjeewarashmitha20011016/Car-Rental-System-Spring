package lk.ijse.controller;

import lk.ijse.dto.DriverDTO;
import lk.ijse.service.DriverService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("driver")
@CrossOrigin
public class DriverController {
    @Autowired
    private DriverService driverService;

    @PostMapping
    ResponseUtil save(@RequestBody DriverDTO dto) {
        driverService.save(dto);
        return new ResponseUtil(200, "Driver Saved Successfully", dto);
    }

    @PutMapping
    ResponseUtil update(@RequestBody DriverDTO dto) {
        driverService.update(dto);
        return new ResponseUtil(200, "Driver Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"})
    ResponseUtil delete(@RequestParam String nic) {
        driverService.delete(nic);
        return new ResponseUtil(200, "Driver delete Successfully", null);
    }

    @GetMapping(path = "getAll")
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", driverService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"})
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Driver Searched Successfully", driverService.search(nic));
    }
}
