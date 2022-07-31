var numberOfRegisteredCustomersId = $("#numberOfRegisteredCustomersId");
var totalBookingsOfTheDayId = $("#totalBookingsOfTheDayId");
var numberOfAvailableAndReservedCarsId = $("#numberOfAvailableAndReservedCarsId");
var numberOfBookingsActiveTodayId = $("#numberOfBookingsActiveTodayId");
var numberOfAvailableAndOccupiedDriversId = $("#numberOfAvailableAndOccupiedDriversId");
var numberOfCarsUnderMaintenanceAndNeedMaintenanceId = $("#numberOfCarsUnderMaintenanceAndNeedMaintenanceId");

$(document).ready(function () {
    setNumberOfRegisteredCustomersId();
    setCountOfBookingsToday();
})

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

