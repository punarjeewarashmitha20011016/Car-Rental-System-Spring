package lk.ijse.repo;

import lk.ijse.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer, String> {
    boolean existsCustomerByEmailAndPassword(String email, String password);

    Customer findCustomerByEmailAndPassword(String email, String password);

    @Query(value = "SELECT COUNT(nic) FROM Customer", nativeQuery = true)
    int countAllCustomers();
}
