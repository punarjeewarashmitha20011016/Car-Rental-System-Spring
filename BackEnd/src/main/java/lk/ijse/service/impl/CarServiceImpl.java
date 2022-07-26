package lk.ijse.service.impl;

import lk.ijse.dto.BookingDetailsDTO;
import lk.ijse.dto.CarDTO;
import lk.ijse.dto.CarScheduleDTO;
import lk.ijse.entity.Car;
import lk.ijse.repo.BookingCarDetailsRepo;
import lk.ijse.repo.CarRepo;
import lk.ijse.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Service
public class CarServiceImpl implements CarService {
    @Autowired
    private CarRepo repo;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private BookingCarDetailsRepo detailsRepo;

    public void save(CarDTO dto) {
        if (repo.existsById(dto.getC_RegNo())) {
            throw new RuntimeException("Car Save Failed");
        }
        repo.save(mapper.map(dto, Car.class));
    }

    public void update(CarDTO dto) {
        if (repo.existsById(dto.getC_RegNo())) {
            repo.save(mapper.map(dto, Car.class));
        } else {
            throw new RuntimeException("Car Update Failed");
        }
    }

    public void delete(String regNo) {
        if (repo.existsById(regNo)) {
            repo.deleteById(regNo);
        } else {
            throw new RuntimeException("Car Delete Failed");
        }
    }

    public List<CarDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    public CarDTO search(String regNo) {
        if (repo.existsById(regNo)) {
            return mapper.map(repo.findById(regNo), CarDTO.class);
        } else {
            throw new RuntimeException("Car Search Failed");
        }
    }

    @Override
    public List<CarScheduleDTO> carScheduleList() {/*View Car schedule */
        List<CarDTO> cars = mapper.map(repo.findAll(), new TypeToken<List<CarDTO>>() {
        }.getType());
        List<CarScheduleDTO> scheduleDTOList = new ArrayList<>();
        List<BookingDetailsDTO> details = mapper.map(detailsRepo.findAll(), new TypeToken<List<BookingDetailsDTO>>() {
        }.getType());
        for (int i = 0; i < cars.size(); i++) {
            for (int j = 0; j < details.size(); j++) {
                if (cars.get(i).getC_RegNo().equals(details.get(i).getCar_RegNo())) {
                    /*Booked Cars*/
                    scheduleDTOList.add(new CarScheduleDTO(details.get(i).getCar_RegNo(), "Rented", details.get(i).getDateOfPickup(), details.get(i).getTimeOfPickup(), details.get(i).getReturnedDate(), details.get(i).getReturnedTime()));
                } else {
                    /*Not Booked*/
                    scheduleDTOList.add(new CarScheduleDTO(cars.get(i).getC_RegNo(), "Available", null, null, null, null));
                }
            }
        }
        return scheduleDTOList;
    }
}
