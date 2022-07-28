function AddToCart(bookingId, carRegNo, cusNic, driverNic, carType, rentalType, dateOfPickup, timeOfPickup, pickupVenue, returnDate, returnTime, returnVenue, lossDamageWaiver, cost) {
    var __bookingId = bookingId;
    var __carRegNo = carRegNo;
    var __cusNic = cusNic;
    var __driverNic = driverNic;
    var __carType = carType;
    var __rentalType = rentalType;
    var __dateOfPickup = dateOfPickup;
    var __timeOfPickup = timeOfPickup;
    var __pickupVenue = pickupVenue;
    var __returnDate = returnDate;
    var __returnTime = returnTime;
    var __returnVenue = returnVenue;
    var __lossDamageWaiver = lossDamageWaiver;
    var __cost = cost;

    this.setBookingId = function (bookingId) {
        __bookingId = bookingId;
    }
    this.setCarRegNo = function (carRegNo) {
        __carRegNo = carRegNo;
    }

    this.setCusNic = function (cusNic) {
        __cusNic = cusNic;
    }

    this.setDriverNic = function (driverNic) {
        __driverNic = driverNic;
    }

    this.setCarType = function (carType) {
        __carType = carType;
    }

    this.setRentalType = function (rentalType) {
        __rentalType = rentalType;
    }

    this.setDateOfPickup = function (dateOfPickup) {
        __dateOfPickup = dateOfPickup;
    }

    this.setTimeOfPickup = function (timeOfPickup) {
        __timeOfPickup = timeOfPickup;
    }
    this.setPickupVenue = function (pickupVenue) {
        __pickupVenue = pickupVenue;
    }

    this.setReturnDate = function (returnDate) {
        __returnDate = returnDate;
    }

    this.setReturnTime = function (returnTime) {
        __returnTime = returnTime;
    }

    this.setReturnVenue = function (returnVenue) {
        __returnVenue = returnVenue;
    }

    this.setLossDamageWaiver = function (lossDamageWaiver) {
        __lossDamageWaiver = lossDamageWaiver;
    }
    this.setCost = function (cost) {
        __cost = cost;
    }

    this.getBookingId = function () {
        return __bookingId;
    }

    this.getCarRegNo = function () {
        return __carRegNo;
    }

    this.getCusNic = function () {
        return __cusNic;
    }

    this.getDriverNic = function () {
        return __driverNic;
    }

    this.getCarType = function () {
        return __carType;
    }

    this.getRentalType = function () {
        return __rentalType;
    }

    this.getDateOfPickup = function () {
        return __dateOfPickup;
    }
    this.getTimeOfPickup = function () {
        return __timeOfPickup;
    }
    this.getPickupVenue = function () {
        return __pickupVenue;
    }
    this.getReturnDate = function () {
        return __returnDate;
    }
    this.getReturnTime = function () {
        return __returnTime;
    }
    this.getReturnVenue = function () {
        return __returnVenue;
    }
    this.getLossDamageWaiver = function () {
        return __lossDamageWaiver;
    }
    this.getCost = function () {
        return __cost;
    }
}