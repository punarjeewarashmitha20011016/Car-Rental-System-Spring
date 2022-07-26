var bookingRequestTableContainer = $("#bookingRequestTableContainer");
var bookingRequestDetailsTableContainer = $("#bookingRequestDetailsTableContainer");

var bookingRequestSearchFieldInAcceptRequest = $("#bookingRequestSearchFieldInAcceptRequest");
var bookingRequestSearchFieldInAcceptRequestBtn = $("#bookingRequestSearchFieldInAcceptRequestBtn");

var bookingRequestIdInAcceptAdmin = $("#bookingRequestIdInAcceptAdmin");
var bookingRequestCusNicInAcceptAdmin = $("#bookingRequestCusNicInAcceptAdmin");
var bookingRequestDateInAcceptAdmin = $("#bookingRequestDateInAcceptAdmin");
var bookingRequestTimeInAcceptAdmin = $("#bookingRequestTimeInAcceptAdmin");
var bookingRequestCostInAcceptAdmin = $("#bookingRequestCostInAcceptAdmin");

var bookingRequestSaveBtnInAcceptAdmin = $("#bookingRequestSaveBtnInAcceptAdmin");
var bookingRequestUpdateBtnInAcceptAdmin = $("#bookingRequestUpdateBtnInAcceptAdmin");
var bookingRequestDeleteBtnInAcceptAdmin = $("#bookingRequestDeleteBtnInAcceptAdmin");


$(document).ready(function () {
    $(bookingRequestIdInAcceptAdmin).prop("disabled", true);
    $(bookingRequestCusNicInAcceptAdmin).prop("disabled", true);
    $(bookingRequestDateInAcceptAdmin).prop("disabled", true);
    $(bookingRequestTimeInAcceptAdmin).prop("disabled", true);
    $(bookingRequestCostInAcceptAdmin).prop("disabled", true);
})

$(bookingRequestSearchFieldInAcceptRequest).off('keyup');
$(bookingRequestSearchFieldInAcceptRequest).keyup(function () {
    let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    $(bookingRequestTableContainer).children('table').children('tbody').children('tr').show().filter(function () {
        let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
})

function setRequestsDataToTable() {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/getAll",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                let tbody = $(bookingRequestTableContainer).children("table").children("tbody");
                tbody.empty();
                for (let i = 0; i < data.length; i++) {
                    let dt = data[i].date;
                    let tm = data[i].time;
                    let date = dt[0] + "-" + dt[1] + "-" + dt[2];
                    console.log(date)
                    let row = `<tr>
                           <td>` + (i + 1) + `</td>
                           <td>` + data[i].boId + `</td>
                           <td>` + data[i].cusNic + `</td>
                           <td>` + date + `</td>
                           <td>` + tm + `</td>
                           <td>` + data[i].cost + `</td>
                    </tr>`

                    tbody.append(row);
                }
                setDataFromRequestTableToContainerWhenClickedARow();
            }
        }
    })
}

$(bookingRequestSearchFieldInAcceptRequestBtn).click(function () {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/search?boId=" + bookingRequestSearchFieldInAcceptRequest.val(),
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                let bookingDetails = data.bookingDetails;
                let tbody = $(bookingRequestDetailsTableContainer).children('table').children('tbody');
                tbody.empty();
                for (let i = 0; i < bookingDetails.length; i++) {
                    let row = `<tr>
                           <td>` + (i + 1) + `</td>
                           <td>` + bookingDetails[i].bookingId + `</td>
                           <td>` + bookingDetails[i].car_RegNo + `</td>
                           <td>` + bookingDetails[i].driverNic + `</td>
                           <td>` + bookingDetails[i].carType + `</td>
                           <td>` + bookingDetails[i].tripInKm + `</td>
                           <td>` + bookingDetails[i].dateOfPickup + `</td>
                           <td>` + bookingDetails[i].timeOfPickup + `</td>
                           <td>` + bookingDetails[i].pickupVenue + `</td>
                           <td>` + bookingDetails[i].returnedDate + `</td>
                           <td>` + bookingDetails[i].returnedTime + `</td>
                           <td>` + bookingDetails[i].returnedVenue + `</td>
                           <td>` + bookingDetails[i].lossDamage + `</td>
                           <td>` + bookingDetails[i].cost + `</td>
                    </tr>`
                    tbody.append(row);
                }
            }
        },
        error: function (error) {
            alert(error.message);
        }
    })
})

function setDataFromRequestTableToContainerWhenClickedARow() {
    console.log("invoked");
    let tbody = $(bookingRequestTableContainer).children("table").children('tbody');
    let arr = $(tbody).children();
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        console.log($(arr[i]).children())
        $(arr[i]).click(function () {
            $(bookingRequestIdInAcceptAdmin).val($(arr[i]).children("td:nth-child(2)").text());
            $(bookingRequestCusNicInAcceptAdmin).val($(arr[i]).children("td:nth-child(3)").text());
            $(bookingRequestDateInAcceptAdmin).val($(arr[i]).children("td:nth-child(4)").text());
            $(bookingRequestTimeInAcceptAdmin).val($(arr[i]).children("td:nth-child(5)").text());
            $(bookingRequestCostInAcceptAdmin).val($(arr[i]).children("td:nth-child(6)").text());
        })
    }
}