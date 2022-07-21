var signUpBtn = document.getElementById("signupBtn");
var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("mouseover", function (event) {
    signUpBtn.style.right = '150px';
}, false)

logoutBtn.addEventListener("mouseleave", function (event) {
    signUpBtn.style.right = '70px';
}, false)


//this.is for signup and logout btns in signup section
var logoutBtnInSignup = $('#logoutBtnInSignup');
var signupForAdmin = $('#signupForAdminBtn');

logoutBtnInSignup.mouseover(function () {
    signupForAdmin.css('right', '15%');
})

logoutBtnInSignup.mouseleave(function () {
    signupForAdmin.css('right', '10%');
})