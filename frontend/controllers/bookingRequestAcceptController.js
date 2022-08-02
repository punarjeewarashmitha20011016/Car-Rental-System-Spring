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
var bookingRequestDeleteBtnInAcceptAdmin = $("#bookingRequestDeleteBtnInAcceptAdmin");

let notificationsForCustomerSection = $("#notificationsForCustomer");

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

let bookingRequestSearchedObj = undefined;

function setRequestsDataToTable() {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/getAll",
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                let tbody = $(bookingRequestTableContainer).children("table").children("tbody");
                $(tbody).empty();
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

                    $(tbody).append(row);
                }
                setDataFromRequestTableToContainerWhenClickedARow();
            }
        }
    })
}

$(bookingRequestSearchFieldInAcceptRequestBtn).click(function () {
    searchBookingRequestById(bookingRequestSearchFieldInAcceptRequest.val());
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

$(bookingRequestSaveBtnInAcceptAdmin).click(function () {
    searchBookingRequestById(bookingRequestIdInAcceptAdmin.val());
    console.log(bookingRequestSearchedObj)
    if (bookingRequestIdInAcceptAdmin.val() == bookingRequestSearchedObj.boId) {
        if (confirm("Do You Want To Accept This Booking Request..?") == true) {
            $.ajax({
                    url: baseUrl + "bookingCarRequestController/pendingBookingRequestSave",
                    method: "POST",
                    data: JSON.stringify(bookingRequestSearchedObj),
                    contentType: "application/json",
                    success: function (resp) {
                        if (resp.status == 200) {
                            alert(resp.message);
                            setNotificationsToDisplay();
                            setRequestsDataToTable();
                            clearFieldsInRequestAcceptInAdmin();
                        }
                    },
                    error: function (error) {
                        alert(error.message);
                    }
                }
            )
        }
    }
})
$(bookingRequestDeleteBtnInAcceptAdmin).click(function () {
    searchBookingRequestById(bookingRequestIdInAcceptAdmin.val());
    console.log(bookingRequestSearchedObj)
    if (confirm("Do You Want To Decline This Booking Request..?") == true) {
        $.ajax({
            url: baseUrl + "bookingCarRequestController/deleteBookingRequestWhenDeclined?boId=" + bookingRequestIdInAcceptAdmin.val(),
            method: "DELETE",
            success: function (resp) {
                if (resp.status == 200) {
                    alert(resp.message);
                    setNotificationsToDisplay();
                    setRequestsDataToTable();
                    clearFieldsInRequestAcceptInAdmin();
                }
            },
            error: function (error) {
                alert(error.message);
            }
        })
    }
})

function searchBookingRequestById(id) {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/search?boId=" + id,
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                bookingRequestSearchedObj = data;
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
                           <td>` + bookingDetails[i].rentalType + `</td>
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
}

function clearFieldsInRequestAcceptInAdmin() {
    $(bookingRequestIdInAcceptAdmin).val("");
    $(bookingRequestCusNicInAcceptAdmin).val("");
    $(bookingRequestDateInAcceptAdmin).val("");
    $(bookingRequestTimeInAcceptAdmin).val("");
    $(bookingRequestCostInAcceptAdmin).val("");
}

function setNotificationsToDisplay() {
    $(notificationsForCustomerSection).children('div:nth-child(1)').children('div:nth-child(1)').empty();
    let notificationsArr = getAllNotifications();
    for (let i = 0; i < notificationsArr.length; i++) {
        console.log(notificationsArr[i]);
        let notificationRow = document.createElement("div");
        notificationRow.className = 'd-flex row flex-row justify-content-center align-items-center mt-2 mb-2';
        notificationRow.style.width = '100%';
        notificationRow.style.height = 'calc(100%/5)';
        notificationRow.style.backgroundColor = 'rgb(142 201 181)';
        notificationRow.style.borderRadius = '3%'

        let notification = document.createElement('div');
        notification.className = 'd-flex col-12 flex-row justify-content-center align-items-center';
        notification.style.height = '100%';

        let message = document.createElement('div');
        message.className = 'd-flex col-8 justify-content-start align-items-center';
        message.style.height = '100%';

        let msgTxt = document.createElement('h5');
        msgTxt.className = 'd-flex text-center text-white';
        msgTxt.innerHTML = notificationsArr[i].message;

        message.append(msgTxt);

        let clearBtn = document.createElement('div');
        clearBtn.className = 'd-flex col-4 justify-content-center align-items-center text-center';
        clearBtn.style.height = '100%';

        let closeBtn = document.createElement('i');
        closeBtn.className = 'fa-solid fa-xmark d-flex text-black fa-2x';
        closeBtn.style.cursor = 'pointer';

        $(closeBtn).click(function () {
            $(notificationRow).remove();
        })

        clearBtn.append(closeBtn);
        notification.append(message);
        notification.append(closeBtn);
        notificationRow.append(notification);
        $(notificationsForCustomerSection).children('div:nth-child(1)').children('div:nth-child(1)').append(notificationRow);
    }
}

function getAllNotifications() {
    let notifications = undefined;
    $.ajax({
        url: baseUrl + "bookingCarRequestController/getAllNotifications",
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                notifications = resp.data;
            }
        }
    })
    return notifications;
}
