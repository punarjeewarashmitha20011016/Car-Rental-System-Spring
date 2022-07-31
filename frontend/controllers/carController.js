var carRegNoFieldInCar = $("#carRegNoFieldInCar");
var carRegNoFieldInCarPattern = /^[A-Z]{2,3}[-][0-9]{3}$/
var carBrandFieldInCar = $("#carBrandFieldInCar");
var carBrandFieldInCarPattern = /^[A-z ]{2,}$/

var carPassengersFieldInCar = $("#carPassengersFieldInCar");
var carPassengersFieldInCarPattern = /^[0-9]{1,}$/
var carMileageInKmFieldInCar = $("#carMileageInKmFieldInCar");
var carMileageInKmFieldInCarPattern = /^[0-9]{1,}$/

var freeKmPerDayFieldInCar = $("#freeKmPerDayFieldInCar");
var freeKmPerDayFieldInCarPattern = /^[0-9]{1,}$/;
var freeKmPerMonthFieldInCar = $("#freeKmPerMonthFieldInCar");
var freeKmPerMonthFieldInCarPattern = /^[0-9]{1,}$/;

var carPriceForExtraKmFieldInCar = $("#carPriceForExtraKmFieldInCar");
var carPriceForExtraKmFieldInCarPattern = /^[0-9]{1,}$/
var carDailyRateFieldInCar = $("#carDailyRateFieldInCar");
var carDailyRateFieldInCarPattern = /^[0-9]{1,}$/
var carMonthlyRateFieldInCar = $("#carMonthlyRateFieldInCar");
var carMonthlyRateFieldInCarPattern = /^[0-9]{1,}$/
var carImgFile = $("#carImgFile");
var carLossDamageWaiverFieldInCar = $("#carLossDamageWaiverFieldInCar");
var carLossDamageWaiverFieldInCarPattern = /^[0-9]{1,}$/

var carScheduleTableContainer = $("#carScheduleTableContainer");
var carViewAllTableContainer = $("#carViewAllTableContainer");

var carSaveBtnInCar = $("#carSaveBtnInCar");
var carUpdateBtnInCar = $("#carUpdateBtnInCar");
var carDeleteBtnInCar = $("#carDeleteBtnInCar");
var carViewAllBtn = $("#carViewAllBtn");
var viewCarScheduleBtn = $("#viewCarScheduleBtn");

var carInputsArr = [carRegNoFieldInCar, carBrandFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, freeKmPerDayFieldInCar, freeKmPerMonthFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carLossDamageWaiverFieldInCar
];

$(carRegNoFieldInCar, carBrandFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, freeKmPerDayFieldInCar, freeKmPerMonthFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carImgFile, carLossDamageWaiverFieldInCar).off('keydown');
$(carRegNoFieldInCar, carBrandFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, freeKmPerDayFieldInCar, freeKmPerMonthFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carImgFile, carLossDamageWaiverFieldInCar).keydown(function (e) {
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

carPassengersFieldInCar.off('keyup');
carPassengersFieldInCar.keyup(function (e) {
    let index = 2;
    validate(carPassengersFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carMileageInKmFieldInCar.off('keyup');
carMileageInKmFieldInCar.keyup(function (e) {
    let index = 3;
    validate(carMileageInKmFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

freeKmPerDayFieldInCar.off('keyup');
freeKmPerDayFieldInCar.keyup(function (e) {
    let index = 4;
    validate(freeKmPerDayFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

freeKmPerMonthFieldInCar.off('keyup');
freeKmPerMonthFieldInCar.keyup(function (e) {
    let index = 5;
    validate(freeKmPerMonthFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
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
carLossDamageWaiverFieldInCar.off('keyup');
carLossDamageWaiverFieldInCar.keyup(function (e) {
    let index = 9;
    validate(carLossDamageWaiverFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

$(carSaveBtnInCar).off('click');
$(carSaveBtnInCar).click(function () {
    let data = new FormData();
    let file = $("#carImgFile")[0].files;
    var dto = {
        c_RegNo: carRegNoFieldInCar.val(),
        brand: carBrandFieldInCar.val(),
        type: $('#carTypeMenuInCar :selected').text(),
        transmissionType: $('#transmissionTypeMenuInCar :selected').text(),
        fuelType: $('#fuelTypeMenuInCar :selected').text(),
        images: {},
        noOfPassengers: parseInt(carPassengersFieldInCar.val()),
        mileageInKm: parseFloat(carMileageInKmFieldInCar.val()),
        freeKmPerDay: parseFloat(freeKmPerDayFieldInCar.val()),
        freeKmPerMonth: parseFloat(freeKmPerMonthFieldInCar.val()),
        priceForExtraKm: parseFloat(carPriceForExtraKmFieldInCar.val()),
        dailyRate: parseFloat(carDailyRateFieldInCar.val()),
        monthlyRate: parseFloat(carMonthlyRateFieldInCar.val()),
        carBookedOrNotStatus: $('#bookedStatusMenuInCar :selected').text(),
        maintenanceStatus: $('#maintenanceStatusMenuInCar :selected').text(),
        lossDamageWaiver: carLossDamageWaiverFieldInCar.val()
    }
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));
    for (let i = 0; i < file.length; i++) {
        data.append("carImgFile", file[i], file[i].name);
    }

    if (confirm("Do You Want To Save This Car Details..?") == true) {
        $.ajax({
            url: baseUrl + "car",
            method: "POST",
            async: true,
            data: data,
            contentType: false,
            processData: false,
            success: function (resp) {
                if (resp.status == 200) {
                    clearCarFields();
                    alert(resp.message);
                    getAllCars();
                }
            },
            error: function (error) {
                clearCarFields();
                alert(error.message);
            }
        })
    }
})

$(carUpdateBtnInCar).off('click');
$(carUpdateBtnInCar).click(function () {
    let data = new FormData();
    let file = $("#carImgFile")[0].files;
    var dto = {
        c_RegNo: carRegNoFieldInCar.val(),
        brand: carBrandFieldInCar.val(),
        type: $('#carTypeMenuInCar :selected').text(),
        transmissionType: $('#transmissionTypeMenuInCar :selected').text(),
        fuelType: $('#fuelTypeMenuInCar :selected').text(),
        images: {},
        noOfPassengers: parseInt(carPassengersFieldInCar.val()),
        mileageInKm: parseFloat(carMileageInKmFieldInCar.val()),
        freeKmPerDay: parseFloat(freeKmPerDayFieldInCar.val()),
        freeKmPerMonth: parseFloat(freeKmPerMonthFieldInCar.val()),
        priceForExtraKm: parseFloat(carPriceForExtraKmFieldInCar.val()),
        dailyRate: parseFloat(carDailyRateFieldInCar.val()),
        monthlyRate: parseFloat(carMonthlyRateFieldInCar.val()),
        carBookedOrNotStatus: $('#bookedStatusMenuInCar :selected').text(),
        maintenanceStatus: $('#maintenanceStatusMenuInCar :selected').text(),
        lossDamageWaiver: carLossDamageWaiverFieldInCar.val()
    }
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));
    for (let i = 0; i < file.length; i++) {
        data.append("carImgFile", file[i], file[i].name);
    }

    if (confirm("Do You Want To Update This Car Details..?") == true) {
        $.ajax({
            url: baseUrl + "car",
            method: "PUT",
            data: data,
            async: true,
            contentType: false,
            processData: false,
            success: function (resp) {
                if (resp.status == 200) {
                    clearCarFields();
                    alert(resp.message);
                    getAllCars();
                }
            },
            error: function (error) {
                clearCarFields();
                alert(error.message);
            }
        })
    }
})

$(carDeleteBtnInCar).off('click');
$(carDeleteBtnInCar).click(function () {
    if (confirm("Do You Want To Delete This Car..?") == true) {
        $.ajax({
            url: baseUrl + "car?regNo=" + carRegNoFieldInCar.val(),
            method: "DELETE",
            success: function (resp) {
                clearCarFields();
                alert(resp.message);
                getAllCars();
            },
            error: function (error) {
                clearCarFields();
                alert(error.message);
            }
        })
    }
})

$(carViewAllBtn).off('click');
$(carViewAllBtn).click(function () {
    getAllCars();
})

function clearCarFields() {
    carRegNoFieldInCar.val("");
    $(carRegNoFieldInCar).css("border", "1px solid #ced4da");
    carBrandFieldInCar.val("");
    $(carBrandFieldInCar).css("border", "1px solid #ced4da");
    carPassengersFieldInCar.val("");
    $(carPassengersFieldInCar).css("border", "1px solid #ced4da");
    carMileageInKmFieldInCar.val("");
    $(carMileageInKmFieldInCar).css("border", "1px solid #ced4da");
    freeKmPerDayFieldInCar.val("");
    $(freeKmPerDayFieldInCar).css("border", "1px solid #ced4da");
    freeKmPerMonthFieldInCar.val("");
    $(freeKmPerMonthFieldInCar).css("border", "1px solid #ced4da");
    carPriceForExtraKmFieldInCar.val("");
    $(carPriceForExtraKmFieldInCar).css("border", "1px solid #ced4da");
    carDailyRateFieldInCar.val("");
    $(carDailyRateFieldInCar).css("border", "1px solid #ced4da");
    carMonthlyRateFieldInCar.val("");
    $(carMonthlyRateFieldInCar).css("border", "1px solid #ced4da");
    carLossDamageWaiverFieldInCar.val("");
    $(carLossDamageWaiverFieldInCar).css("border", "1px solid #ced4da");
    carImgFile.val("");
    $(carImgFile).css("border", "1px solid #ced4da");
}



