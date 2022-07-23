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
var viewCarScheduleSection = $("#viewCarScheduleSection");
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
// var viewForBothBookingAndDetailsTableInAdmin = $("#viewForBothBookingAndDetailsTableInAdmin");
var incomeSection = $("#incomeSection");

var viewCurrentBookingDetailsBtn = $("#viewCurrentBookingDetailsBtn");
var viewCurrentBookingDetailsSection = $("#viewAllCurrentBookingDetailsSection");

var viewAllBookingDetailsSection = $("#viewAllBookingDetailsSection");
var viewAllBookingDetailsBtn = $("#viewAllBookingDetailsBtn");

var placingBookingInAdminBookingSection = $("#placingBookingInAdminBookingSection");

var viewAllCarsInCustomerSection = $("#viewAllCarsInCustomerSection");

var leftNavBtnForCarView =$("#leftNavBtnForCarView");
var rightNavBtnForCarView =$("#rightNavBtnForCarView");

var viewAllBookingsForCustomerSection = $("#viewAllBookingsForCustomerSection");
var viewMyAccountForCustomerSection = $("#viewMyAccountForCustomerSection");
var placingBookingRequestInCustomer = $("#placingBookingRequestInCustomer");

var viewDriverScheduleInDriverSection = $("#viewDriverScheduleInDriverSection");

$(document).ready(function(){
    $(arr).remove();
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
            $(carViewAllSection).css('display', 'none');
            $(viewCarScheduleSection).css('display', 'none');
            $(driverSection).css('display', 'none');
            $(viewDriverDetailsSection).css('display', 'none');
            $(bookingRequestSection).css('display', 'none');
            $(bookingRequestDetailsSection).css('display', 'none');
            $(bookingSection).css('display', 'none');
            $(viewAllBookingsSection).css('display', 'none');
            $(viewCurrentBookingDetailsSection).css('display', 'none');
            $(viewAllBookingDetailsSection).css('display', 'none');
            $(incomeSection).css('display', 'none');
            $(viewAllCarsInCustomerSection).css('display', 'none');
            $(viewAllBookingsForCustomerSection).css('display', 'none');
            $(viewMyAccountForCustomerSection).css('display', 'none');
            $(placingBookingRequestInCustomer).css('display', 'none');
            $(viewDriverScheduleInDriverSection).css('display', 'none');
            $(viewCarScheduleSection).css('display', 'none');
        })

        $(viewAllCarsForUserBtn).click(function(){
            $(leftNavBtnForCarView).css('cursor','pointer')
            $(rightNavBtnForCarView).css('cursor','pointer')
            let cardsContainingContainerInCustomerSection = $("#cardsContainingContainerInCustomerSection");
            let count = 4;
            $(leftNavBtnForCarView).click(function(){
            console.log('invoked');
            $(cardsContainingContainerInCustomerSection).css('right',count+"%");
                count+=4;
            })
            $(rightNavBtnForCarView).click(function(){
            console.log('invoked');
            $(cardsContainingContainerInCustomerSection).css('right',count+"%");
                count-=4;
            })

            $(headerNav).css('display', 'block');
            $(homeSection).css('display', 'none');
            $(customerSection).css('display', 'none');
            $(loginSection).css('display', 'none');
            $(adminSection).css('display', 'none');
            $(carSection).css('display', 'none');
            $(customerDetailsSection).css('display', 'none');
            $(carViewAllSection).css('display', 'none');
            $(viewCarScheduleSection).css('display', 'none');
            $(driverSection).css('display', 'none');
            $(viewDriverDetailsSection).css('display', 'none');
            $(bookingRequestSection).css('display', 'none');
            $(bookingRequestDetailsSection).css('display', 'none');
            $(bookingSection).css('display', 'none');
            $(viewAllBookingsSection).css('display', 'none');
            $(viewCurrentBookingDetailsSection).css('display', 'none');
            $(viewAllBookingDetailsSection).css('display', 'none');
            $(incomeSection).css('display', 'none');
            $(viewAllCarsInCustomerSection).css('display', 'flex');
            $(viewAllBookingsForCustomerSection).css('display', 'none');
            $(viewMyAccountForCustomerSection).css('display', 'none');
            $(placingBookingRequestInCustomer).css('display', 'none');
            $(viewDriverScheduleInDriverSection).css('display', 'none');
            $(viewCarScheduleSection).css('display', 'none');
        })
    }
})

$(loginBtn).off();
$(loginBtn).click(function () {
    let arr = $(navBarItems).children('div:nth-child(2)').children('ul').children();
    $(arr).remove();
    console.log($(navBarItems).children('div:nth-child(2)').children('ul').children());
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'flex');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'flex');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
            })

            $(viewCarScheduleBtn).click(function(){
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'flex');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'flex');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'flex');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'flex');
                $(bookingSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewCurrentBookingDetailsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
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
                $(viewCarScheduleSection).css('display', 'none');
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
                $(placingBookingInAdminBookingSection).css('display', 'flex');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');

                $(viewCurrentBookingsBtn).click(function () {
                    $(placingBookingInAdminBookingSection).css('display', 'none');
                    $(viewCurrentBookingsSection).css('display', 'flex');
                })
                $(viewCurrentBookingsBtn).dblclick(function () {
                    $(viewCurrentBookingsSection).css('display', 'none');
                    $(placingBookingInAdminBookingSection).css('display', 'flex');
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
                $(viewCarScheduleSection).css('display', 'none');
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
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
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
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'flex');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
            })

            $(viewAllBookingDetailsBtn).click(function () {
                $(viewAllBookingDetailsSection).css('display', 'flex');
                $(viewAllBookingInViewAllBookingSection).css('display','none');
                
            })
            $(viewAllBookingDetailsBtn).dblclick(function () {
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(viewAllBookingInViewAllBookingSection).css('display','flex');
                
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
        $(viewCarScheduleSection).css('display', 'none');
        $(driverSection).css('display', 'none');
        $(viewDriverDetailsSection).css('display', 'none');
        $(bookingRequestSection).css('display', 'none');
        $(bookingRequestDetailsSection).css('display', 'none');
        $(bookingSection).css('display', 'none');
        $(viewCurrentBookingsSection).css('display', 'none');
        $(viewAllBookingsSection).css('display', 'none');
        $(viewAllBookingDetailsSection).css('display', 'none');
        $(incomeSection).css('display', 'none')
        $(viewAllCarsInCustomerSection).css('display', 'none');
        $(viewAllBookingsForCustomerSection).css('display', 'none');
        $(viewMyAccountForCustomerSection).css('display', 'none');
        $(placingBookingRequestInCustomer).css('display', 'none');
        $(viewDriverScheduleInDriverSection).css('display', 'none');

    } else if(userNameLoginId.val() == 'customer' && passwordLoginId.val() == 'customer'){
            $(headerNav).css('display', 'block');
            $(homeSection).css('display', 'flex');
            $(customerSection).css('display', 'none');
            $(loginSection).css('display', 'none');
            $(adminSection).css('display', 'none');
            $(carSection).css('display', 'none');
            $(customerDetailsSection).css('display', 'none');
            $(carViewAllSection).css('display', 'none');
            $(viewCarScheduleSection).css('display', 'none');
            $(driverSection).css('display', 'none');
            $(viewDriverDetailsSection).css('display', 'none');
            $(bookingRequestSection).css('display', 'none');
            $(bookingRequestDetailsSection).css('display', 'none');
            $(bookingSection).css('display', 'none');
            $(viewCurrentBookingsSection).css('display', 'none');
            $(viewAllBookingsSection).css('display', 'none');
            $(viewAllBookingDetailsSection).css('display', 'none');
            $(incomeSection).css('display', 'none');
            $(viewAllCarsInCustomerSection).css('display', 'none');
            $(viewAllBookingsForCustomerSection).css('display', 'none');
            $(viewMyAccountForCustomerSection).css('display', 'none');
            $(placingBookingRequestInCustomer).css('display', 'none');
            $(viewDriverScheduleInDriverSection).css('display', 'none');

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

            $(homeBtn).click(function(){
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'flex');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
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

            $(viewCarsBtn).click(function(){
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'flex');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
            })

            $(leftNavBtnForCarView).css('cursor','pointer')
            $(rightNavBtnForCarView).css('cursor','pointer')
            let cardsContainingContainerInCustomerSection = $("#cardsContainingContainerInCustomerSection");
            let count = 4;
            $(leftNavBtnForCarView).click(function(){
            console.log('invoked');
            $(cardsContainingContainerInCustomerSection).css('right',count+"%");
                count+=4;
            })
            $(rightNavBtnForCarView).click(function(){
            console.log('invoked');
            $(cardsContainingContainerInCustomerSection).css('right',count+"%");
                count-=4;
            })

            let viewMyBookingsBtn = document.createElement("li");
            viewMyBookingsBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aForViewMyBookingsBtn = document.createElement('a');
            aForViewMyBookingsBtn.className = 'nav-link active';
            aForViewMyBookingsBtn.ariaCurrent = 'page';
            aForViewMyBookingsBtn.href = "#adminSection";
            aForViewMyBookingsBtn.innerHTML = "View My Bookings";
            aForViewMyBookingsBtn.className = "text-black text-decoration-none";
            viewMyBookingsBtn.append(aForViewMyBookingsBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(viewMyBookingsBtn);
            $(viewMyBookingsBtn).click(function(){
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'flex');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
            })

            let myAccountBtn = document.createElement("li");
            myAccountBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aForMyAccountBtn = document.createElement('a');
            aForMyAccountBtn.className = 'nav-link active';
            aForMyAccountBtn.ariaCurrent = 'page';
            aForMyAccountBtn.href = "#adminSection";
            aForMyAccountBtn.innerHTML = "My Account";
            aForMyAccountBtn.className = "text-black text-decoration-none";
            myAccountBtn.append(aForMyAccountBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(myAccountBtn);
            $(myAccountBtn).click(function(){
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'flex');
                $(placingBookingRequestInCustomer).css('display', 'none');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
            })

            let placeBookingRequestBtn = document.createElement("li");
            placeBookingRequestBtn.className = 'nav-nav-item d-flex flex-column align-items-center justify-content-center ms-3 me-3';
            let aForPlaceBookingRequestBtn = document.createElement('a');
            aForPlaceBookingRequestBtn.className = 'nav-link active';
            aForPlaceBookingRequestBtn.ariaCurrent = 'page';
            aForPlaceBookingRequestBtn.href = "#adminSection";
            aForPlaceBookingRequestBtn.innerHTML = "Place Booking Request";
            aForPlaceBookingRequestBtn.className = "text-black text-decoration-none";
            placeBookingRequestBtn.append(aForPlaceBookingRequestBtn);
            $(navBarItems).children('div:nth-child(2)').children('ul').append(placeBookingRequestBtn);
            $(placeBookingRequestBtn).click(function(){
                $(headerNav).css('display', 'block');
                $(homeSection).css('display', 'none');
                $(customerSection).css('display', 'none');
                $(loginSection).css('display', 'none');
                $(adminSection).css('display', 'none');
                $(carSection).css('display', 'none');
                $(customerDetailsSection).css('display', 'none');
                $(carViewAllSection).css('display', 'none');
                $(viewCarScheduleSection).css('display', 'none');
                $(driverSection).css('display', 'none');
                $(viewDriverDetailsSection).css('display', 'none');
                $(bookingRequestSection).css('display', 'none');
                $(bookingRequestDetailsSection).css('display', 'none');
                $(bookingSection).css('display', 'none');
                $(viewCurrentBookingsSection).css('display', 'none');
                $(viewAllBookingsSection).css('display', 'none');
                $(viewAllBookingDetailsSection).css('display', 'none');
                $(incomeSection).css('display', 'none');
                $(viewAllCarsInCustomerSection).css('display', 'none');
                $(viewAllBookingsForCustomerSection).css('display', 'none');
                $(viewMyAccountForCustomerSection).css('display', 'none');
                $(placingBookingRequestInCustomer).css('display', 'flex');
                $(viewDriverScheduleInDriverSection).css('display', 'none');
            })
        }
    }else if(userNameLoginId.val() == 'driver' && passwordLoginId.val() == 'driver'){
        $(headerNav).css('display', 'block');
        $(homeSection).css('display', 'none');
        $(customerSection).css('display', 'none');
        $(loginSection).css('display', 'none');
        $(adminSection).css('display', 'none');
        $(carSection).css('display', 'none');
        $(customerDetailsSection).css('display', 'none');
        $(carViewAllSection).css('display', 'none');
        $(viewCarScheduleSection).css('display', 'none');
        $(driverSection).css('display', 'none');
        $(viewDriverDetailsSection).css('display', 'none');
        $(bookingRequestSection).css('display', 'none');
        $(bookingRequestDetailsSection).css('display', 'none');
        $(bookingSection).css('display', 'none');
        $(viewCurrentBookingsSection).css('display', 'none');
        $(viewAllBookingsSection).css('display', 'none');
        $(viewAllBookingDetailsSection).css('display', 'none');
        $(incomeSection).css('display', 'none')
        $(viewAllCarsInCustomerSection).css('display', 'none');
        $(viewAllBookingsForCustomerSection).css('display', 'none');
        $(viewMyAccountForCustomerSection).css('display', 'none');
        $(placingBookingRequestInCustomer).css('display', 'none');
        $(viewDriverScheduleInDriverSection).css('display', 'flex');
    }
})

$(signupBtnInLogin).click(function () {
    $(adminSection).css('display', 'flex');
    $(headerNav).css('display', 'block');
    $(homeSection).css('display', 'none');
    $(customerSection).css('display', 'none');
    $(loginSection).css('display', 'none');
    $(carSection).css('display', 'none');
    $(customerDetailsSection).css('display', 'none');
    $(carViewAllSection).css('display', 'none');
    $(viewCarScheduleSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
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
    $(viewCarScheduleSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
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
    $(viewCarScheduleSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
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
    $(viewCarScheduleSection).css('display', 'none');
    $(driverSection).css('display', 'none');
    $(viewDriverDetailsSection).css('display', 'none');
    $(bookingRequestSection).css('display', 'none');
    $(bookingRequestDetailsSection).css('display', 'none');
    $(bookingSection).css('display', 'none');
    $(viewCurrentBookingsSection).css('display', 'none');
    $(viewAllBookingsSection).css('display', 'none');
    $(viewAllBookingDetailsSection).css('display', 'none');
    $(incomeSection).css('display', 'none')
    $(viewAllCarsInCustomerSection).css('display', 'none');
    $(viewAllBookingsForCustomerSection).css('display', 'none');
    $(viewMyAccountForCustomerSection).css('display', 'none');
    $(placingBookingRequestInCustomer).css('display', 'none');
    $(viewDriverScheduleInDriverSection).css('display', 'none');
})