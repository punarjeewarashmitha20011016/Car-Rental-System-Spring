package lk.ijse.controller;

import lk.ijse.dto.CarDTO;
import lk.ijse.service.CarService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "car")
@CrossOrigin
public class CarController {
    @Autowired
    private CarService carService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestBody CarDTO dto) {
        carService.save(dto);
        return new ResponseUtil(200, "Car Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody CarDTO dto) {
        carService.update(dto);
        return new ResponseUtil(200, "Car Updated Successfully", dto);
    }

    @DeleteMapping(params = {"regNo"},produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String regNo) {
        carService.delete(regNo);
        return new ResponseUtil(200, "Car delete Successfully", null);
    }

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", carService.getAll());
    }

    @GetMapping(path = "search", params = {"regNo"},produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String regNo) {
        return new ResponseUtil(200, "Car Searched Successfully", carService.search(regNo));
    }
}
