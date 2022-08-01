package lk.ijse.controller;

import lk.ijse.dto.CarDTO;
import lk.ijse.dto.CarImagesDTO;
import lk.ijse.service.CarService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "car")
@CrossOrigin
public class CarController {
    @Autowired
    private CarService carService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestPart("dto") CarDTO dto, @RequestPart("carImgFile") MultipartFile[] files) {
        CarImagesDTO carImages = saveAnUpdateFileForCarImages(files);
        dto.setImages(carImages);
        carService.save(dto);
        return new ResponseUtil(200, "Car Saved Successfully", dto);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestPart("dto") CarDTO dto, @RequestPart("carImgFile") MultipartFile[] files) {
        CarImagesDTO carImages = saveAnUpdateFileForCarImages(files);
        dto.setImages(carImages);
        carService.update(dto);
        return new ResponseUtil(200, "Car Updated Successfully", dto);
    }

    @DeleteMapping(params = {"regNo"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil delete(@RequestParam String regNo) {
        carService.delete(regNo);
        return new ResponseUtil(200, "Car delete Successfully", null);
    }

    @GetMapping(path = "getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAll() {
        return new ResponseUtil(200, "Data Fetched Successfully", carService.getAll());
    }

    @GetMapping(path = "search", params = {"regNo"}, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil search(@RequestParam String regNo) {
        return new ResponseUtil(200, "Car Searched Successfully", carService.search(regNo));
    }

    /*Car Schedule*/
    @GetMapping(path = "getCarSchedule", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil getAllBookedCars() {
        return new ResponseUtil(200, "Data Fetched Successfully", carService.carScheduleList());
    }

    @GetMapping(path = "countAllCars", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil countAllCars() {
        return new ResponseUtil(200, "Data Fetched Successfully", carService.countAllCars());
    }

    @GetMapping(path = "countAllCarsUnderAndNeedMaintenance", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil countAllCarsUnderAndNeedMaintenance() {
        return new ResponseUtil(200, "Data Fetched Successfully", carService.countAllCarsUnderAndNeedMaintenance());
    }

    private CarImagesDTO saveAnUpdateFileForCarImages(MultipartFile[] files) {
        MultipartFile file1 = files[0];
        MultipartFile file2 = files[1];
        MultipartFile file3 = files[2];
        MultipartFile file4 = files[3];
        List<MultipartFile> list = new ArrayList<>();
        list.add(file1);
        list.add(file2);
        list.add(file3);
        list.add(file4);

        for (int i = 0; i < list.size(); i++) {
            try {
                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                File uploadsDir = new File(projectPath + "/uploads");
                System.out.println(projectPath);
                uploadsDir.mkdir();

                list.get(i).transferTo(new File(uploadsDir.getAbsolutePath() + "/" + list.get(i).getOriginalFilename()));
            } catch (IOException | URISyntaxException e) {
                e.printStackTrace();
            }
        }
        CarImagesDTO dto1 = new CarImagesDTO();
        dto1.setFirstImage("uploads/" + file1.getOriginalFilename());
        dto1.setSecondImage("uploads/" + file2.getOriginalFilename());
        dto1.setThirdImage("uploads/" + file3.getOriginalFilename());
        dto1.setFourthImage("uploads/" + file4.getOriginalFilename());
        return dto1;
    }

}