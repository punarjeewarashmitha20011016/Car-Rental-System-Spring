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

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil save(@RequestBody CarDTO dto) {
        CarImagesDTO carImages = saveAnUpdateFileForCarImages(dto.getCarImagesFiles());
        dto.setImages(carImages);
        carService.save(dto);
        return new ResponseUtil(200, "Car Saved Successfully", dto);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseUtil update(@RequestBody CarDTO dto) {
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

    private CarImagesDTO saveAnUpdateFileForCarImages(List carImagesFiles) {
        List carImagesFile = carImagesFiles;
        List<MultipartFile> files = new ArrayList<>();
        MultipartFile file1 = (MultipartFile) carImagesFile.get(0);
        files.add(file1);
        MultipartFile file2 = (MultipartFile) carImagesFile.get(1);
        files.add(file2);
        MultipartFile file3 = (MultipartFile) carImagesFile.get(2);
        files.add(file3);
        MultipartFile file4 = (MultipartFile) carImagesFile.get(3);
        files.add(file4);

        for (int i = 0; i < files.size(); i++) {
            try {
                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                File uploadsDir = new File(projectPath + "/uploads");
                System.out.println(projectPath);
                uploadsDir.mkdir();

                files.get(i).transferTo(new File(uploadsDir.getAbsolutePath() + "/" + files.get(i).getOriginalFilename()));
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
