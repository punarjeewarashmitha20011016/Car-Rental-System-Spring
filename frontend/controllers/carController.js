var carRegNoFieldInCar = $("#carRegNoFieldInCar");
var carRegNoFieldInCarPattern = /^[A-Z]{2,3}[-][0-9]{3}$/
var carBrandFieldInCar = $("#carBrandFieldInCar");
var carBrandFieldInCarPattern = /^[A-z ]{2,}$/
var carTypeFieldInCar = $("#carTypeFieldInCar");
var carTypeFieldInCarPattern = /^[A-z ]{2,}$/
var carTransmissionTypeFieldInCar = $("#carTransmissionTypeFieldInCar");
var carTransmissionTypeFieldInCarPattern = /^((Auto||AUTO)||(MANUAL||Manual))$/
var carFuelTypeFieldInCar = $("#carFuelTypeFieldInCar");
var carFuelTypeFieldInCarPattern = /^((Petrol||PETROL)||(Diesel||DIESEL))$/
var carPassengersFieldInCar = $("#carPassengersFieldInCar");
var carPassengersFieldInCarPattern = /^[0-9]{1,}$/
var carMileageInKmFieldInCar = $("#carMileageInKmFieldInCar");
var carMileageInKmFieldInCarPattern = /^[0-9]{1,}$/
var freeMileageFieldInCar = $("#freeMileageFieldInCar");
var freeMileageFieldInCarPattern = /^[0-9]{1,}$/;
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

var carInputsArr = [carRegNoFieldInCar, carBrandFieldInCar, carTypeFieldInCar, carTransmissionTypeFieldInCar, carFuelTypeFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, freeMileageFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carBookedOrNotStatusFieldInCar, carMaintenanceStatusFieldInCar
];

$(carRegNoFieldInCar, carBrandFieldInCar, carTypeFieldInCar, carTransmissionTypeFieldInCar, carFuelTypeFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, freeMileageFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
    carMonthlyRateFieldInCar, carBookedOrNotStatusFieldInCar, carMaintenanceStatusFieldInCar, carImgFile).off('keydown');
$(carRegNoFieldInCar, carBrandFieldInCar, carTypeFieldInCar, carTransmissionTypeFieldInCar, carFuelTypeFieldInCar,
    carPassengersFieldInCar, carMileageInKmFieldInCar, freeMileageFieldInCar, carPriceForExtraKmFieldInCar, carDailyRateFieldInCar,
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
carTypeFieldInCar.off('keyup');
carTypeFieldInCar.keyup(function (e) {
    let index = 2;
    validate(carTypeFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})
carTransmissionTypeFieldInCar.off('keyup');
carTransmissionTypeFieldInCar.keyup(function (e) {
    let index = 3;
    validate(carTransmissionTypeFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carFuelTypeFieldInCar.off('keyup');
carFuelTypeFieldInCar.keyup(function (e) {
    let index = 4;
    validate(carFuelTypeFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carPassengersFieldInCar.off('keyup');
carPassengersFieldInCar.keyup(function (e) {
    let index = 5;
    validate(carPassengersFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carMileageInKmFieldInCar.off('keyup');
carMileageInKmFieldInCar.keyup(function (e) {
    let index = 6;
    validate(carMileageInKmFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

freeMileageFieldInCar.off('keyup');
freeMileageFieldInCar.keyup(function (e) {
    let index = 7;
    validate(freeMileageFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})
carPriceForExtraKmFieldInCar.off('keyup');
carPriceForExtraKmFieldInCar.keyup(function (e) {
    let index = 8;
    validate(carPriceForExtraKmFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carDailyRateFieldInCar.off('keyup');
carDailyRateFieldInCar.keyup(function (e) {
    let index = 9;
    validate(carDailyRateFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carMonthlyRateFieldInCar.off('keyup');
carMonthlyRateFieldInCar.keyup(function (e) {
    let index = 10;
    validate(carMonthlyRateFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carBookedOrNotStatusFieldInCar.off('keyup');
carBookedOrNotStatusFieldInCar.keyup(function (e) {
    let index = 11;
    validate(carBookedOrNotStatusFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})

carMaintenanceStatusFieldInCar.off('keyup');
carMaintenanceStatusFieldInCar.keyup(function (e) {
    let index = 12;
    validate(carMaintenanceStatusFieldInCarPattern, carInputsArr, index, e, carSaveBtnInCar, carUpdateBtnInCar, carDeleteBtnInCar)
})


$(carSaveBtnInCar).off('click');
$(carSaveBtnInCar).click(function () {
    let data = new FormData();
    let file = $("#carImgFile")[0].files;
    var dto = {
        c_RegNo: carRegNoFieldInCar.val(),
        brand: carBrandFieldInCar.val(),
        type: carTypeFieldInCar.val(),
        transmissionType: carTransmissionTypeFieldInCar.val(),
        fuelType: carFuelTypeFieldInCar.val(),
        images: {},
        noOfPassengers: parseInt(carPassengersFieldInCar.val()),
        mileageInKm: parseFloat(carMileageInKmFieldInCar.val()),
        freeMileage: parseFloat(freeMileageFieldInCar.val()),
        priceForExtraKm: parseFloat(carPriceForExtraKmFieldInCar.val()),
        dailyRate: parseFloat(carDailyRateFieldInCar.val()),
        monthlyRate: parseFloat(carMonthlyRateFieldInCar.val()),
        carBookedOrNotStatus: carBookedOrNotStatusFieldInCar.val(),
        maintenanceStatus: carMaintenanceStatusFieldInCar.val()
    }
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));
    for (let i = 0; i < file.length; i++) {
        data.append("carImgFile", file[i], file[i].name);
    }

    $.ajax({
        url: baseUrl + "car",
        method: "POST",
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
})

$(carUpdateBtnInCar).off('click');
$(carUpdateBtnInCar).click(function () {
    let data = new FormData();
    let file = $("#carImgFile")[0].files;
    var dto = {
        c_RegNo: carRegNoFieldInCar.val(),
        brand: carBrandFieldInCar.val(),
        type: carTypeFieldInCar.val(),
        transmissionType: carTransmissionTypeFieldInCar.val(),
        fuelType: carFuelTypeFieldInCar.val(),
        images: {},
        noOfPassengers: parseInt(carPassengersFieldInCar.val()),
        mileageInKm: parseFloat(carMileageInKmFieldInCar.val()),
        freeMileage: parseFloat(freeMileageFieldInCar.val()),
        priceForExtraKm: parseFloat(carPriceForExtraKmFieldInCar.val()),
        dailyRate: parseFloat(carDailyRateFieldInCar.val()),
        monthlyRate: parseFloat(carMonthlyRateFieldInCar.val()),
        carBookedOrNotStatus: carBookedOrNotStatusFieldInCar.val(),
        maintenanceStatus: carMaintenanceStatusFieldInCar.val()
    }
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));
    for (let i = 0; i < file.length; i++) {
        data.append("carImgFile", file[i], file[i].name);
    }

    $.ajax({
        url: baseUrl + "car",
        method: "PUT",
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
})

$(carDeleteBtnInCar).off('click');
$(carDeleteBtnInCar).click(function () {
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
    carTypeFieldInCar.val("");
    $(carTypeFieldInCar).css("border", "1px solid #ced4da");
    carTransmissionTypeFieldInCar.val("");
    $(carTransmissionTypeFieldInCar).css("border", "1px solid #ced4da");
    carFuelTypeFieldInCar.val("");
    $(carFuelTypeFieldInCar).css("border", "1px solid #ced4da");
    carPassengersFieldInCar.val("");
    $(carPassengersFieldInCar).css("border", "1px solid #ced4da");
    carMileageInKmFieldInCar.val("");
    $(carMileageInKmFieldInCar).css("border", "1px solid #ced4da");
    freeMileageFieldInCar.val("");
    $(freeMileageFieldInCar).css("border", "1px solid #ced4da");
    carPriceForExtraKmFieldInCar.val("");
    $(carPriceForExtraKmFieldInCar).css("border", "1px solid #ced4da");
    carDailyRateFieldInCar.val("");
    $(carDailyRateFieldInCar).css("border", "1px solid #ced4da");
    carMonthlyRateFieldInCar.val("");
    $(carMonthlyRateFieldInCar).css("border", "1px solid #ced4da");
    carBookedOrNotStatusFieldInCar.val("");
    $(carBookedOrNotStatusFieldInCar).css("border", "1px solid #ced4da");
    carMaintenanceStatusFieldInCar.val("");
    $(carMaintenanceStatusFieldInCar).css("border", "1px solid #ced4da");
    carImgFile.val("");
    $(carImgFile).css("border", "1px solid #ced4da");
}

