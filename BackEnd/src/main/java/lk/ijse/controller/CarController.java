package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.util.ResponseUtil;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("car")
@CrossOrigin
public class CarController {
    @PostMapping
    ResponseUtil save(@RequestBody CustomerDTO dto) {
        customerService.save(dto);
        return new ResponseUtil(200, "Customer Saved Successfully", dto);
    }

    @PutMapping
    ResponseUtil update(@RequestBody CustomerDTO dto) {
        customerService.update(dto);
        return new ResponseUtil(200, "Customer Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"})
    ResponseUtil delete(@RequestParam String nic) {
        customerService.delete(nic);
        return new ResponseUtil(200, "Customer delete Successfully", null);
    }

    @GetMapping(path = "getAll")
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", customerService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"})
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Customer Searched Successfully", customerService.search(nic));
    }
}
