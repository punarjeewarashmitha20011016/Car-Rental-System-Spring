var cusNicField = $("#cusNicField");
var cusNicFieldPattern = /^(([0-9]{9}[Vv]{1})||([0-9]{12}))$/
var cusNameField = $("#cusNameField");
var cusNameFieldPattern = /^[A-z ]{4,}$/
var cusNicFile = $("#cusNicFile");

var cusLicenseFile = $("#cusLicenseFile");

var cusLicenseField = $("#cusLicenseField");
var cusLicenseFieldPattern = /^[B][0-9]{7}$/

var cusContactNoField = $("#cusContactNoField");
var cusContactNoFieldPattern = /^[0-9]{10}$/

var cusEmailField = $("#cusEmailField");
var cusEmailFieldPattern = /^[A-z0-9.]{5,30}[@][A-z]{3,7}[.](com|lk|uk|[a-z]){1,}$/

var cusPasswordField = $("#cusPasswordField");
var cusPasswordFieldPattern = /^[A-z.!@#$%&() ]{2,}$/;

var cusSaveBtnInCustomer = $("#cusSaveBtnInCustomer");
var cusUpdateBtnInCustomer = $("#cusUpdateBtnInCustomer");
var cusDeleteBtnInCustomer = $("#cusDeleteBtnInCustomer");

var cusInputsArr = [cusNicField, cusNameField, cusLicenseField, cusContactNoField, cusEmailField, cusPasswordField];

let baseUrlCustomer = "http://localhost:8080/BackEnd_war_exploded/";

$(cusNicField, cusNameField, cusNicFile, cusLicenseFile, cusLicenseField, cusContactNoField, cusEmailField, cusPasswordField).off('keydown');
$(cusNicField, cusNameField, cusNicFile, cusLicenseFile, cusLicenseField, cusContactNoField, cusEmailField, cusPasswordField).keydown(function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});
cusNicField.off('keyup');
cusNicField.keyup(function (e) {
    let index = 0;
    validate(cusNicFieldPattern, cusInputsArr, index, e, cusSaveBtnInCustomer, cusUpdateBtnInCustomer, cusDeleteBtnInCustomer)
})

cusNameField.off('keyup');
cusNameField.keyup(function (e) {
    let index = 1;
    validate(cusNameFieldPattern, cusInputsArr, index, e, cusSaveBtnInCustomer, cusUpdateBtnInCustomer, cusDeleteBtnInCustomer)
})

cusLicenseField.off('keyup');
cusLicenseField.keyup(function (e) {
    let index = 2;
    validate(cusLicenseFieldPattern, cusInputsArr, index, e, cusSaveBtnInCustomer, cusUpdateBtnInCustomer, cusDeleteBtnInCustomer)
})

cusContactNoField.off('keyup');
cusContactNoField.keyup(function (e) {
    let index = 3;
    validate(cusContactNoFieldPattern, cusInputsArr, index, e, cusSaveBtnInCustomer, cusUpdateBtnInCustomer, cusDeleteBtnInCustomer)
})

cusEmailField.off('keyup');
cusEmailField.keyup(function (e) {
    let index = 4;
    validate(cusEmailFieldPattern, cusInputsArr, index, e, cusSaveBtnInCustomer, cusUpdateBtnInCustomer, cusDeleteBtnInCustomer)
})

cusPasswordField.off('keyup');
cusPasswordField.keyup(function (e) {
    let index = 5;
    validate(cusPasswordFieldPattern, cusInputsArr, index, e, cusSaveBtnInCustomer, cusUpdateBtnInCustomer, cusDeleteBtnInCustomer)
})

$(cusSaveBtnInCustomer).off('click');
$(cusSaveBtnInCustomer).click(function () {
    console.log("Cus Save Btn")
    let data = new FormData();
    let dto = {
        nic: cusNicField.val(),
        name: cusNameField.val(),
        nicPhoto: "",
        licenseNo: cusLicenseField.val(),
        licensePhoto: "",
        contactNo: parseInt(cusContactNoField.val()),
        email: cusEmailField.val(),
        password: cusPasswordField.val()
    }
    let nicPhotoFile = $("#cusNicFile")[0].files[0];
    let nicPhotoFileName = $("#cusNicFile")[0].files[0].name;
    let licensePhotoFile = $("#cusLicenseFile")[0].files[0];
    let licensePhotoFileName = $("#cusLicenseFile")[0].files[0].name;
    data.append("nicPhoto", nicPhotoFile, nicPhotoFileName);
    data.append("licensePhoto", licensePhotoFile, licensePhotoFileName);
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));

    if (confirm('Do you want to save this customer') == true) {
        $.ajax({
            url: baseUrlCustomer + "customer",
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

$(cusUpdateBtnInCustomer).off('click');
$(cusUpdateBtnInCustomer).click(function () {
    console.log("Cus Update Btn")
    let data = new FormData();
    let dto = {
        nic: cusNicField.val(),
        name: cusNameField.val(),
        nicPhoto: "",
        licenseNo: cusLicenseField.val(),
        licensePhoto: "",
        contactNo: parseInt(cusContactNoField.val()),
        email: cusEmailField.val(),
        password: cusPasswordField.val()
    }
    let nicPhotoFile = $("#cusNicFile")[0].files[0];
    let nicPhotoFileName = $("#cusNicFile")[0].files[0].name;
    let licensePhotoFile = $("#cusLicenseFile")[0].files[0];
    let licensePhotoFileName = $("#cusLicenseFile")[0].files[0].name;
    data.append("nicPhoto", nicPhotoFile, nicPhotoFileName);
    data.append("licensePhoto", licensePhotoFile, licensePhotoFileName);
    data.append("dto", new Blob([JSON.stringify(dto)], {type: "application/json"}));

    if (confirm('Do you want to update this customer details') == true) {
        $.ajax({
            url: baseUrlCustomer + "customer",
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

$(cusDeleteBtnInCustomer).off('click');
$(cusDeleteBtnInCustomer).click(function () {
    if (confirm('Do you want to delete this customer') == true) {
        $.ajax({
            url: baseUrlCustomer + "customer?nic=" + cusNicField.val(),
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
    cusNicField.val("");
    cusNameField.val("");
    cusLicenseField.val("");
    cusLicenseFile.val("");
    cusNicFile.val("");
    cusContactNoField.val("");
    cusEmailField.val("");
    cusPasswordField.val("");
}