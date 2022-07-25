var bookingReqIdInPlacingBookingRequest = $("#bookingReqIdInPlacingBookingRequest");
var bookingReqIdInPlacingBookingRequestPattern = /^(B-)[0-9]{3}$/
var carRegNoInPlacingBookingRequest = $("#carRegNoInPlacingBookingRequest");
var carRegNoInPlacingBookingRequestPattern = /^[A-Z]{2,3}[-][0-9]{3}$/
var cusNicInPlacingBookingRequest = $("#cusNicInPlacingBookingRequest");
var cusNicInPlacingBookingRequestPattern = /^(([0-9]{9}[Vv]{1})||([0-9]{12}))$/
var driverNicInPlacingBookingRequest = $("#driverNicInPlacingBookingRequest");
var driverNicInPlacingBookingRequestPattern = /^(([0-9]{9}[Vv]{1})||([0-9]{12}))$/
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

var placeBookingRequestBtn = $("#placeBookingRequestBtn");
var updateBookingRequestBtn = $("#updateBookingRequestBtn");
var deleteBookingRequestBtn = $("#deleteBookingRequestBtn");
var addToCartInBookingRequestBtn = $("#addToCartInBookingRequestBtn");
var clearCartBtnInBookingRequest = $("#clearCartBtnInBookingRequest");

var addToCartTableInBookingRequest = $("#addToCartTableInBookingRequest");

var bookingReqFieldArr = [bookingReqIdInPlacingBookingRequest, carRegNoInPlacingBookingRequest,
    cusNicInPlacingBookingRequest, driverNicInPlacingBookingRequest,
    carTypeInPlacingBookingRequest, tripInKMInPlacingBookingRequest,
    pickupVenueInPlacingBookingRequest, returnVenueInPlacingBookingRequest,
    lossDamageWaiverInPlacingBookingRequest, costInPlacingBookingRequest
]

$(document).ready(function () {
    placeBookingRequestBtn.prop('disabled', true);
    updateBookingRequestBtn.prop('disabled', true);
    deleteBookingRequestBtn.prop('disabled', true);
    addToCartInBookingRequestBtn.prop('disabled', true);
    clearCartBtnInBookingRequest.prop('disabled', true);
})

bookingReqIdInPlacingBookingRequest.off('keyup');
bookingReqIdInPlacingBookingRequest.keyup(function (e) {
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
driverNicInPlacingBookingRequest.off('keyup');
driverNicInPlacingBookingRequest.keyup(function (e) {
    let index = 3;
    validate(driverNicInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
carTypeInPlacingBookingRequest.off('keyup');
carTypeInPlacingBookingRequest.keyup(function (e) {
    let index = 4;
    validate(carTypeInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})

tripInKMInPlacingBookingRequest.off('keyup');
tripInKMInPlacingBookingRequest.keyup(function (e) {
    let index = 5;
    validate(tripInKMInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
pickupVenueInPlacingBookingRequest.off('keyup');
pickupVenueInPlacingBookingRequest.keyup(function (e) {
    let index = 6;
    validate(pickupVenueInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
returnVenueInPlacingBookingRequest.off('keyup');
returnVenueInPlacingBookingRequest.keyup(function (e) {
    let index = 7;
    validate(returnVenueInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
lossDamageWaiverInPlacingBookingRequest.off('keyup');
lossDamageWaiverInPlacingBookingRequest.keyup(function (e) {
    let index = 8;
    validate(lossDamageWaiverInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})
costInPlacingBookingRequest.off('keyup');
costInPlacingBookingRequest.keyup(function (e) {
    let index = 9;
    validate(costInPlacingBookingRequestPattern, bookingReqFieldArr, index, e, addToCartInBookingRequestBtn, null, null)
})

if ($(lossDamageWaiverSlipInPlacingBookingRequest)[0].files.length != 0) {
    placeBookingRequestBtn.prop('disabled', false);
}