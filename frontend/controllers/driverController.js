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
var driverAvailableStatusField = $("#driverAvailableStatusField");
var driverAvailableStatusFieldPattern = /^(Available||Not Available)$/
var driverAddressField = $("#driverAddressField");
var driverAddressFieldPattern = /^[A-z0-9,.  ]*[/]?[0-9]*[ ]?[A-z,. ]*/
var nicFileInDriver = $("#nicFileInDriver");
var licenseFileInDriver = $("#licenseFileInDriver");
var driverViewAllTableContainer = $("#driverViewAllTableContainer");

var driverSaveBtn = $("#driverSaveBtn");
var driverUpdateBtn = $("#driverUpdateBtn");
var driverDeleteBtn = $("#driverDeleteBtn");
var driverViewAllBtn = $("#driverViewAllBtn");

var driverInputsArr = [driverNicField, driverNameField, driverLicenseField, driverContactNoField, driverEmailField, driverPasswordField, driverAvailableStatusField, driverAddressField];

let baseUrlDriver = "http://localhost:8080/BackEnd_war_exploded/";

$(driverNicField, driverNameField, driverLicenseField, driverContactNoField, driverEmailField, driverPasswordField, driverAvailableStatusField, driverAddressField).off('keydown');
$(driverNicField, driverNameField, driverLicenseField, driverContactNoField, driverEmailField, driverPasswordField, driverAvailableStatusField, driverAddressField).keydown(function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});
driverNicField.off('keyup');
driverNicField.keyup(function (e) {
    let index = 0;
    validate(driverNicFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
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
driverAvailableStatusField.off('keyup');
driverAvailableStatusField.keyup(function (e) {
    let index = 6;
    validate(driverAvailableStatusFieldPattern, driverInputsArr, index, e, driverSaveBtn, driverUpdateBtn, driverDeleteBtn)
})
driverAddressField.off('keyup');
driverAddressField.keyup(function (e) {
    let index = 7;
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
        availableStatus: driverAvailableStatusField.val(),
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
            url: baseUrlDriver + "driver",
            method: "POST",
            async: true,
            data: data,
            processData: false,
            contentType: false,
            success: function (resp) {
                clearAllFields();
                alert(resp.message)
            },
            error: function (ob) {
                clearAllFields();
                alert(ob.message);
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
        availableStatus: driverAvailableStatusField.val(),
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
            url: baseUrlDriver + "driver",
            method: "PUT",
            async: true,
            data: data,
            processData: false,
            contentType: false,
            success: function (resp) {
                clearAllFields();
                alert(resp.message)
            },
            error: function (ob) {
                clearAllFields();
                alert(ob.message);
            }
        })
    }
})

$(driverDeleteBtn).off('click');
$(driverDeleteBtn).click(function () {
    if (confirm('Do you want to delete this driver') == true) {
        $.ajax({
            url: baseUrlDriver + "driver?nic=" + driverNicField.val(),
            method: "DELETE",
            success: function (resp) {
                clearAllFields();
                alert(resp.message);
            },
            error: function (error) {
                clearAllFields();
                alert(error.message)
            }
        })
    }
})

function clearAllFields() {
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
    driverAvailableStatusField.val("");
    $(driverAvailableStatusField).css("border", "1px solid #ced4da");
    licenseFileInDriver.val("");
    $(licenseFileInDriver).css("border", "1px solid #ced4da");
    nicFileInDriver.val("");
    $(nicFileInDriver).css("border", "1px solid #ced4da");
}