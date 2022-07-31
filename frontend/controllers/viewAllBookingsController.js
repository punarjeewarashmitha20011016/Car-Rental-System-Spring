var bookingSearchField = $("#bookingSearchField");
var bookingSearchFieldBtn = $("#bookingSearchFieldBtn");
var viewAllBookingTable = $("#viewAllBookingTable");
var viewAllBookingDetailsTable = $("#viewAllBookingDetailsTable");

$(bookingSearchFieldBtn).off('click');
$(bookingSearchFieldBtn).click(function () {
    $.ajax({
        url: baseUrl + "bookingCarController/search?boId=" + bookingSearchField.val(),
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data.bookingDetails;
                let tbody = $(viewAllBookingDetailsTable).children("tbody");
                $(tbody).empty();
                for (let i = 0; i < data.length; i++) {
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                    <td>` + data[i].bookingId + `</td>
                                    <td>` + data[i].car_RegNo + `</td>
                                    <td>` + data[i].driverNic + `</td>
                                    <td>` + data[i].carType + `</td>
                                    <td>` + data[i].rentalType + `</td>
                                    <td>` + data[i].tripInKm + `</td>
                                    <td>` + data[i].extraKmDriven + `</td>
                                    <td>` + data[i].dateOfPickup + `</td>
                                    <td>` + data[i].timeOfPickup + `</td>
                                    <td>` + data[i].pickupVenue + `</td>
                                    <td>` + data[i].returnedDate + `</td>
                                    <td>` + data[i].returnedTime + `</td>
                                    <td>` + data[i].returnedVenue + `</td>
                                    <td>` + data[i].damageStatus + `</td>
                                    <td>` + data[i].lossDamage + `</td>
                                    <td>` + data[i].cost + `</td>
                                </tr>`
                    $(tbody).append(row);
                }
            }
        }
    })
})

function getAllBookings() {
    $.ajax({
        url: baseUrl + "bookingCarController/getAll",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                let tbody = $(viewAllBookingTable).children("tbody");
                $(tbody).empty();
                for (let i = 0; i < data.length; i++) {
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                    <td>` + data[i].boId + `</td>
                                    <td>` + data[i].cusNic + `</td>
                                    <td>` + data[i].date + `</td>
                                    <td>` + data[i].time + `</td>
                                    <td>` + data[i].cost + `</td>
                                </tr>`

                    $(tbody).append(row);
                }
            }
        }
    })
}