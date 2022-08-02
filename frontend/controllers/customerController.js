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
    if ((cusNicField.val().length == 10) || (cusNicField.val().length == 12)) {
        if (e.key == 'Shift' || e.keyCode == 16) {
            let customer = searchCustomer();
            cusNameField.val(customer.name)
            cusLicenseField.val(customer.licenseNo)
            cusContactNoField.val(0 + customer.contactNo)
            cusEmailField.val(customer.email);
            cusPasswordField.val(customer.password);
        } else if (e.key == 'backspace' || e.keyCode == 8) {
            clearAllCustomerFields();
        }
    }
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
            url: baseUrl + "customer",
            method: "POST",
            async: true,
            data: data,
            processData: false,
            contentType: false,
            success: function (resp) {
                clearAllCustomerFields();
                alert(resp.message)
            },
            error: function (ob) {
                clearAllCustomerFields();
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
            url: baseUrl + "customer",
            method: "PUT",
            async: true,
            data: data,
            processData: false,
            contentType: false,
            success: function (resp) {
                clearAllCustomerFields();
                alert(resp.message)
            },
            error: function (ob) {
                clearAllCustomerFields();
                alert(ob.message);
            }
        })
    }
})

$(cusDeleteBtnInCustomer).off('click');
$(cusDeleteBtnInCustomer).click(function () {
    if (confirm('Do you want to delete this customer') == true) {
        $.ajax({
            url: baseUrl + "customer?nic=" + cusNicField.val(),
            method: "DELETE",
            success: function (resp) {
                clearAllCustomerFields();
                alert(resp.message);
            },
            error: function (error) {
                clearAllCustomerFields();
                alert(error.message)
            }
        })
    }
})

function clearAllCustomerFields() {
    cusNicField.val("");
    $(cusNicField).css("border", "1px solid #ced4da");
    cusNameField.val("");
    $(cusNameField).css("border", "1px solid #ced4da");
    cusLicenseField.val("");
    $(cusLicenseField).css("border", "1px solid #ced4da");
    cusLicenseFile.val("");
    $(cusLicenseFile).css("border", "1px solid #ced4da");
    cusNicFile.val("");
    $(cusNicFile).css("border", "1px solid #ced4da");
    cusContactNoField.val("");
    $(cusContactNoField).css("border", "1px solid #ced4da");
    cusEmailField.val("");
    $(cusEmailField).css("border", "1px solid #ced4da");
    cusPasswordField.val("");
    $(cusPasswordField).css("border", "1px solid #ced4da");
}

function getAllCustomers() {
    $.ajax({
        url: baseUrl + "customer/getAll",
        method: "GET",
        success: function (resp) {
            if (resp.status = 200) {
                let data = resp.data;
                console.log(resp.data);
                let tbody = $("#customerDetailsTableContainer").children('table').children('tbody');
                $(tbody).empty();
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].nicPhoto);
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                     <td>` + data[i].nic + `</td>
                                     <td>` + data[i].name + `</td>
                                     <td>` + data[i].licenseNo + `</td>
                                     <td>` + data[i].contactNo + `</td>
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

function searchCustomerForAccountTableDataLoading() {
    let customer = searchCustomerByEmail();
    cusNicInPlacingBookingRequest.val(customer.nic);
    let table = $("#customerAccountDetailsTable > tbody");
    $(table).empty();
    let row = `<tr>
                        <td>` + 1 + `</td>
                        <td>` + customer.nic + `</td>
                        <td>` + customer.name + `</td>
                        <td>` + customer.licenseNo + `</td>
                        <td>` + customer.contactNo + `</td>
                        <td>` + customer.email + `</td>
                        <td>` + customer.password + `</td>
                        <td><img src="${baseUrl + "/" + customer.nicPhoto}" width="100px"></td>
                        <td><img src="${baseUrl + "/" + customer.licensePhoto}" width="100px"></td>
                       </tr>`
    $(table).append(row);
}

function searchCustomer() {
    let customer = undefined;
    $.ajax({
        url: baseUrl + "customer/search?nic=" + cusNicField.val(),
        method: "GET",
        async: false,
        success: function (resp) {
            if (resp.status == 200) {
                customer = resp.data;
            }
        },
        error: function (error) {
            alert(error.message);
        }
    })
    return customer;
}

function searchCustomerByEmail() {
    let customer = undefined;
    $.ajax({
        url: baseUrl + "customer/searchCustomerByEmailAndPassword?email=" + userNameLoginId.val() + "&password=" + passwordLoginId.val(),
        method: "GET",
        async: false,
        success: function (resp) {
            customer = resp.data;
        },
        error: function (error) {
            alert(error.message);
        }
    })
    return customer;
}