var customerOwnBookingDetailsSearchField = $("#customerOwnBookingDetailsSearchField");

function getCustomerOwnBookings() {
    let customer = searchCustomerByEmail();
    let details = undefined;
    $.ajax({
        url: baseUrl + "bookingCarRequestController/getCustomerOwnBookings?nic=" + customer.nic,
        method: 'GET',
        async: false,
        success: function (resp) {
            let data = resp.data;
            details = resp.data;
            let tbody = $('#cusOwnBookingsTable tbody');
            $(tbody).empty();
            for (let i = 0; i < data.length; i++) {
                let row = `<tr>
                               <td>` + (i + 1) + `</td>
                               <td>` + data[i].boId + `</td>
                               <td>` + data[i].reqStatus + `</td>
                               <td>` + data[i].cusNic + `</td>
                               <td>` + data[i].bookedDate + `</td>
                               <td>` + data[i].bookedTime + `</td>
                               <td>` + data[i].cost + `</td>
                            </tr>`
                $(tbody).append(row);
            }
        }
    })
    return details;
}

$('#searchBookingDetailsBtnInCustomer').off('click');
$('#searchBookingDetailsBtnInCustomer').click(function () {
    let bookings = getCustomerOwnBookings();
    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].boId == customerOwnBookingDetailsSearchField.val()) {
            let details = bookings[i].details;
            for (let j = 0; j < details.length; j++) {
                let tbody = $("#cusOwnBookingsDetailsTable tbody");
                $(tbody).empty();
                let row = `<tr>
                                <td>` + (j + 1) + `</td>
                                <td>` + details[j].bookingId + `</td>
                                <td>` + details[j].car_RegNo + `</td>
                                <td>` + details[j].driverNic + `</td>
                                <td>` + details[j].carType + `</td>
                                <td>` + details[j].rentalType + `</td>
                                <td>` + details[j].dateOfPickup + `</td>
                                <td>` + details[j].timeOfPickup + `</td>
                                <td>` + details[j].pickupVenue + `</td>
                                <td>` + details[j].returnedDate + `</td>
                                <td>` + details[j].returnedTime + `</td>
                                <td>` + details[j].returnedVenue + `</td>
                                <td>` + details[j].lossDamage + `</td>
                                <td>` + details[j].cost + `</td>
                            </tr>`
                $(tbody).append(row);
            }
        }
    }
})