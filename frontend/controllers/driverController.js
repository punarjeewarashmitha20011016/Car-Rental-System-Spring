var driverNicField = $("#driverNicField");
var driverNicFieldPattern = /^(([0-9]{9}[Vv]{1})||([0-9]{12}))$/
var driverNameField = $("#driverNameField");
var driverNameFieldPattern = /^[A-z ]{4,}$/
var driverLicenseField = $("#driverLicenseField");
var driverLicenseFieldPattern = /^[B][0-9]{7}$/
var driverContactNoField = $("#driverContactNoField");
var driverContactNoFieldPattern = /^[0-9]{10}$/
var driverEmailField = $("#driverEmailField");
var driverEmailFieldPattern = /^[A-z0-9.]{5,30}[@][A-z]{3,7}[.](com|lk|uk|[a-z]){1,}$/
var driverPasswordField = $("#driverPasswordField");
var driverPasswordFieldPattern = /^[A-z.!@#$%&() ]{2,}$/;
var driverAddressField = $("#driverAddressField");
var driverAddressFieldPattern = /^[A-z0-9,.  ]*[/]?[0-9]*[ ]?[A-z,. ]*$/
var nicFileInDriver = $("#nicFileInDriver");
var licenseFileInDriver = $("#licenseFileInDriver");

var driverSaveBtn = $("#driverSaveBtn");
var driverUpdateBtn = $("#driverUpdateBtn");
var driverDeleteBtn = $("#driverDeleteBtn");
var driverViewAllBtn = $("#driverViewAllBtn");


var driverInputsArr = [driverNicField, driverNameField, driverLicenseField, driverContactNoField, driverEmailField, driverPasswordField, driverAddressField];


$(driverNicField, driverNameField, driverLicenseField, driverContactNoField, driverEmailField, driverPasswordField, driverAddressField).off('keydown');
$(driverNicField, driverNameField, driverLicenseField, driverContactNoField, driverEmailField, driverPasswordField, driverAddressField).keydown(function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});
driverNicField.off('keyup');
driverNicField.keyup(function (e) {
    let index = 0;
    validate(driverNicFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
    if ((driverNicField.val().length == 10) || (driverNicField.val().length == 12)) {
        if (e.key == 'Shift') {
            let driver = searchDriverDetails();
            console.log(driver);
            driverNicField.val(driver.nic);
            driverNameField.val(driver.name);
            driverLicenseField.val(driver.licenseNo);
            driverContactNoField.val(0 + driver.contactNo);
            driverAddressField.val(driver.address);
            $("#availabilityStatusMenuInDriver :selected").text()
            if (driver.availableStatus == 'Available') {
                $("#availabilityStatusMenuInDriver option[value='1']").prop('selected', true);
            } else {
                $("#availabilityStatusMenuInDriver option[value='2']").prop('selected', true);
            }
            driverEmailField.val(driver.email);
            driverPasswordField.val(driver.password);
        } else if (e.key == 'backspace' || e.keyCode == 8) {
            console.log('backspace');
            clearAllDriverFields();
        }
    }
})

driverNameField.off('keyup');
driverNameField.keyup(function (e) {
    let index = 1;
    validate(driverNameFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
})

driverLicenseField.off('keyup');
driverLicenseField.keyup(function (e) {
    let index = 2;
    validate(driverLicenseFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
})

driverContactNoField.off('keyup');
driverContactNoField.keyup(function (e) {
    let index = 3;
    validate(driverContactNoFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
})

driverEmailField.off('keyup');
driverEmailField.keyup(function (e) {
    let index = 4;
    validate(driverEmailFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
})

driverPasswordField.off('keyup');
driverPasswordField.keyup(function (e) {
    let index = 5;
    validate(driverPasswordFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
})
driverAddressField.off('keyup');
driverAddressField.keyup(function (e) {
    let index = 6;
    validate(driverAddressFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
})
$(driverSaveBtn).off('click');
$(driverSaveBtn).click(function () {
    let data = new FormData();
    let dto = {
        nic: driverNicField.val(),
        name: driverNameField.val(),
        licenseNo: driverLicenseField.val(),
        licensePhoto: "",
        nicPhoto: "",
        contactNo: parseInt(driverContactNoField.val()),
        address: driverAddressField.val(),
        availableStatus: $("#availabilityStatusMenuInDriver :selected").text(),
        email: driverEmailField.val(),
        password: driverPasswordField.val()
    }
    let nicPhotoFile = $(nicFileInDriver)[0].files[0];
    let nicPhotoFileName = $(nicFileInDriver)[0].files[0].name;
    let licensePhotoFile = $(licenseFileInDriver)[0].files[0];
    let licensePhotoFileName = $(licenseFileInDriver)[0].files[0].name;
    data.append("nicPhoto", nicPhotoFile, nicPhotoFileName);
    data.append("licensePhoto", licensePhotoFile, licensePhotoFileName);
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));

    if (confirm('Do you want to save this driver') == true) {
        $.ajax({
            url: baseUrl + "driver",
            method: "POST",
            async: true,
            data: data,
            processData: false,
            contentType: false,
            success: function (resp) {
                clearAllDriverFields();
                alert(resp.message)
                getAllDrivers();
            },
            error: function (ob) {
                clearAllDriverFields();
                alert(ob.message);
                getAllDrivers();
            }
        })
    }
})

$(driverUpdateBtn).off('click');
$(driverUpdateBtn).click(function () {
    let data = new FormData();
    let dto = {
        nic: driverNicField.val(),
        name: driverNameField.val(),
        licenseNo: driverLicenseField.val(),
        licensePhoto: "",
        nicPhoto: "",
        contactNo: parseInt(driverContactNoField.val()),
        address: driverAddressField.val(),
        availableStatus: $("#availabilityStatusMenuInDriver :selected").text(),
        email: driverEmailField.val(),
        password: driverPasswordField.val()
    }
    let nicPhotoFile = $(nicFileInDriver)[0].files[0];
    let nicPhotoFileName = $(nicFileInDriver)[0].files[0].name;
    let licensePhotoFile = $(licenseFileInDriver)[0].files[0];
    let licensePhotoFileName = $(licenseFileInDriver)[0].files[0].name;
    data.append("nicPhoto", nicPhotoFile, nicPhotoFileName);
    data.append("licensePhoto", licensePhotoFile, licensePhotoFileName);
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));

    if (confirm('Do you want to update this driver details') == true) {
        $.ajax({
            url: baseUrl + "driver",
            method: "PUT",
            async: true,
            data: data,
            processData: false,
            contentType: false,
            success: function (resp) {
                clearAllDriverFields();
                alert(resp.message)
                getAllDrivers();
            },
            error: function (ob) {
                clearAllDriverFields();
                alert(ob.message);
                getAllDrivers();
            }
        })
    }
})

$(driverDeleteBtn).off('click');
$(driverDeleteBtn).click(function () {
    if (confirm('Do you want to delete this driver') == true) {
        $.ajax({
            url: baseUrl + "driver?nic=" + driverNicField.val(),
            method: "DELETE",
            success: function (resp) {
                clearAllDriverFields();
                alert(resp.message);
                getAllDrivers();
            },
            error: function (error) {
                clearAllDriverFields();
                alert(error.message)
                getAllDrivers();
            }
        })
    }
})


$(driverViewAllBtn).off('click');
$(driverViewAllBtn).click(function () {
    getAllDrivers();
})

function getAllDrivers() {
    $.ajax({
        url: baseUrl + "driver/getAll",
        method: "GET",
        success: function (resp) {
            if (resp.status = 200) {
                let data = resp.data;
                console.log(resp.data);
                let tbody = $("#driverViewAllTableContainer").children('table').children('tbody');
                $(tbody).empty();
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].nicPhoto);
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                     <td>` + data[i].nic + `</td>
                                     <td>` + data[i].name + `</td>
                                     <td>` + data[i].licenseNo + `</td>
                                     <td>` + data[i].contactNo + `</td>
                                     <td>` + data[i].address + `</td>
                                     <td>` + data[i].availableStatus + `</td>
                                     <td>` + data[i].email + `</td>
                                     <td>` + data[i].password + `</td>
                                     <td><img src="${baseUrl + "/" + data[i].nicPhoto}" width="100px"></td>
                                     <td><img src="${baseUrl + "/" + data[i].licensePhoto}" width="100px"></td>             
                               </tr>`;
                    tbody.append(row);
                }
            }
        }
    })
}

function clearAllDriverFields() {
    driverNicField.val("");
    $(driverNicField).css("border", "1px solid #ced4da");
    driverNameField.val("");
    $(driverNameField).css("border", "1px solid #ced4da");
    driverLicenseField.val("");
    $(driverLicenseField).css("border", "1px solid #ced4da");
    driverContactNoField.val("");
    $(driverContactNoField).css("border", "1px solid #ced4da");
    driverEmailField.val("");
    $(driverEmailField).css("border", "1px solid #ced4da");
    driverPasswordField.val("");
    $(driverPasswordField).css("border", "1px solid #ced4da");
    driverAddressField.val("");
    $(driverAddressField).css("border", "1px solid #ced4da");
    licenseFileInDriver.val("");
    $(licenseFileInDriver).css("border", "1px solid #ced4da");
    nicFileInDriver.val("");
    $(nicFileInDriver).css("border", "1px solid #ced4da");
}

function searchDriverByUsername() {
    let driver = undefined;
    $.ajax({
        url: baseUrl + "driver/searchDriverByUsername?userName=" + userNameLoginId.val(),
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                driver = resp.data;
            }
        }
    })
    return driver;
}


function setDriverScheduleToTable() {
    let driver = searchDriverByUsername();
    $.ajax({
        url: baseUrl + "bookingCarController/getDriverSchedule?nic=" + driver.nic,
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let tbody = $('#driverScheduleTable').children('tbody');
                $(tbody).empty();
                let data = resp.data;
                for (let i = 0; i < data.length; i++) {
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                    <td>` + data[i].nic + `</td>
                                    <td>` + data[i].name + `</td>
                                    <td>` + data[i].boId + `</td>
                                    <td>` + data[i].availableStatus + `</td>
                                    <td>` + data[i].pickupDate + `</td>
                                    <td>` + data[i].pickupTime + `</td>
                                    <td>` + data[i].returnedDate + `</td>
                                    <td>` + data[i].returnedTime + `</td>
                                </tr>`;

                    $(tbody).append(row);
                }
            }
        }
    })
}

function setDriverAccountDetailsToTable() {
    let driver = searchDriverByUsername();
    console.log(driver);
    let tbody = $('#driverAccountTable tbody');
    $(tbody).empty();
    let row = `<tr>
                    <td>` + (1) + `</td>
                    <td>` + driver.nic + `</td>
                    <td>` + driver.name + `</td>
                    <td>` + driver.licenseNo + `</td>
                    <td>` + driver.contactNo + `</td>
                    <td>` + driver.address + `</td>
                    <td>` + driver.availableStatus + `</td>
                    <td>` + driver.email + `</td>
                    <td>` + driver.password + `</td>
                    <td><img src="${baseUrl + "/" + driver.nicPhoto}" width="100px"></td>
                    <td><img src="${baseUrl + "/" + driver.licensePhoto}" width="100px"></td>
               </tr>`
    $(tbody).append(row);
}

function searchDriverDetails() {
    let driver = undefined;
    console.log(driverNicField.val());
    $.ajax({
        url: baseUrl + "driver/search?nic=" + driverNicField.val(),
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                driver = resp.data;
            }
        }
    })
    return driver;
}