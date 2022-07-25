package lk.ijse.service.impl;

import lk.ijse.dto.AdminDTO;
import lk.ijse.entity.Admin;
import lk.ijse.repo.AdminRepo;
import lk.ijse.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo repo;
    @Autowired
    private ModelMapper mapper;

    public void save(AdminDTO dto) {
        if (repo.existsById(dto.getNic())) {
            throw new RuntimeException("Admin Save Failed");
        }
        repo.save(mapper.map(dto, Admin.class));
    }

    public void update(AdminDTO dto) {
        if (repo.existsById(dto.getNic())) {
            repo.save(mapper.map(dto, Admin.class));
        }else {
            throw new RuntimeException("Admin Update Failed");
        }
    }

    public void delete(String nic) {
        System.out.println(nic);
        if (repo.existsById(nic)) {
            repo.deleteById(nic);
        }else {
            throw new RuntimeException("Admin Delete Failed");
        }
    }

    public List<AdminDTO> getAll() {
        return mapper.map(repo.findAll(), new TypeToken<List<AdminDTO>>() {
        }.getType());
    }

    public AdminDTO search(String nic) {
        if (repo.existsById(nic)) {
            return mapper.map(repo.findById(nic), AdminDTO.class);
        }else {
            throw new RuntimeException("Admin Search Failed");
        }
    }

    @Override
    public boolean checkAdminLogin(String email, String password) {
        try{
            if (!repo.existsAdminByEmailAndPassword(email, password)) {
                return false;
            }
            return true;
        }catch (Exception e){
            e.printStackTrace();
        }
        return true;
    }
}
