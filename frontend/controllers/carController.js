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

function getAllCars() {
    console.log('getAllCars Invoked')
    $.ajax({
        url: baseUrl + "car/getAll",
        method: "GET",
        success: function (resp) {
            if (resp.status = 200) {
                let data = resp.data;
                addCarsToViewInTheHome(data);
                console.log(resp.data);
                let tbody = $(carViewAllTableContainer).children('table').children('tbody');
                $(tbody).empty();
                for (let i = 0; i < data.length; i++) {
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                     <td>` + data[i].c_RegNo + `</td>
                                     <td>` + data[i].brand + `</td>
                                     <td>` + data[i].type + `</td>
                                     <td>` + data[i].transmissionType + `</td>
                                     <td>` + data[i].fuelType + `</td>
                                     <td>` + data[i].noOfPassengers + `</td>
                                     <td>` + data[i].mileageInKm + `</td>
                                     <td>` + data[i].freeMileage + `</td>
                                     <td>` + data[i].priceForExtraKm + `</td>
                                     <td>` + data[i].dailyRate + `</td>
                                     <td>` + data[i].monthlyRate + `</td>
                                     <td>` + data[i].carBookedOrNotStatus + `</td>
                                     <td>` + data[i].maintenanceStatus + `</td>
                                     <td><img src="${baseUrl + "/" + data[i].images.firstImage}" width="100px"></td>
                                     <td><img src="${baseUrl + "/" + data[i].images.secondImage}" width="100px"></td>
                                     <td><img src="${baseUrl + "/" + data[i].images.thirdImage}" width="100px"></td>
                                     <td><img src="${baseUrl + "/" + data[i].images.fourthImage}" width="100px"></td>
                                     
                               </tr>`;
                    tbody.append(row);
                }
            }
        }
    })
}

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

function addCarsToViewInTheHome(arr) {
    let cardsContainingContainerInCustomerSection = $("#cardsContainingContainerInCustomerSection");
    $(cardsContainingContainerInCustomerSection).empty();
    for (let i = 0; i < arr.length; i++) {
        let rootContainerDiv = document.createElement("div");
        rootContainerDiv.className = 'col-1 card d-flex ms-3 me-3 align-items-center justify-content-center shadow-lg';
        rootContainerDiv.style.height = '100%';

        let rootContainerDivFirstChildDiv = document.createElement("div");
        rootContainerDivFirstChildDiv.className = 'row d-flex align-items-center justify-content-center';
        rootContainerDivFirstChildDiv.style.width = '100%';
        rootContainerDivFirstChildDiv.style.height = '100%';

        let rootContainerDivFirstChildDivFirstChildDiv = document.createElement("div");
        rootContainerDivFirstChildDivFirstChildDiv.className = 'col-12 d-flex ps-0 pe-0 flex-wrap';
        rootContainerDivFirstChildDivFirstChildDiv.style.height = '65%';

        let firstImgDiv = document.createElement("div");
        firstImgDiv.className = 'col-6';

        let firstImg = document.createElement('img');
        firstImg.className = 'w-100 h-100';
        firstImg.alt = "";
        firstImg.src = baseUrl + "/" + arr[i].images.firstImage;

        firstImgDiv.append(firstImg);

        let secondImgDiv = document.createElement("div");
        secondImgDiv.className = 'col-6';

        let secondImg = document.createElement('img');
        secondImg.className = 'w-100 h-100';
        secondImg.alt = "";
        secondImg.src = baseUrl + "/" + arr[i].images.secondImage;

        secondImgDiv.append(secondImg);

        let thirdImgDiv = document.createElement("div");
        thirdImgDiv.className = 'col-6';

        let thirdImg = document.createElement('img');
        thirdImg.className = 'w-100 h-100';
        thirdImg.alt = "";
        thirdImg.src = baseUrl + "/" + arr[i].images.thirdImage;

        thirdImgDiv.append(thirdImg);

        let fourthImgDiv = document.createElement("div");
        fourthImgDiv.className = 'col-6';

        let fourthImg = document.createElement('img');
        fourthImg.className = 'w-100 h-100';
        fourthImg.alt = "";
        fourthImg.src = baseUrl + "/" + arr[i].images.fourthImage;

        fourthImgDiv.append(fourthImg);

        rootContainerDivFirstChildDivFirstChildDiv.append(firstImgDiv);
        rootContainerDivFirstChildDivFirstChildDiv.append(secondImgDiv);
        rootContainerDivFirstChildDivFirstChildDiv.append(thirdImgDiv);
        rootContainerDivFirstChildDivFirstChildDiv.append(fourthImgDiv);

        let btnContainer = document.createElement("div");
        btnContainer.className = 'col-12 flex-wrap d-flex align-items-center justify-content-center';
        btnContainer.style.height = '35%';

        let firstChildDivInBtnContainer = document.createElement('div');
        firstChildDivInBtnContainer.className = 'col-12 text-center justify-content-center align-items-center d-flex';
        firstChildDivInBtnContainer.style.height = '60%';

        let h5InFirstChildDivInBtnContainer = document.createElement('h5');
        h5InFirstChildDivInBtnContainer.innerHTML = arr[i].images.firstImage.split("/")[1];

        let secondChildDivInBtnContainer = document.createElement('div');
        secondChildDivInBtnContainer.className = 'col-12 d-flex align-items-center justify-content-center';
        secondChildDivInBtnContainer.style.height = '40%';

        let btnWrapperATag = document.createElement('a');
        btnWrapperATag.style.textDecoration = 'none';
        btnWrapperATag.id = i + "carBookBtn";
        btnWrapperATag.href = "#placingBookingRequestInCustomer"
        let btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.innerHTML = 'Book Now';
        btnWrapperATag.append(btn);
        let btnWithCarRegNo = {
            carRegNo: arr[i].c_RegNo,
            btn: btnWrapperATag
        }
        carBookingChooserBtnArr.push(btnWithCarRegNo);
        firstChildDivInBtnContainer.append(h5InFirstChildDivInBtnContainer);
        secondChildDivInBtnContainer.append(btn);
        btnContainer.append(firstChildDivInBtnContainer);
        btnContainer.append(secondChildDivInBtnContainer);
        rootContainerDivFirstChildDiv.append(rootContainerDivFirstChildDivFirstChildDiv);
        rootContainerDivFirstChildDiv.append(btnContainer);
        rootContainerDiv.append(rootContainerDivFirstChildDiv);
        cardsContainingContainerInCustomerSection.append(rootContainerDiv);
    }
}
