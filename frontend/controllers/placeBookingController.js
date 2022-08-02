var placeBookingBtn = $("#placeBookingBtn");

var bookingIdInBooking = $("#bookingIdInBooking");
var searchBookingBtn = $("#searchBookingBtn");

var dropDownMenuForCarRegNoInBookingInAdmin = $("#dropDownMenuForCarRegNoInBookingInAdmin");

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
var lossDamageWaiverInBooking = $("#lossDamageWaiverInBooking");
var lossDamageWaiverSlipInBooking = $("#lossDamageWaiverSlipInBooking");
var costInBooking = $("#costInBooking");

var currentBookingsTableContainer = $("#currentBookingsTableContainer");
var currentBookingsDetailsTableContainer = $("#currentBookingsDetailsTableContainer");
var CurrentBookingsDetailsSearchField = $("#CurrentBookingsDetailsSearchField");
var CurrentBookingsDetailsSearchBtn = $("#CurrentBookingsDetailsSearchBtn");

var addToListBtnInBooking = $("#addToListBtnInBooking");
var clearListBtnInBooking = $("#clearListBtnInBooking");
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
    let details = arr.bookingDetails;
    for (let i = 0; i < details.length; i++) {
        let row = `<tr>
                           <td>` + (i + 1) + `</td>
                           <td>` + details[i].bookingId + `</td>
                           <td>` + details[i].car_RegNo + `</td>
                           <td>` + details[i].driverNic + `</td>
                           <td>` + details[i].carType + `</td>
                           <td>` + details[i].rentalType + `</td>
                           <td>` + details[i].dateOfPickup + `</td>
                           <td>` + details[i].timeOfPickup + `</td>
                           <td>` + details[i].pickupVenue + `</td>
                           <td>` + details[i].returnedDate + `</td>
                           <td>` + details[i].returnedTime + `</td>
                           <td>` + details[i].returnedVenue + `</td>
                           <td>` + details[i].lossDamage + `</td>
                           <td>` + details[i].cost + `</td>
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
    lossDamageWaiverSlipInBooking.val(data.payments.lossDamageWaiverPaymentSlip);
    bookingObj = data;

    $(dropDownMenuForCarRegNoInBookingInAdmin).children('li').click(function () {
        console.log('Hi tere')
        console.log($(this).text())
        $(carTypeInBooking).val(searchCarDetailsInBookingAdmin($(this).text().trim()).type);
        if (carObj != undefined) {
            carObj = undefined;
        }
        carObj = searchCarDetailsInBookingAdmin($(this).text().trim());
        setDataInPendingBookingDetailsToFields(carObj.c_RegNo);
    })
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
    $(dropDownMenuForCarRegNoInBookingInAdmin).empty();
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


function searchCarDetailsInBookingAdmin(regNo) {
    console.log(regNo)
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

function setDataInPendingBookingDetailsToFields(carRegNo) {
    let arr = bookingObj.bookingDetails;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].car_RegNo == carRegNo) {
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
}

function setDisabledRequiredFieldsInBookingInAdmin() {
    disableOrEnablePlaceBookingRequestBtns(cusNicInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(rentalTypeInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(dateOfPickupInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(timeOfPickupInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(pickupVenueInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(returnedDateInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(returnedTimeInBooking, true)
    disableOrEnablePlaceBookingRequestBtns(returnVenueInBooking, true)
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

let addToListArrInBooking = new Array();
let rowNoCartBooking = 1;
$(addToListBtnInBooking).off('click');
$(addToListBtnInBooking).click(function () {
    let driverNicNo = undefined;
    if ($(driverNicInBooking).val() == "") {
        driverNicNo = null;
    } else {
        driverNicNo = $(driverNicInBooking).val();
    }
    console.log("Car Reg No = " + carObj.c_RegNo);
    let addToList = new AddToCartBooking(
        bookingIdInBooking.val(),
        carObj.c_RegNo,
        cusNicInPlacingBookingRequest.val(),
        driverNicNo,
        carTypeInBooking.val(),
        parseFloat(tripInKMInBooking.val()),
        parseFloat(extraKmDrivenInBooking.val()),
        rentalTypeInBooking.val(),
        dateOfPickupInBooking.val(),
        timeOfPickupInBooking.val(),
        pickupVenueInBooking.val(),
        returnedDateInBooking.val(),
        returnedTimeInBooking.val(),
        returnVenueInBooking.val(),
        $("#damageStatusMenuInBooking :selected").text(),
        parseFloat(lossDamageWaiverInBooking.val()),
        parseFloat(costInBooking.val())
    )

    if (checkIfAlreadySameCarExistsInBooking(carObj.car_RegNo) == true) {
        for (let i = 0; i < addToListArrInBooking.length; i++) {
            if (addToListArrInBooking[i].carRegNo == addToList.carRegNo) {
                addToListArrInBooking[i] = addToList;
                addToListArrInBooking[i].setCost(parseFloat(costInBooking.val()));
                addToListArrInBooking[i].setDateOfPickup(dateOfPickupInBooking.val());
                addToListArrInBooking[i].setTimeOfPickup(timeOfPickupInBooking.val());
                addToListArrInBooking[i].setPickupVenue(pickupVenueInBooking.val());
                addToListArrInBooking[i].setReturnDate(returnedDateInBooking.val());
                addToListArrInBooking[i].setReturnTime(returnedTimeInBooking.val());
                addToListArrInBooking[i].setPickupVenue(pickupVenueInBooking.val());
                addToListArrInBooking[i].setReturnVenue(returnVenueInBooking.val());
                addToListArrInBooking[i].setRentalType(rentalTypeInBooking.val());
                addToListArrInBooking[i].setTripInKm(parseFloat(tripInKMInBooking.val()));
                addToListArrInBooking[i].setExtraKmDriven(parseFloat(extraKmDrivenInBooking.val()));
                addToListArrInBooking[i].setDamageStatus($("#damageStatusMenuInBooking :selected").text());
                addToListArrInBooking[i].setLossDamageWaiver(parseFloat(lossDamageWaiverInBooking.val()));

                $("#addToListBookingsTableContainerTable > tbody tr").filter(function () {
                    if ($(this).children("td:nth-child(3)").text() == addToListArrInBooking[i].getCarRegNo()) {
                        $(this).replaceWith(`<tr>
                           <td>` + (rowNoCartBooking) + `</td>
                            <td>` + addToList.getBookingId() + `</td>
                            <td>` + addToList.getCarRegNo() + `</td>
                            <td>` + addToList.getDriverNic() + `</td>
                            <td>` + addToList.getCarType() + `</td>
                            <td>` + addToList.getTripInKm() + `</td>
                            <td>` + addToList.getExtraKmDriven() + `</td>
                            <td>` + addToList.getRentalType() + `</td>
                            <td>` + addToList.getDateOfPickup() + `</td>
                            <td>` + addToList.getTimeOfPickup() + `</td>
                            <td>` + addToList.getPickupVenue() + `</td>
                            <td>` + addToList.getReturnDate() + `</td>
                            <td>` + addToList.getReturnTime() + `</td>
                            <td>` + addToList.getReturnVenue() + `</td>
                            <td>` + addToList.getDamageStatus() + `</td>
                            <td>` + addToList.getLossDamageWaiver() + `</td>
                            <td>` + addToList.getCost() + `</td></tr>`);
                    }
                })
            }
        }
    } else {
        addToListArrInBooking.push(addToList);
        let row = (`<tr>
                            <td>` + (rowNoCartBooking) + `</td>
                            <td>` + addToList.getBookingId() + `</td>
                            <td>` + addToList.getCarRegNo() + `</td>
                            <td>` + addToList.getDriverNic() + `</td>
                            <td>` + addToList.getCarType() + `</td>
                            <td>` + addToList.getTripInKm() + `</td>
                            <td>` + addToList.getExtraKmDriven() + `</td>
                            <td>` + addToList.getRentalType() + `</td>
                            <td>` + addToList.getDateOfPickup() + `</td>
                            <td>` + addToList.getTimeOfPickup() + `</td>
                            <td>` + addToList.getPickupVenue() + `</td>
                            <td>` + addToList.getReturnDate() + `</td>
                            <td>` + addToList.getReturnTime() + `</td>
                            <td>` + addToList.getReturnVenue() + `</td>
                            <td>` + addToList.getDamageStatus() + `</td>
                            <td>` + addToList.getLossDamageWaiver() + `</td>
                            <td>` + addToList.getCost() + `</td></tr>`)
        $("#addToListBookingsTableContainerTable > tbody").append(row);
        rowNoCartBooking++;
    }

    let bookingDetailsArr = [];

    for (let i = 0; i < addToListArrInBooking.length; i++) {
        let bookingDetails = {
            bookingId: addToListArrInBooking[i].getBookingId(),
            car_RegNo: addToListArrInBooking[i].getCarRegNo(),
            driverNic: addToListArrInBooking[i].getDriverNic(),
            carType: addToListArrInBooking[i].getCarType(),
            rentalType: addToListArrInBooking[i].getRentalType(),
            tripInKm: addToListArrInBooking[i].getTripInKm(),
            extraKmDriven: addToListArrInBooking[i].getExtraKmDriven(),
            dateOfPickup: addToListArrInBooking[i].getDateOfPickup(),
            timeOfPickup: addToListArrInBooking[i].getTimeOfPickup(),
            pickupVenue: addToListArrInBooking[i].getPickupVenue(),
            returnedDate: addToListArrInBooking[i].getReturnDate(),
            returnedTime: addToListArrInBooking[i].getReturnTime(),
            returnedVenue: addToListArrInBooking[i].getReturnVenue(),
            damageStatus: addToListArrInBooking[i].getDamageStatus(),
            lossDamage: addToListArrInBooking[i].getLossDamageWaiver(),
            cost: addToListArrInBooking[i].getCost()
        }
        bookingDetailsArr.push(bookingDetails);
    }
    let date = new Date().toISOString().substring(0, 10);
    let time = new Date().toLocaleTimeString();

    let payments = bookingObj.payments;
    let booking = {
        boId: bookingIdInBooking.val(),
        cusNic: cusNicInBooking.val(),
        date: date,
        time: time,
        cost: parseFloat(totalCostInBooking.val()),
        bookingDetails: bookingDetailsArr,
        payments: {
            paymentId: payments.paymentsId,
            cusNic: cusNicInBooking.val(),
            dateOfPayment: date,
            timeOfPayment: time,
            lossDamageWaiver: payments.lossDamageWaiver,
            lossDamageWaiverPaymentSlip: payments.lossDamageWaiverPaymentSlip,
            cost: parseFloat(totalCostInBooking.val()),
        }
    }
    console.log(booking);

    $(placeBookingBtn).off('click');
    $(placeBookingBtn).click(function () {
        if (confirm("Do You Want To Place This Booking..?") == true) {
            $.ajax({
                url: baseUrl + "bookingCarController",
                method: "POST",
                data: JSON.stringify(booking),
                contentType: "application/json",
                success: function (resp) {
                    alert(resp.message);
                    getAllBookings();
                    clearBookingFieldInAdmin();
                },
                error: function (error) {
                    alert(error.message);
                }
            })
        } else {
            alert("Placing Booking Is Unsuccessful");
        }
    })

    $(clearListBtnInBooking).off(click);
    $(clearListBtnInBooking).click(function () {
        $("#addToListBookingsTableContainerTable > tbody").empty();
    })
})

function checkIfAlreadySameCarExistsInBooking(carRegNo) {
    console.log(addToListArrInBooking.length);
    for (let i = 0; i < addToListArrInBooking.length; i++) {
        if (addToListArrInBooking[i].getCarRegNo() == carRegNo) {
            return true;
        }
    }
    return false;
}

function setNotificationsToDisplayOnAdmin() {
    $('#notificationsForAdmin').children('div:nth-child(1)').children('div:nth-child(1)').empty();
    let notificationsArr = getAllNotificationsOfAdmin();
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
        $('#notificationsForAdmin').children('div:nth-child(1)').children('div:nth-child(1)').append(notificationRow);
    }
}


function getAllNotificationsOfAdmin() {
    let data = undefined;
    $.ajax({
        url: baseUrl + "bookingCarController/getAllNotificationOfAdmin",
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

function clearBookingFieldInAdmin() {
    bookingIdInBooking.val("");
    $(bookingIdInBooking).css("border", "1px solid #ced4da");
    cusNicInBooking.val("");
    $(cusNicInBooking).css("border", "1px solid #ced4da");
    driverNicInBooking.val("");
    $(driverNicInBooking).css("border", "1px solid #ced4da");
    carTypeInBooking.val("");
    $(carTypeInBooking).css("border", "1px solid #ced4da");
    rentalTypeInBooking.val("");
    $(rentalTypeInBooking).css("border", "1px solid #ced4da");
    tripInKMInBooking.val("");
    $(tripInKMInBooking).css("border", "1px solid #ced4da");
    extraKmDrivenInBooking.val("");
    $(extraKmDrivenInBooking).css("border", "1px solid #ced4da");
    dateOfPickupInBooking.val("");
    timeOfPickupInBooking.val("");
    pickupVenueInBooking.val("");
    $(pickupVenueInBooking).css("border", "1px solid #ced4da");
    returnedDateInBooking.val("");
    returnedTimeInBooking.val("");
    returnVenueInBooking.val("");
    $(returnVenueInBooking).css("border", "1px solid #ced4da");
    $("#damageStatusMenuInBooking option:selected").prop("selected", false)
    lossDamageWaiverInBooking.val("");
    $(lossDamageWaiverInBooking).css("border", "1px solid #ced4da");
    lossDamageWaiverSlipInBooking.val("");
    $(lossDamageWaiverSlipInBooking).css("border", "1px solid #ced4da");
    costInBooking.val("");
    $(costInBooking).css("border", "1px solid #ced4da");
    totalCostInBooking.val("");
    $(totalCostInBooking).css("border", "1px solid #ced4da");
    $(dropDownMenuForCarRegNoInBookingInAdmin).empty();
}
