var placeBookingBtn = $("#placeBookingBtn");
var updateBookingBtn = $("#updateBookingBtn");
var deleteBookingBtn = $("#deleteBookingBtn");

var bookingIdInBooking = $("#bookingIdInBooking");
var searchBookingBtn = $("#searchBookingBtn");

var dropDownMenuForCarRegNoInBookingInAdmin = $("#dropDownMenuForCarRegNoInBookingInAdmin");
var carRegDropDownBtnInBookingAdmin = $("#carRegDropDownBtnInBookingAdmin");

var totalCostInBooking = $("#totalCostInBooking")

var cusNicInBooking = $("#cusNicInBooking");
var driverNicInBooking = $("#driverNicInBooking");
var carTypeInBooking = $("#carTypeInBooking");
var rentalTypeInBooking = $("#rentalTypeInBooking");
var tripInKMInBooking = $("#tripInKMInBooking");
var extraKmDrivenInBooking = $("#extraKmDrivenInBooking");
var dateOfPickupInBooking = $("#dateOfPickupInBooking");
var timeOfPickupInBooking = $("#timeOfPickupInBooking");
var pickupVenueInBooking = $("#pickupVenueInBooking");
var returnedDateInBooking = $("#returnedDateInBooking");
var returnedTimeInBooking = $("#returnedTimeInBooking");
var returnVenueInBooking = $("#returnVenueInBooking");
var damageStatusInBooking = $("#damageStatusInBooking");
var lossDamageWaiverInBooking = $("#lossDamageWaiverInBooking");
var lossDamageWaiverSlipInBooking = $("#lossDamageWaiverSlipInBooking");
var costInBooking = $("#costInBooking");

var bookingRequestSearchFieldInAdmin = $("#bookingRequestSearchFieldInAdmin");
var bookingRequestSearchBtnInAdmin = $("#bookingRequestSearchBtnInAdmin");

var currentBookingsTableContainer = $("#currentBookingsTableContainer");
var currentBookingsDetailsTableContainer = $("#currentBookingsDetailsTableContainer");
var CurrentBookingsDetailsSearchField = $("#CurrentBookingsDetailsSearchField");
var CurrentBookingsDetailsSearchBtn = $("#CurrentBookingsDetailsSearchBtn");

var addToListBtnInBooking = $("#addToListBtnInBooking");
var viewListTableBtn = $("#viewListTableBtn");

let bookingObj = undefined;
let carObj = undefined;

function getAllPendingBookings() {
    let list = undefined;
    $.ajax({
        url: baseUrl + "bookingCarRequestController/getAllPendingBookings",
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status = 200) {
                let data = resp.data;
                list = data;
            }
        }
    })
    return list;
}

function setDataToPendingBookingTable(data) {
    let tbody = $(currentBookingsTableContainer).children('table').children('tbody');
    $(tbody).empty();
    for (let i = 0; i < data.length; i++) {
        let dt = data[i].date;
        let tm = data[i].time;
        let date = dt[0] + "-" + dt[1] + "-" + dt[2];
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
}

$(CurrentBookingsDetailsSearchBtn).off('click');
$(CurrentBookingsDetailsSearchBtn).click(function () {
    let data = searchPendingBooking(CurrentBookingsDetailsSearchField.val())
    setDataToPendingBookingsDetailsTable(data);
    bookingObj = data;
})

function setDataToPendingBookingsDetailsTable(arr) {
    let tbody = $(currentBookingsDetailsTableContainer).children('table').children('tbody');
    $(tbody).empty();
    let bookingDetails = arr;
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

$(searchBookingBtn).off('click');
$(searchBookingBtn).click(function () {
    let data = searchPendingBooking(bookingIdInBooking.val());
    console.log(data);
    cusNicInBooking.val(data.cusNic);
    totalCostInBooking.val(data.cost);
    setDataToDropDownMenuForCarRegNoInBookingInAdmin(data);
    setDataInPendingBookingDetailsToFields(data);
})

function searchPendingBooking(id) {
    let data = undefined;
    $.ajax({
        url: baseUrl + "bookingCarRequestController/searchPendingBooking?boId=" + id,
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                data = resp.data;
            }
        }
    })
    return data;
}

function setDataToDropDownMenuForCarRegNoInBookingInAdmin(data) {
    let arr = data.bookingDetails;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let list = document.createElement('li');
        let aTag = document.createElement('a');
        aTag.className = "dropdown-item";
        aTag.innerHTML = arr[i].car_RegNo;
        list.append(aTag);
        $(dropDownMenuForCarRegNoInBookingInAdmin).append(list);
    }
}

$(dropDownMenuForCarRegNoInBookingInAdmin).children('li').off('click');
$(dropDownMenuForCarRegNoInBookingInAdmin).children('li').click(function () {
    $(carTypeInBooking).val(searchCarDetailsInBookingAdmin($(this).text().trim()).type);
    if (carObj != undefined) {
        carObj = undefined;
    }
    carObj = searchCarDetailsInBookingAdmin($(this).text().trim());
})

function searchCarDetailsInBookingAdmin(regNo) {
    let car = undefined;
    $.ajax({
        url: baseUrl + "bookingCarRequestController/searchCarsInBooking?regNo=" + regNo,
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                car = resp.data;
            }
        }
    })
    return car;
}

function setDataInPendingBookingDetailsToFields(data) {
    let arr = data.bookingDetails;
    for (let i = 0; i < arr.length; i++) {
        let dt1 = arr[i].dateOfPickup;
        let dateOfPickup = undefined;
        if (((dt1[2] > -1) && (dt1[2] < 10)) && ((dt1[1] > -1) && (dt1[1] < 10))) {
            dateOfPickup = dt1[0] + "-" + 0 + dt1[1] + "-" + 0 + dt1[2];
        } else if ((dt1[2] > -1) && (dt1[2] < 10)) {
            dateOfPickup = dt1[0] + "-" + dt1[1] + "-" + 0 + dt1[2];
        } else if ((dt1[1] > -1) && (dt1[1] < 10)) {
            dateOfPickup = dt1[0] + "-" + 0 + dt1[1] + "-" + dt1[2];
        }
        let dt2 = arr[i].returnedDate;
        let returnedDate = undefined;
        if (((dt2[2] > -1) && (dt2[2] < 10)) && ((dt2[1] > -1) && (dt2[1] < 10))) {
            returnedDate = dt2[0] + "-" + 0 + dt2[1] + "-" + 0 + dt2[2];
        } else if ((dt2[2] > -1) && (dt2[2] < 10)) {
            returnedDate = dt2[0] + "-" + dt2[1] + "-" + 0 + dt2[2];
        } else if ((dt2[1] > -1) && (dt2[1] < 10)) {
            returnedDate = dt2[0] + "-" + 0 + dt2[1] + "-" + dt2[2];
        }

        $(driverNicInBooking).val(arr[i].driverNic);
        $(rentalTypeInBooking).val(arr[i].rentalType);
        $(dateOfPickupInBooking).val(dateOfPickup);
        $(timeOfPickupInBooking).val(arr[i].timeOfPickup);
        $(pickupVenueInBooking).val(arr[i].pickupVenue);
        $(returnedDateInBooking).val(returnedDate);
        $(returnedTimeInBooking).val(arr[i].returnedTime);
        $(returnVenueInBooking).val(arr[i].returnedVenue);
        $(lossDamageWaiverInBooking).val(arr[i].lossDamage);
        $(costInBooking).val(arr[i].cost);
    }
}

function setDisabledRequiredFieldsInBookingInAdmin() {
    disableOrEnablePlaceBookingRequestBtns(cusNicInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(driverNicInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(carTypeInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(lossDamageWaiverInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(lossDamageWaiverSlipInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(costInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(totalCostInBooking, true)
}

$(viewListTableBtn).off('click');
$(viewListTableBtn).click(function () {
    $('#viewAddToListBookingsSectionInAdmin').css('display', 'flex');
    $('#placingBookingInAdminBookingSection').css('display', 'none');
    $('#viewCurrentBookingsSection').css('display', 'none');
})

$(viewListTableBtn).off('dblclick');
$(viewListTableBtn).dblclick(function () {
    $('#viewAddToListBookingsSectionInAdmin').css('display', 'none');
    $('#placingBookingInAdminBookingSection').css('display', 'flex');
    $('#viewCurrentBookingsSection').css('display', 'none');
})

let addToListArrInBooking = undefined;
$(addToListBtnInBooking).off('click');
$(addToListBtnInBooking).click(function () {

    let driverNicNo = undefined;
    if ($(driverNicInBooking).val() == "") {
        driverNicNo = null;
    } else {
        driverNicNo = $(driverNicInBooking).val();
    }

    let addToList = {
        bookingId: bookingIdInBooking.val(),
        carRegNo: carObj.c_RegNo,
        cusNic: cusNicInPlacingBookingRequest.val(),
        driverNic: driverNicNo,
        carType: carTypeInBooking.val(),
        tripInKm: tripInKMInBooking.val(),
        extraKmDriven: extraKmDrivenInBooking.val(),
        rentalType: rentalTypeInBooking,
        dateOfPickup: dateOfPickupInBooking.val(),
        timeOfPickup: timeOfPickupInBooking.val(),
        pickupVenue: pickupVenueInBooking.val(),
        returnDate: returnedDateInBooking.val(),
        returnTime: returnedTimeInBooking.val(),
        returnVenue: returnVenueInBooking.val(),
        damageStatus: damageStatusInBooking.val(),
        lossDamageWaiver: parseFloat(lossDamageWaiverInBooking.val()),
        cost: parseFloat(costInBooking.val())
    }

    if (checkIfAlreadySameCarExistsInBooking(carObj.car_RegNo) == true) {
        for (let i = 0; i < addToListArrInBooking.length; i++) {
            if (addToListArrInBooking[i].carRegNo == addToList.carRegNo) {
                addToListArrInBooking[i] = addToList;
                addDataToCartTableInBooking();
            }
        }
    } else {
        addToListArrInBooking.push(addToList);
        addDataToCartTable();
    }

    let bookingDetailsArr = [];

    for (let i = 0; i < addToListArrInBooking.length; i++) {
        let cost = totalCostPerCar(addToListArrInBooking[i].carRegNo, i);
        let bookingDetails = {
            bookingId: addToListArrInBooking[i].bookingId,
            car_RegNo: addToListArrInBooking[i].carRegNo,
            driverNic: addToListArrInBooking[i].driverNic,
            carType: addToListArrInBooking[i].carType,
            rentalType: addToListArrInBooking[i].rentalType,
            tripInKm: addToListArrInBooking[i].tripInKm,
            extraKmDriven: addToListArrInBooking[i].extraKmDriven,
            dateOfPickup: addToListArrInBooking[i].dateOfPickup,
            timeOfPickup: addToListArrInBooking[i].timeOfPickup,
            pickupVenue: addToListArrInBooking[i].pickupVenue,
            returnedDate: addToListArrInBooking[i].returnDate,
            returnedTime: addToListArrInBooking[i].returnTime,
            returnedVenue: addToListArrInBooking[i].returnVenue,
            damageStatus: addToListArrInBooking[i].damageStatus,
            lossDamage: addToListArrInBooking[i].lossDamageWaiver,
            cost: cost
        }
        bookingDetailsArr.push(bookingDetails);
    }
    let dt = new Date();
    let date = dt.getDate() + "." + (dt.getMonth() + 1) + "." + dt.getFullYear();
    let time = dt.getHours() + "." + dt.getMinutes() + "." + dt.getSeconds();

    let payments = bookingObj.payments;
    let booking = {
        boId: bookingIdInBooking.val(),
        cusNic: cusNicInBooking.val(),
        date: date,
        time: time,
        cost: parseFloat(totalCostInBooking.val()),
        bookingDetails: bookingDetailsArr,
        payments: {
            paymentsId: payments.paymentsId,
            boId: bookingIdInBooking.val(),
            cusNic: cusNicInBooking.val(),
            dateOfPayment: date,
            timeOfPayment: time,
            lossDamageWaiver: payments.lossDamageWaiver,
            lossDamageWaiverPaymentSlip: payments.lossDamageWaiverPaymentSlip,
            cost: parseFloat(totalCostInBooking.val),
        }
    }

    if (confirm("Do You Want To Place This Booking..?") == true) {
        $.ajax({
            url: baseUrl + "bookingCarController",
            method: "POST",
            data: JSON.stringify(booking),
            contentType: "application/json",
            success: function (resp) {
                alert(resp.message);
            },
            error: function (error) {
                alert(error.message);
            }
        })
    } else {
        alert("Placing Booking Is Unsuccessful");
    }
})

function checkIfAlreadySameCarExistsInBooking(carRegNo) {
    for (let i = 0; i < addToListArrInBooking.length; i++) {
        if (addToListArrInBooking[i].carRegNo == carRegNo) {
            return true;
        }
    }
    return false;
}

function addDataToCartTableInBooking() {
    let tbody = $('#addToListBookingsTableContainerTable').children('tbody');
    $(tbody).empty();
    for (let i = 0; i < addToListArrInBooking.length; i++) {
        let row = `<tr>
                    <td>` + (i + 1) + `</td>
                    <td>` + addToListArrInBooking[i].bookingId + `</td>
                    <td>` + addToListArrInBooking[i].carRegNo + `</td>
                    <td>` + addToListArrInBooking[i].driverNic + `</td>
                    <td>` + addToListArrInBooking[i].carType + `</td>
                    <td>` + addToListArrInBooking[i].tripInKm + `</td>
                    <td>` + addToListArrInBooking[i].extraKmDriven + `</td>
                    <td>` + addToListArrInBooking[i].rentalType + `</td>
                    <td>` + addToListArrInBooking[i].dateOfPickup + `</td>
                    <td>` + addToListArrInBooking[i].timeOfPickup + `</td>
                    <td>` + addToListArrInBooking[i].pickupVenue + `</td>
                    <td>` + addToListArrInBooking[i].returnDate + `</td>
                    <td>` + addToListArrInBooking[i].returnTime + `</td>
                    <td>` + addToListArrInBooking[i].returnVenue + `</td>
                    <td>` + addToListArrInBooking[i].damageStatus + `</td>
                    <td>` + addToListArrInBooking[i].lossDamageWaiver + `</td>
                    <td>` + addToListArrInBooking[i].cost + `</td></tr>`
        $(tbody).append(row);
    }

}