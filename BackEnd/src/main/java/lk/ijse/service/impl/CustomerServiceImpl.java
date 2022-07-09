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
        }
        throw new RuntimeException("Customer Update Failed");
    }

    public void delete(String nic) {
        if (repo.existsById(nic)) {
            repo.deleteById(nic);
        }
        throw new RuntimeException("Customer Delete Failed");
    }

    public List<CustomerDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    public CustomerDTO search(String nic) {
        if (repo.existsById(nic)) {
            return mapper.map(repo.findById(nic), CustomerDTO.class);
        }
        throw new RuntimeException("Customer Search Failed");
    }
}
