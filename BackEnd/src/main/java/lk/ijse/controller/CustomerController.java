package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.service.CustomerService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestBody CustomerDTO dto) {
        customerService.save(dto);
        return new ResponseUtil(200, "Customer Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody CustomerDTO dto) {
        customerService.update(dto);
        return new ResponseUtil(200, "Customer Updated Successfully", dto);
    }

    @DeleteMapping(params = {"nic"},produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String nic) {
        customerService.delete(nic);
        return new ResponseUtil(200, "Customer delete Successfully", null);
    }

    @GetMapping(path = "getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", customerService.getAll());
    }

    @GetMapping(path = "search", params = {"nic"},produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String nic) {
        return new ResponseUtil(200, "Customer Searched Successfully", customerService.search(nic));
    }
}
