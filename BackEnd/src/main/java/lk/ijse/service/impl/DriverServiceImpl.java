package lk.ijse.service.impl;

import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.Driver;
import lk.ijse.repo.DriverRepo;
import lk.ijse.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    private DriverRepo repo;

    @Autowired
    private ModelMapper mapper;

    public void save(DriverDTO dto) {
        if (repo.existsById(dto.getNic())) {
            throw new RuntimeException("Driver Save Failed");
        }
        repo.save(mapper.map(dto, Driver.class));
    }

    public void update(DriverDTO dto) {
        if (repo.existsById(dto.getNic())) {
            repo.save(mapper.map(dto, Driver.class));
        }
        throw new RuntimeException("Driver Update Failed");
    }

    public void delete(String nic) {
        if (repo.existsById(nic)) {
            repo.deleteById(nic);
        }
        throw new RuntimeException("Driver Delete Failed");
    }

    public List<DriverDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    public DriverDTO search(String nic) {
        if (repo.existsById(nic)) {
            return mapper.map(repo.findById(nic), DriverDTO.class);
        }
        throw new RuntimeException("Driver Search Failed");
    }
}
