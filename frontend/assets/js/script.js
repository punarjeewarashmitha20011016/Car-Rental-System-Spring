var headerNav = $('#headerNav');
var signupBtn =$('#signupBtn');
var loginBtn =$("#loginBtn");
var signupBtnInLogin =$("#signupBtnInLogin");
var logoutBtn =$('#logoutBtn');
var homeSection = $('#homeSection');
var loginSection = $('#loginSection');
var customerSection = $('#customerSection');
var logoutBtnInCustomerForm = $('#logoutBtnInCustomerForm');
var adminSection = $('#adminSection');

// $(document).ready(function(){
//     console.log('window');
//     $(headerNav).css('display','block');
//     $(homeSection).css('display','block');
//     $(customerSection).css('display','none');
//     $(loginSection).css('display','none');
//     $(adminSection).css('display','none');
// })
// $(document).on('ready', function(){
//     console.log('window');
//     $(headerNav).css('display','block');
//     $(homeSection).css('display','block');
//     $(customerSection).css('display','none');
//     $(loginSection).css('display','none');
//     $(adminSection).css('display','none');
// });

$(loginBtn).click(function(){
    $(headerNav).css('display','block');
    $(homeSection).css('display','flex');
    $(customerSection).css('display','none');
    $(loginSection).css('display','none');
    $(adminSection).css('display','none');
})

$(signupBtnInLogin).click(function(){
    // $(headerNav).css('display','none');
    // $(homeSection).css('display','none');
    // $(customerSection).css('display','block');
    // $(loginSection).css('display','none');
    $(adminSection).css('display','flex');
    $(headerNav).css('display','block');
    $(homeSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','none');
})

$(logoutBtn).click(function(){
    $(headerNav).css('display','none');
    $(homeSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','block');
    $(adminSection).css('display','none');
})

$(signupBtn).click(function(){
    $(headerNav).css('display','none');
    $(homeSection).css('display','none');
    $(customerSection).css('display','flex');
    $(loginSection).css('display','none');
    $(adminSection).css('display','none');
})

$(logoutBtnInCustomerForm).click(function(){
    $(headerNav).css('display','none');
    $(homeSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','block');
    $(adminSection).css('display','none');
})