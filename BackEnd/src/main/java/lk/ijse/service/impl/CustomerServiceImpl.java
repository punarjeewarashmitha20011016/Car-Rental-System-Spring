package lk.ijse.service.impl;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.entity.Customer;
import lk.ijse.repo.CustomerRepo;
import lk.ijse.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    public void save(CustomerDTO dto) {
        if (repo.existsById(dto.getNic())) {
            throw new RuntimeException("Customer Save Failed");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

    public void update(CustomerDTO dto) {
        if (repo.existsById(dto.getNic())) {
            repo.save(mapper.map(dto, Customer.class));
        } else {
            throw new RuntimeException("Customer Update Failed");
        }
    }

    public void delete(String nic) {
        if (repo.existsById(nic)) {
            repo.deleteById(nic);
        } else {
            throw new RuntimeException("Customer Delete Failed");
        }
    }

    public List<CustomerDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    public CustomerDTO search(String nic) {
        if (repo.existsById(nic)) {
            return mapper.map(repo.findById(nic), CustomerDTO.class);
        } else {
            throw new RuntimeException("Customer Search Failed");
        }
    }

    @Override
    public boolean checkCustomerLogin(String email, String password) {
        try {
            if (!repo.existsCustomerByEmailAndPassword(email, password)) {
                return false;
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return true;
    }

    @Override
    public CustomerDTO searchCustomerByEmailAndPassword(String email, String password) {
        CustomerDTO map = mapper.map(repo.findCustomerByEmailAndPassword(email, password), CustomerDTO.class);
        if (map != null) {
            return map;
        } else {
            throw new RuntimeException("Customer Doesn't Exists");
        }
    }

    @Override
    public int countAllCustomers() {
        return repo.countAllCustomers();
    }
}
