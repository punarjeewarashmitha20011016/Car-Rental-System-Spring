var bookingReqIdInPlacingBookingRequest = $("#bookingReqIdInPlacingBookingRequest");
var bookingReqIdInPlacingBookingRequestPattern = /^(BO-)[0-9]{3}$/
var carRegNoInPlacingBookingRequest = $("#carRegNoInPlacingBookingRequest");
var carRegNoInPlacingBookingRequestPattern = /^[A-Z]{2,3}[-][0-9]{3}$/
var cusNicInPlacingBookingRequest = $("#cusNicInPlacingBookingRequest");
var cusNicInPlacingBookingRequestPattern = /^(([0-9]{9}[Vv]{1})||([0-9]{12}))$/
var ifDriverNeedsForBookingRequestCheckBox = $("#ifDriverNeedsForBookingRequestCheckBox");

var carTypeInPlacingBookingRequestDropdownBtn = $("#carTypeInPlacingBookingRequestDropdownBtn");
var carTypeInPlacingBookingRequestMenu = $("#carTypeInPlacingBookingRequestMenu");
var rentalTypeInPlacingBookingRequestDropdownBtn = $("#rentalTypeInPlacingBookingRequestDropdownBtn");
var rentalTypeInPlacingBookingRequestDropdownMenu = $("#rentalTypeInPlacingBookingRequestDropdownMenu");

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

var addToCartTableInBookingRequest = $("#addToCartTableInBookingRequest");

var bookingReqFieldArr = [bookingReqIdInPlacingBookingRequest, carRegNoInPlacingBookingRequest,
    cusNicInPlacingBookingRequest,
    pickupVenueInPlacingBookingRequest, returnVenueInPlacingBookingRequest,
    lossDamageWaiverInPlacingBookingRequest, costInPlacingBookingRequest,
    totalCostInPlacingBookingRequest
]
bookingReqIdInPlacingBookingRequest.off('keyup');
bookingReqIdInPlacingBookingRequest.keyup(function (e) {
    if (e.key == 'Enter') {
        disableOrEnablePlaceBookingRequestBtns(placeBookingRequestBtn, false);
        disableOrEnablePlaceBookingRequestBtns(updateBookingRequestBtn, false);
        disableOrEnablePlaceBookingRequestBtns(deleteBookingRequestBtn, false);
    }
    let index = 0;
    validate(bookingReqIdInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
carRegNoInPlacingBookingRequest.off('keyup');
carRegNoInPlacingBookingRequest.keyup(function (e) {
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
    setBookingIdToField();
    totalCostInPlacingBookingRequest.prop('disabled', true);
    costInPlacingBookingRequest.prop('disabled', true);
    lossDamageWaiverInPlacingBookingRequest.prop('disabled', true);
    carRegNoInPlacingBookingRequest.prop('disabled', true);
    cusNicInPlacingBookingRequest.prop('disabled', true);
    bookingReqIdInPlacingBookingRequest.prop('disabled', true);
    placeBookingRequestBtn.prop('disabled', true);
    updateBookingRequestBtn.prop('disabled', true);
    deleteBookingRequestBtn.prop('disabled', true);
    addToCartInBookingRequestBtn.prop('disabled', true);
    clearCartBtnInBookingRequest.prop('disabled', true);
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
    let driver = assignDriverToField();
    let driverNic = undefined;
    if (driver != undefined) {
        driverNic = driver;
    } else {
        driverNic = null;
    }

    let addToCartList = new AddToCart(
        bookingReqIdInPlacingBookingRequest.val(),
        carRegNoInPlacingBookingRequest.val(),
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


    if (checkIfAlreadySameCarExists(carRegNoInPlacingBookingRequest.val()) == true) {
        for (let i = 0; i < addToListArr.length; i++) {
            if (addToListArr[i].getCarRegNo() == addToCartList.getCarRegNo()) {
                let costPerCar = (addToListArr[i].getCost() - addToListArr[i].getLossDamageWaiver()) + totalCostPerCarInRequest(addToCartList.getCarRegNo());
                console.log(costPerCar);
                addToListArr[i].setCost(costPerCar);
                addToListArr[i].setDateOfPickup(dateOfPickupInPlacingBookingRequest.val());
                addToListArr[i].setTimeOfPickup(timeOfPickupInPlacingBookingRequest.val());
                addToListArr[i].setPickupVenue(pickupVenueInPlacingBookingRequest.val());
                addToListArr[i].setReturnDate(returnedDateInPlacingBookingRequest.val());
                addToListArr[i].setReturnTime(returnedTimeInPlacingBookingRequest.val());
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
    getPaymentsId();
    let dt1 = new Date();
    let date = undefined;
    if (((dt1.getDate() > -1) && (dt1.getDate() < 10)) && ((dt1.getMonth() > -1) && (dt1.getMonth() < 10))) {
        date = dt1.getFullYear() + "-" + 0 + dt1.getMonth() + "-" + 0 + dt1.getDate();
    } else if ((dt1.getMonth() > -1) && (dt1.getMonth() < 10)) {
        date = dt1.getFullYear() + "-" + 0 + dt1.getMonth() + "-" + dt1.getDate();
    } else if ((dt1.getDate() > -1) && (dt1.getDate() < 10)) {
        date = dt1.getFullYear() + "-" + dt1.getMonth() + "-" + 0 + dt1.getDate();
    }

    let time = dt1.getHours() + "." + dt1.getMinutes() + "." + dt1.getSeconds();

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
    console.log(totalCost)
    return totalCost;
}

function setBookingIdToField() {
    $.ajax({
        url: baseUrl + "bookingCarController/generateBookingId",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                bookingReqIdInPlacingBookingRequest.val(resp.data);
            }
        },
        error: function (error) {
            alert(error.message);
        }
    })
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
            alert(error.message);
        }
    })
}

function getPaymentsId() {
    $.ajax({
        url: baseUrl + "bookingCarController/generatePaymentsId",
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                console.log(resp.data)
                paymentsId = resp.data;
            }
        }
    })
}

function searchCarDetails() {
    $.ajax({
        url: baseUrl + "car/search?regNo=" + carRegNoInPlacingBookingRequest.val(),
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                console.log(data.toString())
                carTypeInPlacingBookingRequestMenu.val(data.type)
                if (data.carType == 'Luxury') {
                    $("#carTypeInPlacingBookingRequestMenu option[value='0']").prop('selected', true);
                } else {
                    $("#carTypeInPlacingBookingRequestMenu option[value='1']").prop('selected', true);
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
    cusNicInPlacingBookingRequest.val("");
    carRegNoInPlacingBookingRequest.val("");
    ifDriverNeedsForBookingRequestCheckBox.checked = false;
    dateOfPickupInPlacingBookingRequest.val("");
    timeOfPickupInPlacingBookingRequest.val("");
    pickupVenueInPlacingBookingRequest.val("");
    returnedDateInPlacingBookingRequest.val("");
    returnedTimeInPlacingBookingRequest.val("");
    returnVenueInPlacingBookingRequest.val("");
    lossDamageWaiverInPlacingBookingRequest.val("");
    costInPlacingBookingRequest.val("");
    totalCostInPlacingBookingRequest.val("");
    lossDamageWaiverSlipInPlacingBookingRequest.val("");
}

