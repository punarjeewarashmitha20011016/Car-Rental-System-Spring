package lk.ijse.service.impl;

import lk.ijse.dto.CarDTO;
import lk.ijse.entity.Car;
import lk.ijse.repo.CarRepo;
import lk.ijse.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CarServiceImpl implements CarService {
    @Autowired
    private CarRepo repo;
    @Autowired
    private ModelMapper mapper;

    public void save(CarDTO dto) {
        if (repo.existsById(dto.getC_RegNo())) {
            throw new RuntimeException("Car Save Failed");
        }
        repo.save(mapper.map(dto, Car.class));
    }

    public void update(CarDTO dto) {
        if (repo.existsById(dto.getC_RegNo())) {
            repo.save(mapper.map(dto, Car.class));
        }
        throw new RuntimeException("Car Update Failed");
    }

    public void delete(String regNo) {
        if (repo.existsById(regNo)) {
            repo.deleteById(regNo);
        }
        throw new RuntimeException("Car Delete Failed");
    }

    public List<CarDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    public CarDTO search(String regNo) {
        if (repo.existsById(regNo)) {
            return mapper.map(repo.findById(regNo), CarDTO.class);
        }
        throw new RuntimeException("Car Search Failed");
    }
}
