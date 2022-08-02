var bookingReqIdInPlacingBookingRequest = $("#bookingReqIdInPlacingBookingRequest");
var bookingReqIdInPlacingBookingRequestPattern = /^(BO-)[0-9]{3}$/

var carRegNoInPlacingBookingRequestPattern = /^[A-Z]{2,3}[-][0-9]{3}$/
var cusNicInPlacingBookingRequest = $("#cusNicInPlacingBookingRequest");
var cusNicInPlacingBookingRequestPattern = /^(([0-9]{9}[Vv]{1})||([0-9]{12}))$/
var ifDriverNeedsForBookingRequestCheckBox = $("#ifDriverNeedsForBookingRequestCheckBox");

var dateOfPickupInPlacingBookingRequest = $("#dateOfPickupInPlacingBookingRequest");
var timeOfPickupInPlacingBookingRequest = $("#timeOfPickupInPlacingBookingRequest");
var pickupVenueInPlacingBookingRequest = $("#pickupVenueInPlacingBookingRequest");
var pickupVenueInPlacingBookingRequestPattern = /^[A-z0-9,.  ]*[/]?[0-9]*[ ]?[A-z,. ]*$/
var returnedDateInPlacingBookingRequest = $("#returnedDateInPlacingBookingRequest");
var returnedTimeInPlacingBookingRequest = $("#returnedTimeInPlacingBookingRequest");
var returnVenueInPlacingBookingRequest = $("#returnVenueInPlacingBookingRequest");
var returnVenueInPlacingBookingRequestPattern = /^[A-z0-9,.  ]*[/]?[0-9]*[ ]?[A-z,. ]*$/
var lossDamageWaiverInPlacingBookingRequest = $("#lossDamageWaiverInPlacingBookingRequest");
var lossDamageWaiverInPlacingBookingRequestPattern = /^[0-9]{1,}$/
var lossDamageWaiverSlipInPlacingBookingRequest = $("#lossDamageWaiverSlipInPlacingBookingRequest");
var costInPlacingBookingRequest = $("#costInPlacingBookingRequest");
var costInPlacingBookingRequestPattern = /^[0-9]{1,}$/
var totalCostInPlacingBookingRequest = $("#totalCostInPlacingBookingRequest");
var totalCostInPlacingBookingRequestPattern = /^[0-9]{1,}$/

var placeBookingRequestBtn = $("#placeBookingRequestBtn");
var updateBookingRequestBtn = $("#updateBookingRequestBtn");
var deleteBookingRequestBtn = $("#deleteBookingRequestBtn");
var addToCartInBookingRequestBtn = $("#addToCartInBookingRequestBtn");
var clearCartBtnInBookingRequest = $("#clearCartBtnInBookingRequest");

var bookingReqFieldArr = [bookingReqIdInPlacingBookingRequest, $('#carRegNoInPlacingBookingRequest'),
    cusNicInPlacingBookingRequest,
    pickupVenueInPlacingBookingRequest, returnVenueInPlacingBookingRequest,
    lossDamageWaiverInPlacingBookingRequest, costInPlacingBookingRequest,
    totalCostInPlacingBookingRequest
]

var driverNicForUpdatingDriver = undefined;
var boolForSearchOrNormal = false;


bookingReqIdInPlacingBookingRequest.off('keyup');
bookingReqIdInPlacingBookingRequest.keyup(function (e) {
    if (e.key == 'Enter') {
        disableOrEnablePlaceBookingRequestBtns(placeBookingRequestBtn, false);
        disableOrEnablePlaceBookingRequestBtns(updateBookingRequestBtn, false);
        disableOrEnablePlaceBookingRequestBtns(deleteBookingRequestBtn, false);
    }
    let index = 0;
    validate(bookingReqIdInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)

    if (bookingReqIdInPlacingBookingRequest.val().length == 6) {
        if (e.key == 'shift' || e.keyCode == 16) {
            try {
                if (confirm("Do You Want To Search This Request..?") == true) {
                    boolForSearchOrNormal = true;
                    let booking = searchBookingRequest();
                    setComboBoxToCarRegNoField(booking.bookingDetails);
                    for (let i = 0; i < booking.bookingDetails.length; i++) {
                        if (booking.bookingDetails[i].car_RegNo == $("#carRegNoMenuInPlacingBookingRequest :selected").text()) {
                            if (booking.bookingDetails[i].carType == 'Luxury') {
                                $("#carTypeInPlacingBookingRequestMenu option[value='1']").prop('selected', true);
                            } else {
                                $("#carTypeInPlacingBookingRequestMenu option[value='2']").prop('selected', true);
                            }

                            if (booking.bookingDetails[i].rentalType == 'Daily') {
                                $("#rentalTypeInPlacingBookingRequestDropdownMenu option[value='1']").prop('selected', true);
                            } else {
                                $("#rentalTypeInPlacingBookingRequestDropdownMenu option[value='2']").prop('selected', true);
                            }

                            if (booking.bookingDetails[i].driverNic != null) {
                                ifDriverNeedsForBookingRequestCheckBox.checked = true;
                                driverNicForUpdatingDriver = booking.bookingDetails[i].driverNic;
                            } else {
                                ifDriverNeedsForBookingRequestCheckBox.checked = false;
                            }

                            let dt1 = booking.bookingDetails[i].dateOfPickup;
                            let dateOfPickup = undefined;
                            if (((dt1[2] > -1) && (dt1[2] < 10)) && ((dt1[1] > -1) && (dt1[1] < 10))) {
                                dateOfPickup = dt1[0] + "-" + 0 + dt1[1] + "-" + 0 + dt1[2];
                            } else if ((dt1[2] > -1) && (dt1[2] < 10)) {
                                dateOfPickup = dt1[0] + "-" + dt1[1] + "-" + 0 + dt1[2];
                            } else if ((dt1[1] > -1) && (dt1[1] < 10)) {
                                dateOfPickup = dt1[0] + "-" + 0 + dt1[1] + "-" + dt1[2];
                            }
                            let dt2 = booking.bookingDetails[i].returnedDate;
                            let returnedDate = undefined;
                            if (((dt2[2] > -1) && (dt2[2] < 10)) && ((dt2[1] > -1) && (dt2[1] < 10))) {
                                returnedDate = dt2[0] + "-" + 0 + dt2[1] + "-" + 0 + dt2[2];
                            } else if ((dt2[2] > -1) && (dt2[2] < 10)) {
                                returnedDate = dt2[0] + "-" + dt2[1] + "-" + 0 + dt2[2];
                            } else if ((dt2[1] > -1) && (dt2[1] < 10)) {
                                returnedDate = dt2[0] + "-" + 0 + dt2[1] + "-" + dt2[2];
                            }

                            $(dateOfPickupInPlacingBookingRequest).val(dateOfPickup);
                            $(timeOfPickupInPlacingBookingRequest).val(booking.bookingDetails[i].timeOfPickup);
                            $(pickupVenueInPlacingBookingRequest).val(booking.bookingDetails[i].pickupVenue);
                            $(returnedDateInPlacingBookingRequest).val(returnedDate);
                            $(returnedTimeInPlacingBookingRequest).val(booking.bookingDetails[i].returnedTime);
                            $(returnVenueInPlacingBookingRequest).val(booking.bookingDetails[i].returnedVenue);
                            $(lossDamageWaiverInPlacingBookingRequest).val(booking.bookingDetails[i].lossDamage);
                            console.log(booking.bookingDetails[i].cost);
                            $(costInPlacingBookingRequest).val(booking.bookingDetails[i].cost);
                            $(totalCostInPlacingBookingRequest).val(booking.cost);
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
})
$('#carRegNoInPlacingBookingRequest').off('keyup');
$('#carRegNoInPlacingBookingRequest').keyup(function (e) {
    let index = 1;
    validate(carRegNoInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
cusNicInPlacingBookingRequest.off('keyup');
cusNicInPlacingBookingRequest.keyup(function (e) {
    let index = 2;
    validate(cusNicInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})

pickupVenueInPlacingBookingRequest.off('keyup');
pickupVenueInPlacingBookingRequest.keyup(function (e) {
    let index = 3;
    validate(pickupVenueInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
returnVenueInPlacingBookingRequest.off('keyup');
returnVenueInPlacingBookingRequest.keyup(function (e) {
    let index = 4;
    validate(returnVenueInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
lossDamageWaiverInPlacingBookingRequest.off('keyup');
lossDamageWaiverInPlacingBookingRequest.keyup(function (e) {
    let index = 5;
    validate(lossDamageWaiverInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
costInPlacingBookingRequest.off('keyup');
costInPlacingBookingRequest.keyup(function (e) {
    let index = 6;
    validate(costInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
totalCostInPlacingBookingRequest.off('keyup');
totalCostInPlacingBookingRequest.keyup(function (e) {
    let index = 7;
    validate(totalCostInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})

$(document).ready(function () {
    disableOrEnablePlaceBookingRequestBtns(totalCostInPlacingBookingRequest, true);
    disableOrEnablePlaceBookingRequestBtns($("#carTypeInPlacingBookingRequestMenu"), true);
    disableOrEnablePlaceBookingRequestBtns(costInPlacingBookingRequest, true);
    disableOrEnablePlaceBookingRequestBtns(lossDamageWaiverInPlacingBookingRequest, true);
    disableOrEnablePlaceBookingRequestBtns($('#carRegNoInPlacingBookingRequest'), true);
    disableOrEnablePlaceBookingRequestBtns(cusNicInPlacingBookingRequest, true);
    disableOrEnablePlaceBookingRequestBtns(bookingReqIdInPlacingBookingRequest, false);
    disableOrEnablePlaceBookingRequestBtns(placeBookingRequestBtn, false);
    disableOrEnablePlaceBookingRequestBtns(updateBookingRequestBtn, false);
    disableOrEnablePlaceBookingRequestBtns(deleteBookingRequestBtn, false);
    disableOrEnablePlaceBookingRequestBtns(addToCartInBookingRequestBtn, false);
    disableOrEnablePlaceBookingRequestBtns(clearCartBtnInBookingRequest, false);

})


var paymentsId = undefined;

if ($(lossDamageWaiverSlipInPlacingBookingRequest)[0].files.length != 0) {
    disableOrEnablePlaceBookingRequestBtns(placeBookingRequestBtn, false);
}

function disableOrEnablePlaceBookingRequestBtns(btn, check) {
    btn.prop('disabled', check);
}

function assignDriverToField() {
    let driver = undefined;
    console.log("assignDriverToField");
    if ($(ifDriverNeedsForBookingRequestCheckBox).is(":checked")) {
        $.ajax({
            url: baseUrl + "bookingCarRequestController/checkAvailableDriver",
            method: "GET",
            async: false,
            success: function (resp) {
                let data = resp.data;
                if (resp.status == 200) {
                    driver = data.nic;
                    console.log(data.nic);
                }
            },
            error: function (error) {
                alert(error.message);
            }
        })
        return driver;
    }
}


var addToListArr = new Array();
var totalCostInBookingRequest = 0;
let rowNoCart = 1;
$(addToCartInBookingRequestBtn).off('click');
$(addToCartInBookingRequestBtn).click(function () {
    let lossDamageFile = {
        file: $(lossDamageWaiverSlipInPlacingBookingRequest)[0].files[0],
        fileName: $(lossDamageWaiverSlipInPlacingBookingRequest)[0].files[0].name
    }

    let driverNic = undefined;
    if (driverNicForUpdatingDriver == undefined) {
        let driver = assignDriverToField();
        if (driver != undefined) {
            driverNic = driver;
        } else {
            driverNic = null;
        }
    } else {
        driverNic = driverNicForUpdatingDriver;
    }

    let carRegNo = undefined;

    if (boolForSearchOrNormal == false) {
        carRegNo = $('#carRegNoInPlacingBookingRequest').val();
    } else {
        carRegNo = $('#carRegNoMenuInPlacingBookingRequest :selected').text();
    }

    let addToCartList = new AddToCart(
        bookingReqIdInPlacingBookingRequest.val(),
        carRegNo,
        cusNicInPlacingBookingRequest.val(),
        driverNic,
        $('#carTypeInPlacingBookingRequestMenu :selected').text(),
        $('#rentalTypeInPlacingBookingRequestDropdownMenu :selected').text(),
        dateOfPickupInPlacingBookingRequest.val(),
        timeOfPickupInPlacingBookingRequest.val(),
        pickupVenueInPlacingBookingRequest.val(),
        returnedDateInPlacingBookingRequest.val(),
        returnedTimeInPlacingBookingRequest.val(),
        returnVenueInPlacingBookingRequest.val(),
        parseFloat(lossDamageWaiverInPlacingBookingRequest.val()),
        parseFloat(lossDamageWaiverInPlacingBookingRequest.val())
    )


    if (checkIfAlreadySameCarExists($('#carRegNoInPlacingBookingRequest').val()) == true) {
        for (let i = 0; i < addToListArr.length; i++) {
            if (addToListArr[i].getCarRegNo() == addToCartList.getCarRegNo()) {
                console.log("exists");
                addToListArr[i].setDateOfPickup(dateOfPickupInPlacingBookingRequest.val());
                addToListArr[i].setTimeOfPickup(timeOfPickupInPlacingBookingRequest.val());
                addToListArr[i].setReturnDate(returnedDateInPlacingBookingRequest.val());
                addToListArr[i].setReturnTime(returnedTimeInPlacingBookingRequest.val());

                let costPerCar = totalCostPerCarInRequest(addToCartList.getCarRegNo());
                console.log(costPerCar);
                addToListArr[i].setCost(costPerCar);
                addToListArr[i].setPickupVenue(pickupVenueInPlacingBookingRequest.val());
                addToListArr[i].setReturnVenue(returnVenueInPlacingBookingRequest.val());
                addToListArr[i].setCarType($('#carTypeInPlacingBookingRequestMenu :selected').text());
                addToListArr[i].setRentalType($('#rentalTypeInPlacingBookingRequestDropdownMenu :selected').text());
                console.log(addToListArr[i].getCost())
                $("#addToCartTableInBookingRequest > tbody tr").filter(function () {
                    if ($(this).children("td:nth-child(3)").text() == addToListArr[i].getCarRegNo()) {
                        $(this).replaceWith(`<tr>
                            <td>` + (i + 1) + `</td>
                            <td>` + addToListArr[i].getBookingId() + `</td>
                            <td>` + addToListArr[i].getCarRegNo() + `</td>
                            <td>` + addToListArr[i].getDriverNic() + `</td>
                            <td>` + addToListArr[i].getCarType() + `</td>
                            <td>` + addToListArr[i].getRentalType() + `</td>
                            <td>` + addToListArr[i].getDateOfPickup() + `</td>
                            <td>` + addToListArr[i].getTimeOfPickup() + `</td>
                            <td>` + addToListArr[i].getPickupVenue() + `</td>
                            <td>` + addToListArr[i].getReturnDate() + `</td>
                            <td>` + addToListArr[i].getReturnTime() + `</td>
                            <td>` + addToListArr[i].getReturnVenue() + `</td>
                            <td>` + addToListArr[i].getLossDamageWaiver() + `</td>
                            <td>` + addToListArr[i].getCost() + `</td></tr>`);
                    }
                })
            }
        }
    } else {
        addToListArr.push(addToCartList);
        for (let i = 0; i < addToListArr.length; i++) {
            if (addToListArr[i].getCarRegNo() == addToCartList.getCarRegNo()) {
                console.log(totalCostPerCarInRequest(addToListArr[i].getCarRegNo()))
                addToListArr[i].setCost(totalCostPerCarInRequest(addToListArr[i].getCarRegNo()));
            }
        }

        let row = (`<tr>
                            <td>` + (rowNoCart) + `</td>
                            <td>` + addToCartList.getBookingId() + `</td>
                            <td>` + addToCartList.getCarRegNo() + `</td>
                            <td>` + addToCartList.getDriverNic() + `</td>
                            <td>` + addToCartList.getCarType() + `</td>
                            <td>` + addToCartList.getRentalType() + `</td>
                            <td>` + addToCartList.getDateOfPickup() + `</td>
                            <td>` + addToCartList.getTimeOfPickup() + `</td>
                            <td>` + addToCartList.getPickupVenue() + `</td>
                            <td>` + addToCartList.getReturnDate() + `</td>
                            <td>` + addToCartList.getReturnTime() + `</td>
                            <td>` + addToCartList.getReturnVenue() + `</td>
                            <td>` + addToCartList.getLossDamageWaiver() + `</td>
                            <td>` + addToCartList.getCost() + `</td></tr>`)
        $("#addToCartTableInBookingRequest > tbody").append(row);
        rowNoCart++;
    }
    calculateTotalCost();
    totalCostInPlacingBookingRequest.val(totalCostInBookingRequest);
    let bookingDetailsArr = [];

    for (let i = 0; i < addToListArr.length; i++) {
        let cost = totalCostPerCarInRequest(addToListArr[i].getCarRegNo());
        let bookingDetails = {
            bookingId: addToListArr[i].getBookingId(),
            car_RegNo: addToListArr[i].getCarRegNo(),
            driverNic: addToListArr[i].getDriverNic(),
            carType: addToListArr[i].getCarType(),
            rentalType: addToListArr[i].getRentalType(),
            dateOfPickup: addToListArr[i].getDateOfPickup(),
            timeOfPickup: addToListArr[i].getTimeOfPickup(),
            pickupVenue: addToListArr[i].getPickupVenue(),
            returnedDate: addToListArr[i].getReturnDate(),
            returnedTime: addToListArr[i].getReturnTime(),
            returnedVenue: addToListArr[i].getReturnVenue(),
            lossDamage: addToListArr[i].getLossDamageWaiver(),
            cost: cost
        }
        bookingDetailsArr.push(bookingDetails);
    }

    if (boolForSearchOrNormal == false) {
        getPaymentsId();
    } else {
        paymentsId = searchBookingRequest().payments.paymentsId;
    }
    let date = new Date().toISOString().substring(0, 10);
    let time = new Date().toLocaleTimeString();
    let booking = {
        boId: bookingReqIdInPlacingBookingRequest.val(),
        cusNic: cusNicInPlacingBookingRequest.val(),
        date: date,
        time: time,
        cost: totalCostInBookingRequest,
        bookingDetails: bookingDetailsArr,
        payments: {
            paymentsId: paymentsId,
            boId: bookingReqIdInPlacingBookingRequest.val(),
            cusNic: cusNicInPlacingBookingRequest.val(),
            dateOfPayment: date,
            timeOfPayment: time,
            lossDamageWaiver: totalCostOfLossDamageWaiver(),
            lossDamageWaiverPaymentSlip: "",
            cost: totalCostInBookingRequest,
        }
    }
    console.log(booking)

    let formData = new FormData();
    formData.append("dto", new Blob([JSON.stringify(booking)], {type: "application/json"}));
    formData.append("lossDamageWaiverSlip", lossDamageFile.file, lossDamageFile.fileName);

    disableOrEnablePlaceBookingRequestBtns(placeBookingRequestBtn, false);
    disableOrEnablePlaceBookingRequestBtns(updateBookingRequestBtn, false);
    disableOrEnablePlaceBookingRequestBtns(deleteBookingRequestBtn, false);
    disableOrEnablePlaceBookingRequestBtns(clearCartBtnInBookingRequest, false);


    $(placeBookingRequestBtn).off('click');
    $(placeBookingRequestBtn).click(function () {
        if (confirm("Do you want to place this booking..?") == true) {
            placeBookingRequest(formData);
        }
    })

    $(updateBookingRequestBtn).off('click');
    $(updateBookingRequestBtn).click(function () {
        if (confirm("Do you want to update this booking..?") == true) {
            updateBookingRequest(formData);
        }
    })

    $(clearCartBtnInBookingRequest).off('click');
    $(clearCartBtnInBookingRequest).click(function () {
        $("#addToCartTableInBookingRequest > tbody").empty();
    })
})

$(deleteBookingRequestBtn).off('click');
$(deleteBookingRequestBtn).click(function () {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/deleteBookingRequest",
        method: "DELETE",
        success: function (resp) {
            if (resp.status == 200) {
                alert(resp.message);
                totalCostInBookingRequest = 0;
                clearBookingRequestFields();
                setBookingIdToField();
            }
        }
    })
})


function checkIfAlreadySameCarExists(carRegNo) {
    for (let i = 0; i < addToListArr.length; i++) {
        if (addToListArr[i].getCarRegNo() == carRegNo) {
            return true;
        }
    }
    return false;
}

function calculateTotalCost() {
    totalCostInBookingRequest = 0;
    totalCostInPlacingBookingRequest.val("");
    for (let i = 0; i < addToListArr.length; i++) {
        let car = searchCarDetailsInBookingAdmin(addToListArr[i].getCarRegNo());
        let calculatedCostOfRentingDates = undefined;
        var pickupDate = addToListArr[i].getDateOfPickup().split("-");
        console.log(pickupDate)
        var day1 = pickupDate[2];
        var month1 = pickupDate[1];

        var returnDate = addToListArr[i].getReturnDate().split("-");
        var day2 = returnDate[2];
        var month2 = returnDate[1];
        if (addToListArr[i].getRentalType() == 'Monthly') {
            let rate = car.monthlyRate;
            let months = getTotalMonthsRentingTheCar(month1, month2);
            calculatedCostOfRentingDates = rate * months;

        } else if (addToListArr[i].getRentalType() == 'Daily') {
            let rate = car.dailyRate;
            let days = getTotalDaysRentingTheCar(day1, day2);
            console.log(days)
            calculatedCostOfRentingDates = rate * days;
            console.log(calculatedCostOfRentingDates)
        }
        let total = parseFloat(addToListArr[i].getLossDamageWaiver()) + calculatedCostOfRentingDates;
        totalCostInBookingRequest += total;
    }
    console.log(totalCostInBookingRequest)
    totalCostInPlacingBookingRequest.val(totalCostInBookingRequest);
}

function getTotalDaysRentingTheCar(dateOfPickup, returnDate) {
    console.log(dateOfPickup + ' = ' + returnDate);
    let count = dateOfPickup;
    let count2 = 0
    while (count < returnDate) {
        count++;
        count2++;
        console.log(count);
    }
    console.log(count2)
    return count2;
}

function getTotalMonthsRentingTheCar(dateOfPickup, returnDate) {
    let count = dateOfPickup;
    let count2 = 0
    while (count < returnDate) {
        count++;
        count2++;
        console.log(count);
    }
    console.log(count2)
    return count2;
    ;
}

function totalCostOfLossDamageWaiver() {
    let total = 0;
    for (let i = 0; i < addToListArr.length; i++) {
        total += addToListArr[i].getLossDamageWaiver();
    }
    return total;
}

function totalCostPerCarInRequest(regNo) {
    let totalCost = 0;
    for (let i = 0; i < addToListArr.length; i++) {
        if (addToListArr[i].getCarRegNo() == regNo) {
            let car = searchCarDetailsInBookingAdmin(regNo);
            let calculatedCostOfRentingDates = undefined;
            console.log(addToListArr[i].getCarRegNo());
            var pickupDate = addToListArr[i].getDateOfPickup().split("-");
            var day1 = pickupDate[2];
            var month1 = pickupDate[1];

            var returnDate = addToListArr[i].getReturnDate().split("-");
            var day2 = returnDate[2];
            var month2 = returnDate[1];
            if (addToListArr[i].getRentalType() == 'Monthly') {
                let rate = car.monthlyRate;
                console.log(rate);
                let months = getTotalMonthsRentingTheCar(month1, month2);
                calculatedCostOfRentingDates = rate * months;

            } else if (addToListArr[i].getRentalType() == 'Daily') {
                let rate = car.dailyRate;
                console.log(rate);
                console.log(addToListArr[i].getDateOfPickup())
                let days = getTotalDaysRentingTheCar(day1, day2);
                console.log(days);
                calculatedCostOfRentingDates = rate * days;
            }
            let total = parseFloat(addToListArr[i].getLossDamageWaiver()) + calculatedCostOfRentingDates;
            totalCost += total;
        }
    }
    costInPlacingBookingRequest.val(totalCost);
    console.log(totalCost)
    return totalCost;
}

function setBookingIdToField() {
    let boIdInBooking = undefined;
    let boIdInBookingRequest = undefined;
    let boIdInPendingBooking = undefined;

    $.ajax({
        url: baseUrl + "bookingCarController/generateBookingId",
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                boIdInBooking = resp.data;
                console.log(resp.data);
                console.log("Bo Id In Booking  = " + boIdInBooking)
            }
        },
        error: function (error) {
            alert(error.message);
        }
    })

    try {
        $.ajax({
            url: baseUrl + "bookingCarRequestController/search?boId=" + boIdInBooking,
            method: "GET",
            async: false,
            success: function (resp) {
                if (resp.status == 200) {
                    boIdInBookingRequest = resp.data.boId;
                }
            }
        })

        $.ajax({
            url: baseUrl + "bookingCarRequestController/searchPendingBooking?boId=" + boIdInBooking,
            method: "GET",
            async: false,
            success: function (resp) {
                if (resp.status == 200) {
                    boIdInPendingBooking = resp.data.boId;
                }
            }
        })
    } catch (e) {
        console.log(boIdInBooking + " Is Not Consists In Any Of The Booking Request Or Pending Booking Databases");
    } finally {
        console.log(boIdInBookingRequest)
        console.log(boIdInPendingBooking)
        if ((boIdInPendingBooking || boIdInBookingRequest) == boIdInBooking) {
            let boId = undefined;
            let id = parseInt(boIdInBooking.split("-")[1]);
            id = id + 1;
            if (id < 10) {
                boId = "BO-00" + id;
            } else if (id < 100) {
                boId = "BO-0" + id;
            } else {
                boId = "BO-" + id;
            }

            bookingReqIdInPlacingBookingRequest.val(boId);
        } else {
            bookingReqIdInPlacingBookingRequest.val(boIdInBooking);
        }
    }
}

function placeBookingRequest(formData) {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/placeBookingRequest",
        method: "POST",
        async: true,
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            if (resp.status == 200) {
                alert(resp.message);
                totalCostInBookingRequest = 0;
                clearBookingRequestFields();
                setBookingIdToField();
            }
        },
        error: function (error) {
            console.log("Error : " + error);
            alert(error.message);
        }
    })
}

function updateBookingRequest(formData) {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/updateBookingRequest",
        method: 'PUT',
        async: true,
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            if (resp.status == 200) {
                alert(resp.message);
                totalCostInBookingRequest = 0;
                clearBookingRequestFields();
                setBookingIdToField();
                boolForSearchOrNormal = false;
            }
        },
        error: function (error) {
            alert(error.message);
        }
    })
}

function getPaymentsId() {
    let paymentIdInBooking = undefined;
    let paymentIdInPendingBooking = undefined;
    let paymentIdInBookingRequest = undefined;

    $.ajax({
        url: baseUrl + "bookingCarController/generatePaymentsId",
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                paymentIdInBooking = resp.data;
            }
        }
    })
    try {
        $.ajax({
            url: baseUrl + "bookingCarRequestController/search?boId=" + bookingReqIdInPlacingBookingRequest.val(),
            method: "GET",
            async: false,
            success: function (resp) {
                if (resp.status == 200) {
                    paymentIdInBookingRequest = resp.data.boId.payments.paymentsId;
                }
            }
        })

        $.ajax({
            url: baseUrl + "bookingCarRequestController/searchPendingBooking?boId=" + bookingReqIdInPlacingBookingRequest.val(),
            method: "GET",
            async: false,
            success: function (resp) {
                if (resp.status == 200) {
                    paymentIdInPendingBooking = resp.data.boId.payments.paymentsId;
                }
            }
        })
    } catch (e) {
        console.log(paymentIdInBooking + " Is Not Consists In Any Of The Booking Request Or Pending Booking Databases");
    } finally {
        if ((paymentIdInPendingBooking || paymentIdInBookingRequest) == paymentIdInBooking) {
            let paymentId = undefined;
            let id = parseInt(paymentIdInBooking.split("-")[1]);
            id = id + 1;
            if (id < 10) {
                paymentId = "POR-00" + id;
            } else if (id < 100) {
                paymentId = "POR-0" + id;
            } else {
                paymentId = "POR-" + id;
            }

            paymentsId = paymentId;
        } else {
            paymentsId = paymentIdInBooking;
        }
    }
}

function searchCarDetails(regNo) {
    $.ajax({
        url: baseUrl + "car/search?regNo=" + regNo,
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                console.log("Car Type Searched = " + data.type)
                if (data.type == 'Luxury') {
                    $("#carTypeInPlacingBookingRequestMenu option[value='1']").prop('selected', true);
                } else {
                    $("#carTypeInPlacingBookingRequestMenu option[value='2']").prop('selected', true);
                }

                lossDamageWaiverInPlacingBookingRequest.val(data.lossDamageWaiver)
                costInPlacingBookingRequest.val(data.lossDamageWaiver);
            }
        },
        error: function (error) {
            alert(error.message);
        }
    })
}

function clearBookingRequestFields() {
    bookingReqIdInPlacingBookingRequest.val("");
    $(bookingReqIdInPlacingBookingRequest).css("border", "1px solid #ced4da");
    cusNicInPlacingBookingRequest.val("");
    $(cusNicInPlacingBookingRequest).css("border", "1px solid #ced4da");
    $("#carRegNoInPlacingBookingRequest option:selected").prop("selected", false)
    $("#rentalTypeInPlacingBookingRequestDropdownMenu option:selected").prop("selected", false)
    ifDriverNeedsForBookingRequestCheckBox.checked = false;
    dateOfPickupInPlacingBookingRequest.val("");
    timeOfPickupInPlacingBookingRequest.val("");
    pickupVenueInPlacingBookingRequest.val("");
    $(pickupVenueInPlacingBookingRequest).css("border", "1px solid #ced4da");
    returnedDateInPlacingBookingRequest.val("");
    returnedTimeInPlacingBookingRequest.val("");
    returnVenueInPlacingBookingRequest.val("");
    $(returnVenueInPlacingBookingRequest).css("border", "1px solid #ced4da");
    lossDamageWaiverInPlacingBookingRequest.val("");
    $(lossDamageWaiverInPlacingBookingRequest).css("border", "1px solid #ced4da");
    costInPlacingBookingRequest.val("");
    $(costInPlacingBookingRequest).css("border", "1px solid #ced4da");
    totalCostInPlacingBookingRequest.val("");
    $(totalCostInPlacingBookingRequest).css("border", "1px solid #ced4da");
    lossDamageWaiverSlipInPlacingBookingRequest.val("");
    $(lossDamageWaiverSlipInPlacingBookingRequest).css("border", "1px solid #ced4da");
    $('#addToCartTableInBookingRequest > tbody').empty();
}

function searchBookingRequest() {
    let booking = undefined;
    $.ajax({
        url: baseUrl + "bookingCarRequestController/search?boId=" + bookingReqIdInPlacingBookingRequest.val(),
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                booking = resp.data;
                console.log(booking);
            }
        },
        error: function (error) {
            alert("Cant Search Because Given Booking Id Doesnt Exists In Our Database");
        }
    })
    return booking;
}

function setComboBoxToCarRegNoField(bookingDetails) {
    let appendCarSelectionOrInputContainerId = $("#appendCarSelectionOrInputContainerId");
    $(appendCarSelectionOrInputContainerId).empty();
    let label = document.createElement("label");
    label.className = 'form-label';
    label.htmlFor = 'carRegNoMenuInPlacingBookingRequest'
    label.innerHTML = 'Car Reg No';

    let select = document.createElement('select');
    select.className = 'form-select d-flex align-items-center justify-content-center';
    select.style.width = '100%';
    select.style.height = '150%';
    select.id = 'carRegNoMenuInPlacingBookingRequest';
    for (let i = 0; i < bookingDetails.length; i++) {
        let option = document.createElement('option');
        option.value = i + 1;
        option.innerHTML = bookingDetails[i].car_RegNo;
        $(select).append(option);
    }
    $(appendCarSelectionOrInputContainerId).append(label);
    $(appendCarSelectionOrInputContainerId).append(select);
}