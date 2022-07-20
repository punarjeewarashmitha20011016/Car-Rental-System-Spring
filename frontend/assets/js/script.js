var headerNav = $('#headerNav');
var navBarItems = $("#navBarItems");
var signupBtn =$('#signupBtn');
var loginBtn =$("#loginBtn");
var signupBtnInLogin =$("#signupBtnInLogin");
var logoutBtn =$('#logoutBtn');
var homeBtnSection = $('#homeBtnSection');
var loginSection = $('#loginSection');
var customerSection = $('#customerSection');
var logoutBtnInCustomerForm = $('#logoutBtnInCustomerForm');
var adminSection = $('#adminSection');
var userNameLoginId =$("#userNameLoginId");
var passwordLoginId = $("#passwordLoginId");

// $(document).ready(function(){
//     console.log('window');
//     $(headerNav).css('display','block');
//     $(homeBtnSection).css('display','block');
//     $(customerSection).css('display','none');
//     $(loginSection).css('display','none');
//     $(adminSection).css('display','none');
// })
// $(document).on('ready', function(){
//     console.log('window');
//     $(headerNav).css('display','block');
//     $(homeBtnSection).css('display','block');
//     $(customerSection).css('display','none');
//     $(loginSection).css('display','none');
//     $(adminSection).css('display','none');
// });

$(loginBtn).click(function(){
    if(userNameLoginId.val() == 'admin' && passwordLoginId.val() == 'admin'){
        let homeBtn = document.createElement("li");
        homeBtn.className='nav-nav-item d-flex flex-column align-items-center justify-content-center ms-2 me-2';
        let aforhomeBtn = document.createElement('a');
        aforhomeBtn.className='nav-link active';
        aforhomeBtn.ariaCurrent='page';
        aforhomeBtn.href="#";
        aforhomeBtn.innerHTML="Home";
        aforhomeBtn.className="text-black text-decoration-none";
        homeBtn.append(aforhomeBtn);


        let customerBtn = document.createElement("li");
        customerBtn.className='nav-nav-item d-flex flex-column align-items-center justify-content-center ms-2 me-2';
        let aforCustomerBtn = document.createElement('a');
        aforCustomerBtn.className='nav-link active';
        aforCustomerBtn.ariaCurrent='page';
        aforCustomerBtn.href="#";
        aforCustomerBtn.innerHTML="Customer";
        aforCustomerBtn.className="text-black text-decoration-none";
        customerBtn.append(aforCustomerBtn);

        let driverBtn = document.createElement("li");
        driverBtn.className='nav-nav-item d-flex flex-column align-items-center justify-content-center ms-2 me-2';
        let aforDriverBtn = document.createElement('a');
        aforDriverBtn.className='nav-link active';
        aforDriverBtn.ariaCurrent='page';
        aforDriverBtn.href="#";
        aforDriverBtn.innerHTML="Driver";
        aforDriverBtn.className="text-black text-decoration-none";
        driverBtn.append(aforDriverBtn);

        let carBtn = document.createElement("li");
        carBtn.className='nav-nav-item d-flex flex-column align-items-center justify-content-center ms-2 me-2';
        let aforCarBtn = document.createElement('a');
        aforCarBtn.className='nav-link active';
        aforCarBtn.ariaCurrent='page';
        aforCarBtn.href="#";
        aforCarBtn.innerHTML="Car";
        aforCarBtn.className="text-black text-decoration-none";
        carBtn.append(aforCarBtn);

        let incomeBtn = document.createElement("li");
        incomeBtn.className='nav-nav-item d-flex flex-column align-items-center justify-content-center ms-2 me-2';
        let aforIncomeBtn = document.createElement('a');
        aforIncomeBtn.className='nav-link active';
        aforIncomeBtn.ariaCurrent='page';
        aforIncomeBtn.href="#";
        aforIncomeBtn.innerHTML="Income";
        aforIncomeBtn.className="text-black text-decoration-none";
        incomeBtn.append(aforIncomeBtn);

        console.log('admin');
        $(navBarItems).children('div:nth-child(2)').children('ul').append(homeBtn);
        $(navBarItems).children('div:nth-child(2)').children('ul').append(carBtn);
        $(navBarItems).children('div:nth-child(2)').children('ul').append(customerBtn);
        $(navBarItems).children('div:nth-child(2)').children('ul').append(driverBtn);
        $(navBarItems).children('div:nth-child(2)').children('ul').append(incomeBtn);

        $(headerNav).css('display','block');
        $(homeBtnSection).css('display','none');
        $(customerSection).css('display','none');
        $(loginSection).css('display','none');
        $(adminSection).css('display','flex');
    }else{
        $(headerNav).css('display','block');
        $(homeBtnSection).css('display','flex');
        $(customerSection).css('display','none');
        $(loginSection).css('display','none');
        $(adminSection).css('display','none');
    }
})

$(signupBtnInLogin).click(function(){
    // $(headerNav).css('display','none');
    // $(homeBtnSection).css('display','none');
    // $(customerSection).css('display','block');
    // $(loginSection).css('display','none');
    $(adminSection).css('display','flex');
    $(headerNav).css('display','block');
    $(homeBtnSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','none');
})

$(logoutBtn).click(function(){
    $(headerNav).css('display','none');
    $(homeBtnSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','block');
    $(adminSection).css('display','none');
})

$(signupBtn).click(function(){
    $(headerNav).css('display','none');
    $(homeBtnSection).css('display','none');
    $(customerSection).css('display','flex');
    $(loginSection).css('display','none');
    $(adminSection).css('display','none');
})

$(logoutBtnInCustomerForm).click(function(){
    $(headerNav).css('display','none');
    $(homeBtnSection).css('display','none');
    $(customerSection).css('display','none');
    $(loginSection).css('display','block');
    $(adminSection).css('display','none');
})