var headerNav = $('#headerNav');
var navBarItems = $("#navBarItems");
var arr = $(navBarItems).children('div:nth-child(2)').children('ul').children();
var signupBtn = $('#signupBtn');
var loginBtn = $("#loginBtn");
var signupBtnInLogin = $("#signupBtnInLogin");
var logoutBtn = $('#logoutBtn');
var homeSection = $('#homeSection');
var viewAllCarsForUserBtn = $("#viewAllCarsForUserBtn");
var loginSection = $('#loginSection');
var customerSection = $('#customerSection');
var logoutBtnInCustomerForm = $('#logoutBtnInCustomerForm');
var adminSection = $('#adminSection');
var userNameLoginId = $("#userNameLoginId");
var passwordLoginId = $("#passwordLoginId");

var carSection = $("#carSection");
var customerDetailsSection = $("#customerDetailsSection");
var carViewAllBtn = $("#carViewAllBtn");
var viewCarScheduleBtn = $("#viewCarScheduleBtn");
var driverSection = $("#driverSection");
var driverViewAllBtn = $("#driverViewAllBtn");
var bookingRequestSection = $("#bookingRequestSection");
var bookingRequestDetailsBtn = $("#bookingRequestDetailsBtn");
var bookingSection = $("#bookingSection");
var viewCurrentBookingsBtn = $("#viewCurrentBookingsBtn");
var viewCurrentBookingsSection = $("#viewCurrentBookingsSection");
var viewAllBookingsSection = $("#viewAllBookingsSection");
var incomeSection = $("#incomeSection");

var viewCurrentBookingDetailsBtn = $("#viewCurrentBookingDetailsBtn");

var viewAllBookingDetailsSection = $("#viewAllBookingDetailsSection");
var viewAllBookingDetailsBtn = $("#viewAllBookingDetailsBtn");

var placingBookingInAdminBookingSection = $("#placingBookingInAdminBookingSection");

var viewAllCarsInCustomerSection = $("#viewAllCarsInCustomerSection");

var leftNavBtnForCarView = $("#leftNavBtnForCarView");
var rightNavBtnForCarView = $("#rightNavBtnForCarView");

var viewAllBookingsForCustomerSection = $("#viewAllBookingsForCustomerSection");
var viewMyAccountForCustomerSection = $("#viewMyAccountForCustomerSection");
var placingBookingRequestInCustomer = $("#placingBookingRequestInCustomer");
var notificationsForCustomer = $("#notificationsForCustomer");
var notificationsForAdmin = $("#notificationsForAdmin");

var viewDriverScheduleInDriverSection = $("#viewDriverScheduleInDriverSection");
var viewDriverAccountSection = $("#viewDriverAccountSection");

$(document).ready(function () {
    $(arr).remove();
    $(signupBtn).css('display', 'block');
    getAllCars();
    $(headerNav).css('display', 'block');
    $(homeSection).css('display', 'flex');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'none');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none');
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(notificationsForCustomer).css('display', 'none');
    $(notificationsForAdmin).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
    $(viewDriverAccountSection).css('display', 'none');
    if ($(navBarItems).children('div:nth-child(2)').children('ul').children().length == 0) {
        let homeBtn = document.createElement("li");
        homeBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
        let aforhomeBtn = document.createElement('a');
        aforhomeBtn.className = 'nav-link active';
        aforhomeBtn.ariaCurrent = 'page';
        aforhomeBtn.href = "#homeSection";
        aforhomeBtn.innerHTML = "Home";
        aforhomeBtn.className = "text-black text-decoration-none";
        homeBtn.append(aforhomeBtn);

        $(navBarItems).children('div:nth-child(2)').children('ul').append(homeBtn);
        $(homeBtn).click(function () {
            $(headerNav).css('display', 'block');
            $(homeSection).css('display', 'flex');
            $(customerSection).css('display', 'none');
            $(loginSection).css('display', 'none');
            $(adminSection).css('display', 'none');
            $(carSection).css('display', 'none');
            $(customerDetailsSection).css('display', 'none');
            $(driverSection).css('display', 'none');
            $(bookingRequestSection).css('display', 'none');
            $(bookingSection).css('display', 'none');
            $(viewAllBookingsSection).css('display', 'none');
            $(viewAllBookingDetailsSection).css('display', 'none');
            $(incomeSection).css('display', 'none');
            $(viewAllCarsInCustomerSection).css('display', 'none');
            $(viewAllBookingsForCustomerSection).css('display', 'none');
            $(viewMyAccountForCustomerSection).css('display', 'none');
            $(placingBookingRequestInCustomer).css('display', 'none');
            $(notificationsForCustomer).css('display', 'none');
            $(viewDriverScheduleInDriverSection).css('display', 'none');
            $(viewDriverAccountSection).css('display', 'none');
            $(notificationsForAdmin).css('display', 'none');
        })
        getAllCars();
        setViewAllCarsBookingBtnsDisableAndEnable(false);
        $(viewAllCarsForUserBtn).off('click');
        $(viewAllCarsForUserBtn).click(function () {
            $(leftNavBtnForCarView).css('cursor', 'pointer')
            $(rightNavBtnForCarView).css('cursor', 'pointer')
            let cardsContainingContainerInCustomerSection = $("#cardsContainingContainerInCustomerSection");
            let count = 4;
            $(leftNavBtnForCarView).click(function () {
                console.log('invoked');
                $(cardsContainingContainerInCustomerSection).css('right', count + "%");
                count += 4;
            })
            $(rightNavBtnForCarView).click(function () {
                console.log('invoked');
                $(cardsContainingContainerInCustomerSection).css('right', count + "%");
                count -= 4;
            })

            $(headerNav).css('display', 'block');
            $(homeSection).css('display', 'none');
            $(customerSection).css('display', 'none');
            $(loginSection).css('display', 'none');
            $(adminSection).css('display', 'none');
            $(carSection).css('display', 'none');
            $(customerDetailsSection).css('display', 'none');
            $(driverSection).css('display', 'none');
            $(bookingRequestSection).css('display', 'none');
            $(bookingSection).css('display', 'none');
            $(viewAllBookingsSection).css('display', 'none');
            $(viewAllBookingDetailsSection).css('display', 'none');
            $(incomeSection).css('display', 'none');
            $(viewAllCarsInCustomerSection).css('display', 'flex');
            $(viewAllBookingsForCustomerSection).css('display', 'none');
            $(viewMyAccountForCustomerSection).css('display', 'none');
            $(placingBookingRequestInCustomer).css('display', 'none');
            $(notificationsForCustomer).css('display', 'none');
            $(viewDriverScheduleInDriverSection).css('display', 'none');
            $(viewDriverAccountSection).css('display', 'none');
            $(notificationsForAdmin).css('display', 'none');
        })
    }
})

$(loginBtn).off();
$(loginBtn).click(function () {
    let arr = $(navBarItems).children('div:nth-child(2)').children('ul').children();
    console.log($(navBarItems).children('div:nth-child(2)').children('ul').children());
    console.log(arr.length)
    getAllCars();
    $(arr).remove();
    try {
        $.ajax({
            url: baseUrl + "admin/loginCheckAdmin?email=" + userNameLoginId.val() + "&password=" + passwordLoginId.val(),
            method: "GET",
            success: function (resp) {
                if (resp.status == 200) {
                    if (resp.data == true) {
                        $(signupBtn).css('display', 'none');
                        if ($(navBarItems).children('div:nth-child(2)').children('ul').children().length == 0) {
                            setNumberOfRegisteredCustomersId();
                            setCountOfBookingsToday();
                            setCountOfCars();
                            setCountOfPendingBookingsToday();
                            setCountOfRegisteredDrivers();
                            setCountAllCarsUnderAndNeedMaintenance();
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
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
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
                                getAllCustomers();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'flex');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
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

                            let driverTextFieldContainer = $("#driverTextFieldContainer");
                            let driverViewAllTableContainer = $("#driverViewAllTableContainer");

                            $(driverBtn).click(function () {
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'flex');
                                $(driverTextFieldContainer).css('display', 'flex');
                                $(driverViewAllTableContainer).css('display', 'none')
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })
                            $(driverViewAllBtn).click(function () {
                                getAllDrivers();
                                $(driverTextFieldContainer).css('display', 'none')
                                $(driverViewAllTableContainer).css('display', 'flex')
                            })
                            $(driverViewAllBtn).dblclick(function () {
                                $(driverTextFieldContainer).css('display', 'flex')
                                $(driverViewAllTableContainer).css('display', 'none')
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

                            let carScheduleTableContainer = $("#carScheduleTableContainer");
                            let carTextFieldContainer = $("#carTextFieldContainer");
                            let carViewAllTableContainer = $("#carViewAllTableContainer");

                            $(carBtn).click(function () {
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'flex');
                                $(carTextFieldContainer).css('display', 'flex');
                                $(carScheduleTableContainer).css('display', 'none');
                                $(carViewAllTableContainer).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })

                            $(carViewAllBtn).click(function () {
                                $(carTextFieldContainer).css('display', 'none');
                                $(carScheduleTableContainer).css('display', 'none');
                                $(carViewAllTableContainer).css('display', 'flex');
                            })
                            $(carViewAllBtn).dblclick(function () {
                                $(carTextFieldContainer).css('display', 'flex');
                                $(carScheduleTableContainer).css('display', 'none');
                                $(carViewAllTableContainer).css('display', 'none');
                            })

                            $(viewCarScheduleBtn).click(function () {
                                $(carTextFieldContainer).css('display', 'none');
                                $(carScheduleTableContainer).css('display', 'flex');
                                $(carViewAllTableContainer).css('display', 'none');
                            })
                            $(viewCarScheduleBtn).dblclick(function () {
                                $(carTextFieldContainer).css('display', 'flex');
                                $(carScheduleTableContainer).css('display', 'none');
                                $(carViewAllTableContainer).css('display', 'none');
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
                                setDataToIncomeTable();
                                getDailyIncome();
                                getMonthlyIncome();
                                getAnnualIncome();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'flex');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })

                            let bookingRequestBtn = document.createElement("li");
                            bookingRequestBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aforBookingRequestBtn = document.createElement('a');
                            aforBookingRequestBtn.className = 'nav-link active';
                            aforBookingRequestBtn.ariaCurrent = 'page';
                            aforBookingRequestBtn.href = "#bookingRequestSection";
                            aforBookingRequestBtn.innerHTML = "Booking Request";
                            aforBookingRequestBtn.className = "text-black text-decoration-none";

                            let bookingRequestTableContainer = $("#bookingRequestTableContainer");
                            let bookingRequestDetailsTableContainer = $("#bookingRequestDetailsTableContainer");

                            bookingRequestBtn.append(aforBookingRequestBtn);
                            $(bookingRequestBtn).click(function () {
                                setRequestsDataToTable();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'flex');
                                $(bookingRequestTableContainer).css('display', 'flex');
                                $(bookingRequestDetailsTableContainer).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');

                            })

                            $(bookingRequestDetailsBtn).click(function () {
                                $(bookingRequestTableContainer).css('display', 'none');
                                $(bookingRequestDetailsTableContainer).css('display', 'flex');
                            })
                            $(bookingRequestDetailsBtn).dblclick(function () {
                                $(bookingRequestTableContainer).css('display', 'flex');
                                $(bookingRequestDetailsTableContainer).css('display', 'none');
                                $(bookingRequestDetailsTableContainer).children('table').children('tbody').empty();
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

                            let currentBookingsTableContainer = $("#currentBookingsTableContainer");
                            let currentBookingsDetailsTableContainer = $("#currentBookingsDetailsTableContainer");

                            $(bookingBtn).click(function () {
                                setDisabledRequiredFieldsInBookingInAdmin();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'flex');
                                $(viewCurrentBookingsSection).css('display', 'none');
                                $('#viewAddToListBookingsSectionInAdmin').css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(placingBookingInAdminBookingSection).css('display', 'flex');
                                $(viewCurrentBookingsSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');

                                $(viewCurrentBookingsBtn).click(function () {
                                    let arr = getAllPendingBookings();
                                    setDataToPendingBookingTable(arr)
                                    $(placingBookingInAdminBookingSection).css('display', 'none');
                                    $(viewCurrentBookingsSection).css('display', 'flex');
                                    $('#viewAddToListBookingsSectionInAdmin').css('display', 'none');
                                })
                                $(viewCurrentBookingsBtn).dblclick(function () {
                                    $(placingBookingInAdminBookingSection).css('display', 'flex');
                                    $(viewCurrentBookingsSection).css('display', 'none');
                                    $('#viewAddToListBookingsSectionInAdmin').css('display', 'none');
                                })
                            })

                            $(viewCurrentBookingDetailsBtn).click(function () {
                                $(currentBookingsTableContainer).css('display', 'none');
                                $(currentBookingsDetailsTableContainer).css('display', 'flex');
                            })

                            $(viewCurrentBookingDetailsBtn).dblclick(function () {
                                $(currentBookingsTableContainer).css('display', 'flex');
                                $(currentBookingsDetailsTableContainer).css('display', 'none');
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
                            let viewAllBookingInViewAllBookingSection = $("#viewAllBookingInViewAllBookingSection");
                            $(viewAllBookingsBtn).click(function () {
                                getAllBookings();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'flex');
                                $(viewAllBookingInViewAllBookingSection).css('display', 'flex');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })

                            $(viewAllBookingDetailsBtn).click(function () {
                                $(viewAllBookingDetailsSection).css('display', 'flex');
                                $(viewAllBookingInViewAllBookingSection).css('display', 'none');

                            })
                            $(viewAllBookingDetailsBtn).dblclick(function () {
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(viewAllBookingInViewAllBookingSection).css('display', 'flex');

                            })

                            let notificationsBtn = document.createElement("li");
                            notificationsBtn.className = 'nav-nav-item d-flex flex-row ms-3 me-3';

                            let div1 = document.createElement("div");
                            div1.className = 'd-flex col align-items-center justify-content-center';

                            let aforNotificationsBtn = document.createElement('a');
                            aforNotificationsBtn.className = 'nav-link active d-flex flex-column col';
                            aforNotificationsBtn.ariaCurrent = 'page';
                            aforNotificationsBtn.href = "#notificationsForCustomer";
                            aforNotificationsBtn.innerHTML = "Notifications";
                            aforNotificationsBtn.className = "text-black text-decoration-none";

                            div1.append(aforNotificationsBtn);

                            let notification = document.createElement('div');
                            notification.className = 'd-flex col align-items-center justify-content-center ms-1'
                            let iTag = document.createElement('i');
                            iTag.className = 'fa-solid fa-bell';
                            notification.append(iTag);
                            notificationsBtn.append(div1);
                            notificationsBtn.append(notification);

                            $(notificationsBtn).click(function () {
                                setNotificationsToDisplayOnAdmin();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'flex');

                            })

                            $(navBarItems).children('div:nth-child(2)').children('ul').append(homeBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(carBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(customerBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(driverBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(incomeBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(bookingRequestBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(bookingBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(viewAllBookingsBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(notificationsBtn);

                        }
                        $(headerNav).css('display', 'block');
                        $(homeSection).css('display', 'none');
                        $(customerSection).css('display', 'none');
                        $(loginSection).css('display', 'none');
                        $(adminSection).css('display', 'flex')
                        $(carSection).css('display', 'none');
                        $(customerDetailsSection).css('display', 'none');
                        $(driverSection).css('display', 'none');
                        $(bookingRequestSection).css('display', 'none');
                        $(bookingSection).css('display', 'none');
                        $(viewAllBookingsSection).css('display', 'none');
                        $(viewAllBookingDetailsSection).css('display', 'none');
                        $(incomeSection).css('display', 'none')
                        $(viewAllCarsInCustomerSection).css('display', 'none');
                        $(viewAllBookingsForCustomerSection).css('display', 'none');
                        $(viewMyAccountForCustomerSection).css('display', 'none');
                        $(placingBookingRequestInCustomer).css('display', 'none');
                        $(notificationsForCustomer).css('display', 'none');
                        $(viewDriverScheduleInDriverSection).css('display', 'none');
                        $(viewDriverAccountSection).css('display', 'none');
                        $(notificationsForAdmin).css('display', 'none');
                    }
                }
            }
        })

        $.ajax({
            url: baseUrl + "customer/loginCheckCustomer?email=" + userNameLoginId.val() + "&password=" + passwordLoginId.val(),
            method: "GET",
            success: function (resp) {
                if (resp.status = 200) {
                    if (resp.data == true) {
                        setViewAllCarsBookingBtnsDisableAndEnable(true);
                        searchCustomerForAccountTableDataLoading();
                        $(signupBtn).css('display', 'block')
                        $(headerNav).css('display', 'block');
                        $(homeSection).css('display', 'flex');
                        $(customerSection).css('display', 'none');
                        $(loginSection).css('display', 'none');
                        $(adminSection).css('display', 'none');
                        $(carSection).css('display', 'none');
                        $(customerDetailsSection).css('display', 'none');
                        $(driverSection).css('display', 'none');
                        $(bookingRequestSection).css('display', 'none');
                        $(bookingSection).css('display', 'none');
                        $(viewAllBookingsSection).css('display', 'none');
                        $(viewAllBookingDetailsSection).css('display', 'none');
                        $(incomeSection).css('display', 'none');
                        $(viewAllCarsInCustomerSection).css('display', 'none');
                        $(viewAllBookingsForCustomerSection).css('display', 'none');
                        $(viewMyAccountForCustomerSection).css('display', 'none');
                        $(placingBookingRequestInCustomer).css('display', 'none');
                        $(notificationsForCustomer).css('display', 'none');
                        $(viewDriverScheduleInDriverSection).css('display', 'none');
                        $(viewDriverAccountSection).css('display', 'none');
                        $(notificationsForAdmin).css('display', 'none');

                        if ($(navBarItems).children('div:nth-child(2)').children('ul').children().length == 0) {
                            let homeBtn = document.createElement("li");
                            homeBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aforhomeBtn = document.createElement('a');
                            aforhomeBtn.className = 'nav-link active';
                            aforhomeBtn.ariaCurrent = 'page';
                            aforhomeBtn.href = "#homeSection";
                            aforhomeBtn.innerHTML = "Home";
                            aforhomeBtn.className = "text-black text-decoration-none";
                            homeBtn.append(aforhomeBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(homeBtn);

                            $(homeBtn).click(function () {
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'flex');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })


                            let viewCarsBtn = document.createElement("li");
                            viewCarsBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aForViewCarsBtn = document.createElement('a');
                            aForViewCarsBtn.className = 'nav-link active';
                            aForViewCarsBtn.ariaCurrent = 'page';
                            aForViewCarsBtn.href = "#viewAllCarsInCustomerSection";
                            aForViewCarsBtn.innerHTML = "View Cars";
                            aForViewCarsBtn.className = "text-black text-decoration-none";
                            viewCarsBtn.append(aForViewCarsBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(viewCarsBtn);

                            $(viewCarsBtn).off('click')
                            $(viewCarsBtn).click(function () {
                                setViewAllCarsBookingBtnsDisableAndEnable(true);
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'flex');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })

                            $(leftNavBtnForCarView).css('cursor', 'pointer')
                            $(rightNavBtnForCarView).css('cursor', 'pointer')
                            let cardsContainingContainerInCustomerSection = $("#cardsContainingContainerInCustomerSection");
                            let count = 4;
                            $(leftNavBtnForCarView).click(function () {
                                console.log('invoked');
                                $(cardsContainingContainerInCustomerSection).css('right', count + "%");
                                count += 4;
                            })
                            $(rightNavBtnForCarView).click(function () {
                                console.log('invoked');
                                $(cardsContainingContainerInCustomerSection).css('right', count + "%");
                                count -= 4;
                            })

                            let viewMyBookingsBtn = document.createElement("li");
                            viewMyBookingsBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aForViewMyBookingsBtn = document.createElement('a');
                            aForViewMyBookingsBtn.className = 'nav-link active';
                            aForViewMyBookingsBtn.ariaCurrent = 'page';
                            aForViewMyBookingsBtn.href = "#viewAllBookingsForCustomerSection";
                            aForViewMyBookingsBtn.innerHTML = "View My Bookings";
                            aForViewMyBookingsBtn.className = "text-black text-decoration-none";
                            viewMyBookingsBtn.append(aForViewMyBookingsBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(viewMyBookingsBtn);
                            let viewBookingDetailsBtnInCustomer = $("#viewBookingDetailsBtnInCustomer");
                            let viewAllBookingDetailsInCustomerSection = $("#viewAllBookingDetailsInCustomerSection")
                            let viewAllBookingInViewAllCustomerSection = $("#viewAllBookingInViewAllCustomerSection");
                            $(viewMyBookingsBtn).click(function () {
                                getCustomerOwnBookings();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'flex');
                                $(viewAllBookingDetailsInCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })
                            $(viewBookingDetailsBtnInCustomer).click(function () {
                                console.log('clicked')
                                $(viewAllBookingDetailsInCustomerSection).css('display', 'flex');
                                $(viewAllBookingInViewAllCustomerSection).css('display', 'none');
                            })
                            $(viewBookingDetailsBtnInCustomer).dblclick(function () {
                                $(viewAllBookingDetailsInCustomerSection).css('display', 'none');
                                $(viewAllBookingInViewAllCustomerSection).css('display', 'flex');
                            })

                            let myAccountBtn = document.createElement("li");
                            myAccountBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aForMyAccountBtn = document.createElement('a');
                            aForMyAccountBtn.className = 'nav-link active';
                            aForMyAccountBtn.ariaCurrent = 'page';
                            aForMyAccountBtn.href = "#viewMyAccountForCustomerSection";
                            aForMyAccountBtn.innerHTML = "My Account";
                            aForMyAccountBtn.className = "text-black text-decoration-none";
                            myAccountBtn.append(aForMyAccountBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(myAccountBtn);
                            $(myAccountBtn).click(function () {
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'flex');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })

                            let placeBookingRequestBtn = document.createElement("li");
                            placeBookingRequestBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aForPlaceBookingRequestBtn = document.createElement('a');
                            aForPlaceBookingRequestBtn.className = 'nav-link active';
                            aForPlaceBookingRequestBtn.ariaCurrent = 'page';
                            aForPlaceBookingRequestBtn.href = "#placingBookingRequestInCustomer";
                            aForPlaceBookingRequestBtn.innerHTML = "Place Booking Request";
                            aForPlaceBookingRequestBtn.className = "text-black text-decoration-none";
                            placeBookingRequestBtn.append(aForPlaceBookingRequestBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(placeBookingRequestBtn);
                            $(placeBookingRequestBtn).click(function () {
                                setBookingIdToField();
                                setBookingRequestView();
                                appendCarSelectionOrInputContainer();
                            })

                            let notificationsBtn = document.createElement("li");
                            notificationsBtn.className = 'nav-nav-item d-flex flex-row ms-3 me-3';

                            let div1 = document.createElement("div");
                            div1.className = 'd-flex col align-items-center justify-content-center';

                            let aforNotificationsBtn = document.createElement('a');
                            aforNotificationsBtn.className = 'nav-link active d-flex flex-column col';
                            aforNotificationsBtn.ariaCurrent = 'page';
                            aforNotificationsBtn.href = "#notificationsForCustomer";
                            aforNotificationsBtn.innerHTML = "Notifications";
                            aforNotificationsBtn.className = "text-black text-decoration-none";

                            div1.append(aforNotificationsBtn);

                            let notification = document.createElement('div');
                            notification.className = 'd-flex col align-items-center justify-content-center ms-1'
                            let iTag = document.createElement('i');
                            iTag.className = 'fa-solid fa-bell';
                            notification.append(iTag);
                            notificationsBtn.append(div1);
                            notificationsBtn.append(notification);

                            $(navBarItems).children('div:nth-child(2)').children('ul').append(notificationsBtn);

                            $(notificationsBtn).click(function () {
                                setNotificationsToDisplay();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'flex');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })
                        }
                    }
                }
            }
        })

        $.ajax({
            url: baseUrl + "driver/loginCheckDriver?email=" + userNameLoginId.val() + "&password=" + passwordLoginId.val(),
            method: "GET",
            success: function (resp) {
                if (resp.status = 200) {
                    if (resp.data == true) {
                        console.log('driver');
                        $(signupBtn).css('display', 'none')
                        $(headerNav).css('display', 'block');
                        $(homeSection).css('display', 'none');
                        $(customerSection).css('display', 'none');
                        $(loginSection).css('display', 'none');
                        $(adminSection).css('display', 'none');
                        $(carSection).css('display', 'none');
                        $(customerDetailsSection).css('display', 'none');
                        $(driverSection).css('display', 'none');
                        $(bookingRequestSection).css('display', 'none');
                        $(bookingSection).css('display', 'none');
                        $(viewAllBookingsSection).css('display', 'none');
                        $(viewAllBookingDetailsSection).css('display', 'none');
                        $(incomeSection).css('display', 'none')
                        $(viewAllCarsInCustomerSection).css('display', 'none');
                        $(viewAllBookingsForCustomerSection).css('display', 'none');
                        $(viewMyAccountForCustomerSection).css('display', 'none');
                        $(placingBookingRequestInCustomer).css('display', 'none');
                        $(notificationsForCustomer).css('display', 'none');
                        $(viewDriverScheduleInDriverSection).css('display', 'flex');
                        $(viewDriverAccountSection).css('display', 'none');
                        $(notificationsForAdmin).css('display', 'none');

                        if ($(navBarItems).children('div:nth-child(2)').children('ul').children().length == 0) {
                            setDriverScheduleToTable();
                            let driverScheduleBtn = document.createElement("li");
                            driverScheduleBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aforDriverScheduleBtn = document.createElement('a');
                            aforDriverScheduleBtn.className = 'nav-link active';
                            aforDriverScheduleBtn.ariaCurrent = 'page';
                            aforDriverScheduleBtn.href = "#viewDriverScheduleInDriverSection";
                            aforDriverScheduleBtn.innerHTML = "Schedule";
                            aforDriverScheduleBtn.className = "text-black text-decoration-none";
                            driverScheduleBtn.append(aforDriverScheduleBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(driverScheduleBtn);

                            $(driverScheduleBtn).click(function () {
                                setDriverScheduleToTable();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'flex');
                                $(viewDriverAccountSection).css('display', 'none');
                                $(notificationsForAdmin).css('display', 'none');
                            })

                            let viewMyAccountBtn = document.createElement("li");
                            viewMyAccountBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
                            let aforViewMyAccountBtn = document.createElement('a');
                            aforViewMyAccountBtn.className = 'nav-link active';
                            aforViewMyAccountBtn.ariaCurrent = 'page';
                            aforViewMyAccountBtn.href = "#viewDriverAccountSection";
                            aforViewMyAccountBtn.innerHTML = "My Acount";
                            aforViewMyAccountBtn.className = "text-black text-decoration-none";
                            viewMyAccountBtn.append(aforViewMyAccountBtn);
                            $(navBarItems).children('div:nth-child(2)').children('ul').append(viewMyAccountBtn);

                            $(viewMyAccountBtn).click(function () {
                                setDriverAccountDetailsToTable();
                                $(headerNav).css('display', 'block');
                                $(homeSection).css('display', 'none');
                                $(customerSection).css('display', 'none');
                                $(loginSection).css('display', 'none');
                                $(adminSection).css('display', 'none');
                                $(carSection).css('display', 'none');
                                $(customerDetailsSection).css('display', 'none');
                                $(driverSection).css('display', 'none');
                                $(bookingRequestSection).css('display', 'none');
                                $(bookingSection).css('display', 'none');
                                $(viewAllBookingsSection).css('display', 'none');
                                $(viewAllBookingDetailsSection).css('display', 'none');
                                $(incomeSection).css('display', 'none');
                                $(viewAllCarsInCustomerSection).css('display', 'none');
                                $(viewAllBookingsForCustomerSection).css('display', 'none');
                                $(viewMyAccountForCustomerSection).css('display', 'none');
                                $(placingBookingRequestInCustomer).css('display', 'none');
                                $(notificationsForCustomer).css('display', 'none');
                                $(viewDriverScheduleInDriverSection).css('display', 'none');
                                $(viewDriverAccountSection).css('display', 'flex');
                                $(notificationsForAdmin).css('display', 'none');
                            })
                        }
                    }
                }
            }
        })
    } catch (e) {
        console.log(e.message)
    }

})

$(signupBtnInLogin).click(function () {
    $(adminSection).css('display', 'none');
    $(headerNav).css('display', 'none');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'flex');
    $(loginSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(notificationsForCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
    $(viewDriverAccountSection).css('display', 'none');
    $(notificationsForAdmin).css('display', 'none');
})

$(logoutBtn).click(function () {
    $(headerNav).css('display', 'none');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'block');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(notificationsForCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
    $(viewDriverAccountSection).css('display', 'none');
    $(notificationsForAdmin).css('display', 'none');
})

$(signupBtn).click(function () {
    $(headerNav).css('display', 'none');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'flex');
    $(loginSection).css('display', 'none');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(notificationsForCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
    $(viewDriverAccountSection).css('display', 'none');
    $(notificationsForAdmin).css('display', 'none');
})

$(logoutBtnInCustomerForm).click(function () {
    $(headerNav).css('display', 'none');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'block');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(notificationsForCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
    $(viewDriverAccountSection).css('display', 'none');
    $(notificationsForAdmin).css('display', 'none');
})


function getAllCars() {
    console.log('getAllCars Invoked')
    $.ajax({
        url: baseUrl + "car/getAll",
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status = 200) {
                let data = resp.data;
                addCarsToViewInTheHome(data);
                console.log(resp.data);
                let tbody = $(carViewAllTableContainer).children('table').children('tbody');
                $(tbody).empty();
                for (let i = 0; i < data.length; i++) {
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                     <td>` + data[i].c_RegNo + `</td>
                                     <td>` + data[i].brand + `</td>
                                     <td>` + data[i].type + `</td>
                                     <td>` + data[i].transmissionType + `</td>
                                     <td>` + data[i].fuelType + `</td>
                                     <td>` + data[i].noOfPassengers + `</td>
                                     <td>` + data[i].mileageInKm + `</td>
                                     <td>` + data[i].freeKmPerDay + `</td>
                                     <td>` + data[i].freeKmPerMonth + `</td>
                                     <td>` + data[i].priceForExtraKm + `</td>
                                     <td>` + data[i].dailyRate + `</td>
                                     <td>` + data[i].monthlyRate + `</td>
                                     <td>` + data[i].carBookedOrNotStatus + `</td>
                                     <td>` + data[i].maintenanceStatus + `</td>
                                     <td>` + data[i].lossDamageWaiver + `</td>
                                     <td><img src="${baseUrl + "/" + data[i].images.firstImage}" width="100px"></td>
                                     <td><img src="${baseUrl + "/" + data[i].images.secondImage}" width="100px"></td>
                                     <td><img src="${baseUrl + "/" + data[i].images.thirdImage}" width="100px"></td>
                                     <td><img src="${baseUrl + "/" + data[i].images.fourthImage}" width="100px"></td>
                                     
                               </tr>`;
                    tbody.append(row);
                }
            }
        }
    })
}

function addCarsToViewInTheHome(arr) {
    carBookingChooserBtnArr.splice(0, carBookingChooserBtnArr.length);
    let cardsContainingContainerInCustomerSection = $("#cardsContainingContainerInCustomerSection");
    $(cardsContainingContainerInCustomerSection).empty();
    console.log("Cars Arr Length = " + arr.length)
    for (let i = 0; i < arr.length; i++) {
        let rootContainerDiv = document.createElement("div");
        rootContainerDiv.className = 'col-1 card d-flex ms-3 me-3 align-items-center justify-content-center shadow-lg';
        rootContainerDiv.style.height = '100%';

        let rootContainerDivFirstChildDiv = document.createElement("div");
        rootContainerDivFirstChildDiv.className = 'row d-flex align-items-center justify-content-center';
        rootContainerDivFirstChildDiv.style.width = '100%';
        rootContainerDivFirstChildDiv.style.height = '100%';

        let rootContainerDivFirstChildDivFirstChildDiv = document.createElement("div");
        rootContainerDivFirstChildDivFirstChildDiv.className = 'col-12 d-flex ps-0 pe-0 flex-wrap';
        rootContainerDivFirstChildDivFirstChildDiv.style.height = '65%';

        let firstImgDiv = document.createElement("div");
        firstImgDiv.className = 'col-6';

        let firstImg = document.createElement('img');
        firstImg.className = 'w-100 h-100';
        firstImg.alt = "";
        firstImg.src = baseUrl + arr[i].images.firstImage;

        firstImgDiv.append(firstImg);

        let secondImgDiv = document.createElement("div");
        secondImgDiv.className = 'col-6';

        let secondImg = document.createElement('img');
        secondImg.className = 'w-100 h-100';
        secondImg.alt = "";
        secondImg.src = baseUrl + arr[i].images.secondImage;

        secondImgDiv.append(secondImg);

        let thirdImgDiv = document.createElement("div");
        thirdImgDiv.className = 'col-6';

        let thirdImg = document.createElement('img');
        thirdImg.className = 'w-100 h-100';
        thirdImg.alt = "";
        thirdImg.src = baseUrl + arr[i].images.thirdImage;

        thirdImgDiv.append(thirdImg);

        let fourthImgDiv = document.createElement("div");
        fourthImgDiv.className = 'col-6';

        let fourthImg = document.createElement('img');
        fourthImg.className = 'w-100 h-100';
        fourthImg.alt = "";
        fourthImg.src = baseUrl + arr[i].images.fourthImage;

        fourthImgDiv.append(fourthImg);

        rootContainerDivFirstChildDivFirstChildDiv.append(firstImgDiv);
        rootContainerDivFirstChildDivFirstChildDiv.append(secondImgDiv);
        rootContainerDivFirstChildDivFirstChildDiv.append(thirdImgDiv);
        rootContainerDivFirstChildDivFirstChildDiv.append(fourthImgDiv);

        let btnContainer = document.createElement("div");
        btnContainer.className = 'col-12 flex-wrap d-flex align-items-center justify-content-center';
        btnContainer.style.height = '35%';

        let firstChildDivInBtnContainer = document.createElement('div');
        firstChildDivInBtnContainer.className = 'col-12 text-center justify-content-center align-items-center d-flex';
        firstChildDivInBtnContainer.style.height = '60%';

        let h5InFirstChildDivInBtnContainer = document.createElement('h5');
        let topic = arr[i].images.firstImage.split("/")[1];
        console.log("Topic = " + topic);
        h5InFirstChildDivInBtnContainer.innerHTML = topic.split("(")[0];

        let secondChildDivInBtnContainer = document.createElement('div');
        secondChildDivInBtnContainer.className = 'col-12 d-flex align-items-center justify-content-center';
        secondChildDivInBtnContainer.style.height = '40%';

        let btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.innerHTML = 'Book Now';
        btn.id = (i + 1) + "carBookBtn";
        $(btn).prop('disabled', true);
        let btnWithCarRegNo = {
            carRegNo: arr[i].c_RegNo,
            btn: btn,
        }
        carBookingChooserBtnArr.push(btnWithCarRegNo);
        $(btn).click(function () {
            setBookingRequestView();
            appendCarSelectionOrInputContainer();
            $('#carRegNoInPlacingBookingRequest').val(carBookingChooserBtnArr[i].carRegNo);
            searchCarDetails(carBookingChooserBtnArr[i].carRegNo);
            setBookingIdToField();
        })
        firstChildDivInBtnContainer.append(h5InFirstChildDivInBtnContainer);
        secondChildDivInBtnContainer.append(btn);
        btnContainer.append(firstChildDivInBtnContainer);
        btnContainer.append(secondChildDivInBtnContainer);
        rootContainerDivFirstChildDiv.append(rootContainerDivFirstChildDivFirstChildDiv);
        rootContainerDivFirstChildDiv.append(btnContainer);
        rootContainerDiv.append(rootContainerDivFirstChildDiv);
        cardsContainingContainerInCustomerSection.append(rootContainerDiv);
    }
}

function setViewAllCarsBookingBtnsDisableAndEnable(bool) {
    for (let i = 0; i < carBookingChooserBtnArr.length; i++) {
        if (bool == true) {
            let car = checkWhetherCarIsAlreadyBookedOrNot(carBookingChooserBtnArr[i].carRegNo);
            if (car.carBookedOrNotStatus == 'Booked' || car.maintenanceStatus == 'Under Maintenance') {
                $(carBookingChooserBtnArr[i].btn).prop('disabled', true);
            } else {
                $(carBookingChooserBtnArr[i].btn).prop('disabled', false);
            }
        } else {
            $(carBookingChooserBtnArr[i].btn).prop('disabled', true);
        }
    }
}

function appendCarSelectionOrInputContainer() {
    let appendCarSelectionOrInputContainerId = $("#appendCarSelectionOrInputContainerId");
    $(appendCarSelectionOrInputContainerId).empty();
    let label = document.createElement('label');
    label.className = 'form-label';
    label.htmlFor = 'carRegNoInPlacingBookingRequest';
    label.innerHTML = 'Car Reg No';

    let input = document.createElement('input');
    input.className = 'form-control';
    input.id = 'carRegNoInPlacingBookingRequest';
    input.placeholder = 'Enter Car Reg No';
    input.type = 'text';

    $(appendCarSelectionOrInputContainerId).append(label);
    $(appendCarSelectionOrInputContainerId).append(input);
}

function setBookingRequestView() {
    $(headerNav).css('display', 'block');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'none');
    $(adminSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none');
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'flex');
    $(notificationsForCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
    $(viewDriverAccountSection).css('display', 'none');
    $(notificationsForAdmin).css('display', 'none');

}


function checkWhetherCarIsAlreadyBookedOrNot(regNo) {
    let car = undefined;
    $.ajax({
        url: baseUrl + "car/search?regNo=" + regNo,
        async: false,
        method: 'GET',
        success: function (resp) {
            if (resp.status == 200) {
                car = resp.data;
            }
        },
        error: function (error) {
            alert(error.message);
        }

    })
    return car;


}