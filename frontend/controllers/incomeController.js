var incomeTableInIncome = $("#incomeTableInIncome");
var dailyIncomeHTag = $("#dailyIncomeHTag");
var monthlyIncomeHTag = $("#monthlyIncomeHTag");
var annualIncomeHTag = $("#annualIncomeHTag");

function setDataToIncomeTable() {
    $.ajax({
        url: baseUrl + "bookingCarController/getAll",
        method: "GET",
        success: function (resp) {
            if (resp.status == 200) {
                let data = resp.data;
                let tbody = $(incomeTableInIncome).children("tbody");
                $(tbody).empty();
                for (let i = 0; i < data.length; i++) {
                    let paymentData = data[i].payments;
                    let row = `<tr>
                                    <td>` + (i + 1) + `</td>
                                    <td>` + paymentData.paymentId + `</td>
                                    <td>` + paymentData.cusNic + `</td>
                                    <td>` + data[i].boId + `</td>
                                    <td>` + paymentData.dateOfPayment + `</td>
                                    <td>` + paymentData.timeOfPayment + `</td>
                                    <td>` + paymentData.lossDamageWaiver + `</td>
                                    <td>` + paymentData.lossDamageWaiverPaymentSlip + `</td>
                                    <td>` + paymentData.cost + `</td>
                                </tr>`

                    $(tbody).append(row);
                }
            }
        }
    })
}


function getDailyIncome() {
    $.ajax({
        url: baseUrl + "bookingCarController/getDailyIncome",
        method: "GET",
        async: false,
        success: function (resp) {
            console.log(resp.data);
            $(dailyIncomeHTag).text(resp.data);
        }
    })
}

function getMonthlyIncome() {
    $.ajax({
        url: baseUrl + "bookingCarController/getMonthlyIncome",
        method: "GET",
        async: false,
        success: function (resp) {
            console.log(resp.data);
            $(monthlyIncomeHTag).text(resp.data);
        }
    })
}

function getAnnualIncome() {
    $.ajax({
        url: baseUrl + "bookingCarController/getAnnualIncome",
        method: "GET",
        async: false,
        success: function (resp) {
            console.log(resp.data);
            $(annualIncomeHTag).text(resp.data);
        }
    })
}