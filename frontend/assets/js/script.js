var headerNav = $('#headerNav');
var navBarItems = $("#navBarItems");
var signupBtn = $('#signupBtn');
var loginBtn = $("#loginBtn");
var signupBtnInLogin = $("#signupBtnInLogin");
var logoutBtn = $('#logoutBtn');
var homeSection = $('#homeSection');
var loginSection = $('#loginSection');
var customerSection = $('#customerSection');
var logoutBtnInCustomerForm = $('#logoutBtnInCustomerForm');
var adminSection = $('#adminSection');
var userNameLoginId = $("#userNameLoginId");
var passwordLoginId = $("#passwordLoginId");

var carSection = $("#carSection");
var customerDetailsSection = $("#customerDetailsSection");
var carViewAllBtn = $("#carViewAllBtn");
var carViewAllSection = $("#carViewAllSection");
var driverSection = $("#driverSection");
var driverViewAllBtn = $("#driverViewAllBtn");
var viewDriverDetailsSection = $("#viewDriverDetailsSection");
var bookingRequestSection = $("#bookingRequestSection");
var bookingRequestDetailsBtn = $("#bookingRequestDetailsBtn");
var bookingRequestDetailsSection = $("#bookingRequestDetailsSection");
var bookingSection = $("#bookingSection");
var viewCurrentBookingsBtn = $("#viewCurrentBookingsBtn");
var viewCurrentBookingsSection = $("#viewCurrentBookingsSection");
var viewAllBookingsSection = $("#viewAllBookingsSection");
var incomeSection = $("#incomeSection");

var viewCurrentBookingDetailsBtn = $("#viewCurrentBookingDetailsBtn");
var viewCurrentBookingDetailsSection = $("#viewAllCurrentBookingDetailsSection");

var viewAllBookingDetailsSection = $("#viewAllBookingDetailsSection");
var viewAllBookingDetailsBtn = $("#viewAllBookingDetailsBtn");

var placingBookingSection = $("#placingBookingSection");

// $(document).ready(function(){
//     console.log('window');
//     $(headerNav).css('display','block');
//     $(homeSection).css('display','block');
//     $(customerSection).css('display','none');
//     $(loginSection).css('display','none');
//     $(adminSection).css('display','none');
// })
// $(document).on('ready', function(){
//     console.log('window');
//     $(headerNav).css('display','block');
//     $(homeSection).css('display','block');
//     $(customerSection).css('display','none');
//     $(loginSection).css('display','none');
//     $(adminSection).css('display','none');
// });

$(loginBtn).click(function () {
    if (userNameLoginId.val() == 'admin' && passwordLoginId.val() == 'admin') {
        $(signupBtn).css('display', 'none!important');
        if ($(navBarItems).children('div:nth-child(2)').children('ul').children().length == 0) {
            let homeBtn = document.createElement("li");
            homeBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforhomeBtn = document.createElement('a');
            aforhomeBtn.className = 'nav-link active';
            aforhomeBtn.ariaCurrent = 'page';
            aforhomeBtn.href = "#adminSection";
            aforhomeBtn.innerHTML = "Home";
            aforhomeBtn.className = "text-black text-decoration-none";
            homeBtn.append(aforhomeBtn);
            $(homeBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'flex');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })


            let customerBtn = document.createElement("li");
            customerBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforCustomerBtn = document.createElement('a');
            aforCustomerBtn.className = 'nav-link active';
            aforCustomerBtn.ariaCurrent = 'page';
            aforCustomerBtn.href = "#";
            aforCustomerBtn.innerHTML = "Customer";
            aforCustomerBtn.className = "text-black text-decoration-none";
            customerBtn.append(aforCustomerBtn);
            $(customerBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'flex');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })

            let driverBtn = document.createElement("li");
            driverBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforDriverBtn = document.createElement('a');
            aforDriverBtn.className = 'nav-link active';
            aforDriverBtn.ariaCurrent = 'page';
            aforDriverBtn.href = "#";
            aforDriverBtn.innerHTML = "Driver";
            aforDriverBtn.className = "text-black text-decoration-none";
            driverBtn.append(aforDriverBtn);
            $(driverBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'flex');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })
            $(driverViewAllBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'flex');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })


            let carBtn = document.createElement("li");
            carBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforCarBtn = document.createElement('a');
            aforCarBtn.className = 'nav-link active';
            aforCarBtn.ariaCurrent = 'page';
            aforCarBtn.href = "#carSection";
            aforCarBtn.innerHTML = "Car";
            aforCarBtn.className = "text-black text-decoration-none";
            carBtn.append(aforCarBtn);
            $(carBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'flex');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })

            $(carViewAllBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'flex');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })

            let incomeBtn = document.createElement("li");
            incomeBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforIncomeBtn = document.createElement('a');
            aforIncomeBtn.className = 'nav-link active';
            aforIncomeBtn.ariaCurrent = 'page';
            aforIncomeBtn.href = "#";
            aforIncomeBtn.innerHTML = "Income";
            aforIncomeBtn.className = "text-black text-decoration-none";
            incomeBtn.append(aforIncomeBtn);
            $(incomeBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'flex');
            })

            let bookingRequestBtn = document.createElement("li");
            bookingRequestBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforBookingRequestBtn = document.createElement('a');
            aforBookingRequestBtn.className = 'nav-link active';
            aforBookingRequestBtn.ariaCurrent = 'page';
            aforBookingRequestBtn.href = "#";
            aforBookingRequestBtn.innerHTML = "Booking Request";
            aforBookingRequestBtn.className = "text-black text-decoration-none";
            bookingRequestBtn.append(aforBookingRequestBtn);
            $(bookingRequestBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'flex');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })

            $(bookingRequestDetailsBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'flex');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })


            let bookingBtn = document.createElement("li");
            bookingBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforBookingBtn = document.createElement('a');
            aforBookingBtn.className = 'nav-link active';
            aforBookingBtn.ariaCurrent = 'page';
            aforBookingBtn.href = "#";
            aforBookingBtn.innerHTML = "Booking";
            aforBookingBtn.className = "text-black text-decoration-none";
            bookingBtn.append(aforBookingBtn);

            $(bookingBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'flex');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(placingBookingSection).css('display', 'flex');

                $(viewCurrentBookingsBtn).click(function () {
                    $(placingBookingSection).css('display', 'none');
                    $(viewCurrentBookingsSection).css('display', 'flex');
                })
                $(viewCurrentBookingsBtn).dblclick(function () {
                    $(viewCurrentBookingsSection).css('display', 'none');
                    $(placingBookingSection).css('display', 'flex');
                })
            })

            $(viewCurrentBookingDetailsBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'flex');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })

            let viewAllBookingsBtn = document.createElement("li");
            viewAllBookingsBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aforViewBookingBtn = document.createElement('a');
            aforViewBookingBtn.className = 'nav-link active';
            aforViewBookingBtn.ariaCurrent = 'page';
            aforViewBookingBtn.href = "#";
            aforViewBookingBtn.innerHTML = "View All Bookings";
            aforViewBookingBtn.className = "text-black text-decoration-none";
            viewAllBookingsBtn.append(aforViewBookingBtn);

            $(viewAllBookingsBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'flex');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
            })

            $(viewAllBookingDetailsBtn).click(function () {
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'flex');
                $(incomeSection).css('display', 'none');
            })

            console.log('admin');
            $(navBarItems).children('div:nth-child(2)').children('ul').append(homeBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(carBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(customerBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(driverBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(incomeBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(bookingRequestBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(bookingBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(viewAllBookingsBtn);

        }


        $(headerNav).css('display', 'block');
        $(homeSection).css('display', 'none');
        $(customerSection).css('display', 'none');
        $(loginSection).css('display', 'none');
        $(adminSection).css('display', 'flex')
        $(carSection).css('display', 'none');
        ;
        $(customerDetailsSection).css('display', 'none');
        $(carViewAllSection).css('display', 'none');
        $(driverSection).css('display', 'none');
        $(viewDriverDetailsSection).css('display', 'none');
        $(bookingRequestSection).css('display', 'none');
        $(bookingRequestDetailsSection).css('display', 'none');
        $(bookingSection).css('display', 'none');
        $(viewCurrentBookingsSection).css('display', 'none');
        $(viewAllBookingsSection).css('display', 'none');
        $(viewAllBookingDetailsSection).css('display', 'none');
        $(incomeSection).css('display', 'none')

    } else {
        $(headerNav).css('display', 'block');
        $(homeSection).css('display', 'flex');
        $(customerSection).css('display', 'none');
        $(loginSection).css('display', 'none');
        $(adminSection).css('display', 'none');
        $(carSection).css('display', 'none');
        $(customerDetailsSection).css('display', 'none');
        $(carViewAllSection).css('display', 'none');
        $(driverSection).css('display', 'none');
        $(viewDriverDetailsSection).css('display', 'none');
        $(bookingRequestSection).css('display', 'none');
        $(bookingRequestDetailsSection).css('display', 'none');
        $(bookingSection).css('display', 'none');
        $(viewCurrentBookingsSection).css('display', 'none');
        $(viewAllBookingsSection).css('display', 'none');
        $(viewAllBookingDetailsSection).css('display', 'none');
        $(incomeSection).css('display', 'none')
    }
})

$(signupBtnInLogin).click(function () {
    // $(headerNav).css('display','none');
    // $(homeSection).css('display','none');
    // $(customerSection).css('display','block');
    // $(loginSection).css('display','none');
    $(adminSection).css('display', 'flex');
    $(headerNav).css('display', 'block');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(carViewAllSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
})

$(logoutBtn).click(function () {
    $(headerNav).css('display', 'none');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'block');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(carViewAllSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
})

$(signupBtn).click(function () {
    $(headerNav).css('display', 'none');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'flex');
    $(loginSection).css('display', 'none');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(carViewAllSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
})

$(logoutBtnInCustomerForm).click(function () {
    $(headerNav).css('display', 'none');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'block');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(carViewAllSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
})