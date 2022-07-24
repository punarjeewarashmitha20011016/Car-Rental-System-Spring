var carRegNoFieldInCar = $("#carRegNoFieldInCar");
var carRegNoFieldInCarPattern = /^[A-Z]{2,3}[-][0-9]{3}$/
var carBrandFieldInCar = $("#carBrandFieldInCar");
var carBrandFieldInCarPattern = /^[A-z ]{2,}$/
var carTransmissionTypeFieldInCar = $("#carTransmissionTypeFieldInCar");
var carTransmissionTypeFieldInCarPattern = /^((Auto||AUTO)||(MANUAL||Manual))$/
var carFuelTypeFieldInCar = $("#carFuelTypeFieldInCar");
var carFuelTypeFieldInCarPattern = /^((Petrol||PETROL)||(Diesel||DIESEL))$/
var carPassengersFieldInCar = $("#carPassengersFieldInCar");
var carPassengersFieldInCarPattern = /^[0-9]{1,}$/
var carMileageInKmFieldInCar = $("#carMileageInKmFieldInCar");
var carMileageInKmFieldInCarPattern = /^[0-9]{1,}$/
var carPriceForExtraKmFieldInCar = $("#carPriceForExtraKmFieldInCar");
var carPriceForExtraKmFieldInCarPattern = /^[0-9]{1,}$/
var carDailyRateFieldInCar = $("#carDailyRateFieldInCar");
var carDailyRateFieldInCarPattern = /^[0-9]{1,}$/
var carMonthlyRateFieldInCar = $("#carMonthlyRateFieldInCar");
var carMonthlyRateFieldInCarPattern = /^[0-9]{1,}$/
var carBookedOrNotStatusFieldInCar = $("#carBookedOrNotStatusFieldInCar");
var carBookedOrNotStatusFieldInCarPattern = /^((Booked||BOOKED)||(Not Booked||NOT BOOKED))$/
var carMaintenanceStatusFieldInCar = $("#carMaintenanceStatusFieldInCar");
var carMaintenanceStatusFieldInCarPattern = /^((Under Maintenance||UNDER MAINTENANCE)||(No Maintenance Required||NO MAINTENANCE REQUIRED))$/
var carImgFile = $("#carImgFile");

var carScheduleTableContainer = $("#carScheduleTableContainer");
var carViewAllTableContainer = $("#carViewAllTableContainer");

var carSaveBtnInCar = $("#carSaveBtnInCar");
var carUpdateBtnInCar = $("#carUpdateBtnInCar");
var carDeleteBtnInCar = $("#carDeleteBtnInCar");
var carViewAllBtn = $("#carViewAllBtn");
var viewCarScheduleBtn = $("#viewCarScheduleBtn");

var carInputsArr = [carRegNoFieldInCar, carBrandFieldInCar, carTransmissionTypeFieldInCar, carFuelTypeFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carBookedOrNotStatusFieldInCar, carMaintenanceStatusFieldInCar
];

$(carRegNoFieldInCar, carBrandFieldInCar, carTransmissionTypeFieldInCar, carFuelTypeFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carBookedOrNotStatusFieldInCar, carMaintenanceStatusFieldInCar, carImgFile).off('keydown');
$(carRegNoFieldInCar, carBrandFieldInCar, carTransmissionTypeFieldInCar, carFuelTypeFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carBookedOrNotStatusFieldInCar, carMaintenanceStatusFieldInCar, carImgFile).keydown(function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});
carRegNoFieldInCar.off('keyup');
carRegNoFieldInCar.keyup(function (e) {
    let index = 0;
    validate(carRegNoFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})
carBrandFieldInCar.off('keyup');
carBrandFieldInCar.keyup(function (e) {
    let index = 1;
    validate(carBrandFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})
carTransmissionTypeFieldInCar.off('keyup');
carTransmissionTypeFieldInCar.keyup(function (e) {
    let index = 2;
    validate(carTransmissionTypeFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carFuelTypeFieldInCar.off('keyup');
carFuelTypeFieldInCar.keyup(function (e) {
    let index = 3;
    validate(carFuelTypeFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carPassengersFieldInCar.off('keyup');
carPassengersFieldInCar.keyup(function (e) {
    let index = 4;
    validate(carPassengersFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carMileageInKmFieldInCar.off('keyup');
carMileageInKmFieldInCar.keyup(function (e) {
    let index = 5;
    validate(carMileageInKmFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})
carPriceForExtraKmFieldInCar.off('keyup');
carPriceForExtraKmFieldInCar.keyup(function (e) {
    let index = 6;
    validate(carPriceForExtraKmFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carDailyRateFieldInCar.off('keyup');
carDailyRateFieldInCar.keyup(function (e) {
    let index = 7;
    validate(carDailyRateFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carMonthlyRateFieldInCar.off('keyup');
carMonthlyRateFieldInCar.keyup(function (e) {
    let index = 8;
    validate(carMonthlyRateFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carBookedOrNotStatusFieldInCar.off('keyup');
carBookedOrNotStatusFieldInCar.keyup(function (e) {
    let index = 9;
    validate(carBookedOrNotStatusFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carMaintenanceStatusFieldInCar.off('keyup');
carMaintenanceStatusFieldInCar.keyup(function (e) {
    let index = 10;
    validate(carMaintenanceStatusFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})


$(carSaveBtnInCar).off('click');
$(carSaveBtnInCar).click(function () {
    var dto  = {
        c_RegNo:carRegNoFieldInCar.val(),
        brand:carBrandFieldInCar.val(),
        type:cartype
    }
})
