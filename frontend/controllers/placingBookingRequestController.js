var bookingReqIdInPlacingBookingRequest = $("#bookingReqIdInPlacingBookingRequest");
var bookingReqIdInPlacingBookingRequestPattern = /^(BO-)[0-9]{3}$/
var carRegNoInPlacingBookingRequest = $("#carRegNoInPlacingBookingRequest");
var carRegNoInPlacingBookingRequestPattern = /^[A-Z]{2,3}[-][0-9]{3}$/
var cusNicInPlacingBookingRequest = $("#cusNicInPlacingBookingRequest");
var cusNicInPlacingBookingRequestPattern = /^(([0-9]{9}[Vv]{1})||([0-9]{12}))$/
var ifDriverNeedsForBookingRequestCheckBox = $("#ifDriverNeedsForBookingRequestCheckBox");
var carTypeInPlacingBookingRequest = $("#carTypeInPlacingBookingRequest");
var carTypeInPlacingBookingRequestPattern = /^[A-z ]{2,}$/
var tripInKMInPlacingBookingRequest = $("#tripInKMInPlacingBookingRequest");
var tripInKMInPlacingBookingRequestPattern = /^[0-9]{1,}$/
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
    carTypeInPlacingBookingRequest, tripInKMInPlacingBookingRequest,
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
carTypeInPlacingBookingRequest.off('keyup');
carTypeInPlacingBookingRequest.keyup(function (e) {
    let index = 3;
    validate(carTypeInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})

tripInKMInPlacingBookingRequest.off('keyup');
tripInKMInPlacingBookingRequest.keyup(function (e) {
    let index = 4;
    validate(tripInKMInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
pickupVenueInPlacingBookingRequest.off('keyup');
pickupVenueInPlacingBookingRequest.keyup(function (e) {
    let index = 5;
    validate(pickupVenueInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
returnVenueInPlacingBookingRequest.off('keyup');
returnVenueInPlacingBookingRequest.keyup(function (e) {
    let index = 6;
    validate(returnVenueInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
lossDamageWaiverInPlacingBookingRequest.off('keyup');
lossDamageWaiverInPlacingBookingRequest.keyup(function (e) {
    let index = 7;
    validate(lossDamageWaiverInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
costInPlacingBookingRequest.off('keyup');
costInPlacingBookingRequest.keyup(function (e) {
    let index = 8;
    validate(costInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
totalCostInPlacingBookingRequest.off('keyup');
totalCostInPlacingBookingRequest.keyup(function (e) {
    let index = 9;
    validate(totalCostInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})

$(document).ready(function () {
    setBookingIdToField();
    assignDriverToField();
    setCarRegNoToFieldWhenSpecificCarIsChosen();
    totalCostInPlacingBookingRequest.prop('disabled', true);
    placeBookingRequestBtn.prop('disabled', true);
    updateBookingRequestBtn.prop('disabled', true);
    deleteBookingRequestBtn.prop('disabled', true);
    addToCartInBookingRequestBtn.prop('disabled', true);
    clearCartBtnInBookingRequest.prop('disabled', true);
})

if ($(lossDamageWaiverSlipInPlacingBookingRequest)[0].files.length != 0) {
    disableOrEnablePlaceBookingRequestBtns(placeBookingRequestBtn, false);
}

function disableOrEnablePlaceBookingRequestBtns(btn, check) {
    btn.prop('disabled', check);
}

function assignDriverToField() {
    let driver = undefined;
    if (ifDriverNeedsForBookingRequestCheckBox.checked == true) {
        $.ajax({
            url: baseUrl + "bookingCarRequestController/checkAvailableDriver",
            method: "GET",
            success: function (resp) {
                let data = resp.data;
                if (resp.status == 200) {
                    driver = data.nic;
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
$(addToCartInBookingRequestBtn).click(function () {
    let lossDamageFile = {
        file: $(lossDamageWaiverSlipInPlacingBookingRequest)[0].files[0],
        fileName: $(lossDamageWaiverSlipInPlacingBookingRequest)[0].files[0].name
    }
    let addToCartList = {
        bookingId: bookingReqIdInPlacingBookingRequest.val(),
        carRegNo: carRegNoInPlacingBookingRequest.val(),
        cusNic: cusNicInPlacingBookingRequest.val(),
        driverNic: assignDriverToField(),
        carType: carTypeInPlacingBookingRequest.val(),
        tripInKm: parseFloat(tripInKMInPlacingBookingRequest.val()),
        dateOfPickup: dateOfPickupInPlacingBookingRequest.val(),
        timeOfPickup: timeOfPickupInPlacingBookingRequest.val(),
        pickupVenue: pickupVenueInPlacingBookingRequest.val(),
        returnDate: returnedDateInPlacingBookingRequest.val(),
        returnTime: returnedTimeInPlacingBookingRequest.val(),
        returnVenue: returnVenueInPlacingBookingRequest.val(),
        lossDamageWaiver: parseFloat(lossDamageWaiverInPlacingBookingRequest.val()),
        lossDamageFile: lossDamageFile,
        cost: calculateCost()
    }

    if (checkIfAlreadySameCarExists(carRegNoInPlacingBookingRequest.val()) == true) {
        for (let i = 0; i < addToListArr.length; i++) {
            if (addToListArr[i].carRegNo == addToCartList.carRegNo) {
                addToListArr[i] = addToCartList;
                addDataToCartTable();
            }
        }
    } else {
        addToListArr.push(addToCartList);
        addDataToCartTable();
    }
})

function checkIfAlreadySameCarExists(carRegNo) {
    for (let i = 0; i < addToListArr.length; i++) {
        if (addToListArr[i].carRegNo == carRegNo) {
            return true;
        }
    }
    return false;
}

function addDataToCartTable() {
    let tbody = $(addToCartTableInBookingRequest).children('tbody');
    $(tbody).empty();
    for (let i = 0; i < addToListArr.length; i++) {
        let row = `<tr>
                    <td>(i+1)</td>
                    <td>` + addToListArr[i].bookingId + `</td>
                    <td>` + addToListArr[i].carRegNo + `</td>
                    <td>` + addToListArr[i].cusNic + `</td>
                    <td>` + addToListArr[i].driverNic + `</td>
                    <td>` + addToListArr[i].carType + `</td>
                    <td>` + addToListArr[i].tripInKm + `</td>
                    <td>` + addToListArr[i].dateOfPickup + `</td>
                    <td>` + addToListArr[i].timeOfPickup + `</td>
                    <td>` + addToListArr[i].pickupVenue + `</td>
                    <td>` + addToListArr[i].returnDate + `</td>
                    <td>` + addToListArr[i].returnTime + `</td>
                    <td>` + addToListArr[i].returnVenue + `</td>
                    <td>` + addToListArr[i].lossDamageWaiver + `</td>
                    <td><img src=` + addToListArr[i].lossDamageFile.file + `></td>
              </tr>`
        $(tbody).append(row);
    }
}

function calculateCost() {
    let cost = 0;
    for (let i = 0; i < addToListArr.length; i++) {
        cost += parseFloat(addToListArr[i].lossDamageWaiver);
    }
    costInPlacingBookingRequest.val(cost);
    return cost;
}

function setBookingIdToField() {
    $.ajax({
        url: baseUrl + "bookingCarRequestController/generateBookingId",
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

function setCarRegNoToFieldWhenSpecificCarIsChosen() {
    for (let i = 0; i < carBookingChooserBtnArr.length; i++) {
        carBookingChooserBtnArr[i].btn.click(function () {

            carRegNoInPlacingBookingRequest.val(carBookingChooserBtnArr[i].c_RegNo);
        })
    }
}