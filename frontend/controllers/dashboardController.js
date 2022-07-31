var numberOfRegisteredCustomersId = $("#numberOfRegisteredCustomersId");
var totalBookingsOfTheDayId = $("#totalBookingsOfTheDayId");
var numberOfAvailableAndReservedCarsId = $("#numberOfAvailableAndReservedCarsId");
var numberOfBookingsActiveTodayId = $("#numberOfBookingsActiveTodayId");
var numberOfAvailableAndOccupiedDriversId = $("#numberOfAvailableAndOccupiedDriversId");
var numberOfCarsUnderMaintenanceAndNeedMaintenanceId = $("#numberOfCarsUnderMaintenanceAndNeedMaintenanceId");

function setNumberOfRegisteredCustomersId() {
    $.ajax({
        url: baseUrl + "customer/countAllCustomers",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                $(numberOfRegisteredCustomersId).text(resp.data);
            } else {
                $(numberOfRegisteredCustomersId).text("");
            }
        }
    })
}

function setCountOfBookingsToday() {
    $.ajax({
        url: baseUrl + "bookingCarController/getCountOfTodayBookings",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                $(totalBookingsOfTheDayId).text(resp.data);
            } else {
                $(totalBookingsOfTheDayId).text("");
            }
        }
    })
}

function setCountOfCars() {
    $.ajax({
        url: baseUrl + "car/countAllCars",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                $(numberOfAvailableAndReservedCarsId).text(resp.data);
            } else {
                $(numberOfAvailableAndReservedCarsId).text("");
            }
        }
    })
}

function setCountOfPendingBookingsToday() {
    $.ajax({
        url: baseUrl + "bookingCarController/getCountOfTodayPendingBookings",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                $(numberOfBookingsActiveTodayId).text(resp.data);
            } else {
                $(numberOfBookingsActiveTodayId).text("");
            }
        }
    })
}

function setCountOfRegisteredDrivers() {
    $.ajax({
        url: baseUrl + "driver/countRegisteredDrivers",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                $(numberOfAvailableAndOccupiedDriversId).text(resp.data);
            } else {
                $(numberOfAvailableAndOccupiedDriversId).text("");
            }
        }
    })
}

function setCountAllCarsUnderAndNeedMaintenance() {
    $.ajax({
        url: baseUrl + "car/countAllCarsUnderAndNeedMaintenance",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                $(numberOfCarsUnderMaintenanceAndNeedMaintenanceId).text(resp.data);
            } else {
                $(numberOfCarsUnderMaintenanceAndNeedMaintenanceId).text("");
            }
        }
    })
}

