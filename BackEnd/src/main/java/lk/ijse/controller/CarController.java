package lk.ijse.controller;

import lk.ijse.dto.CarDTO;
import lk.ijse.service.CarService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("car")
@CrossOrigin
public class CarController {
    @Autowired
    private CarService carService;

    @PostMapping
    ResponseUtil save(@RequestBody CarDTO dto) {
        carService.save(dto);
        return new ResponseUtil(200, "Car Saved Successfully", dto);
    }

    @PutMapping
    ResponseUtil update(@RequestBody CarDTO dto) {
        carService.update(dto);
        return new ResponseUtil(200, "Car Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"})
    ResponseUtil delete(@RequestParam String nic) {
        carService.delete(nic);
        return new ResponseUtil(200, "Car delete Successfully", null);
    }

    @GetMapping(path = "getAll")
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", carService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"})
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Car Searched Successfully", carService.search(nic));
    }
}
