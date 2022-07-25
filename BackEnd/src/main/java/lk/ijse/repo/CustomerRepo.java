package lk.ijse.repo;

import lk.ijse.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, String> {
    boolean existsCustomerByEmailAndPassword(String email, String password);

    Customer findCustomerByEmailAndPassword(String email, String password);
}
