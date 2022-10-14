package lk.ijse.service;

import lk.ijse.dto.CustomerDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerService {
    void save(CustomerDTO dto);

    void update(CustomerDTO dto);

    void delete(String nic);

    List<CustomerDTO> getAll();

    CustomerDTO search(String nic);

    boolean checkCustomerLogin(String email, String password);

    CustomerDTO searchCustomerByEmailAndPassword(String email, String password);

    int countAllCustomers();
}
