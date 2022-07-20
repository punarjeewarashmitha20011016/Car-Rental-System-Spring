var headerNav = $('#headerNav');
var signupBtn =$('#signupBtn');
var loginBtn =$("#loginBtn");
var signupBtnInLogin =$("#signupBtnInLogin");
var logoutBtn =$('#logoutBtn');
var homeSection = $('#homeSection');
var loginSection = $('#loginSection');
var customerSection = $('#customerSection');
var logoutBtnInCustomerForm = $('#logoutBtnInCustomerForm');

$(document).ready(function(){
    $(headerNav).css('display','block');
    $(homeSection).css('display','block');
    $(customerSection).css('display','none');
    $(loginSection).css('display','none');
})

$(loginBtn).click(function(){
    $(headerNav).css('display','block');
    $(homeSection).css('display','block');
    $(customerSection).css('display','none');
    $(loginSection).css('display','none');
})

$(signupBtnInLogin).click(function(){
    $(headerNav).css('display','none');
    $(homeSection).css('display','none');
    $(customerSection).css('display','block');
    $(loginSection).css('display','none');
})

$(logoutBtn).click(function(){
    $(headerNav).css('display','none');
    $(homeSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','block');
})

$(signupBtn).click(function(){
    $(headerNav).css('display','none');
    $(homeSection).css('display','none');
    $(customerSection).css('display','block');
    $(loginSection).css('display','none');
})

$(logoutBtnInCustomerForm).click(function(){
    $(headerNav).css('display','none');
    $(homeSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','block');
})