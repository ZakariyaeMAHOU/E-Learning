// ckeck login
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errMsg = document.createElement("p");
let userIsLoggedIn;
errMsg.textContent = "The password or email is incorrect.";
document.querySelector('form').addEventListener('submit', checkLogin);
function checkLogin (e) {
        e.preventDefault();
    if (email.value.trim() === window.localStorage.email && password.value.trim() === window.localStorage.password) {
        window.location.href = "profile.html";
        window.localStorage.setItem("userIsLoggedIn", "true");
    } else {
        document.querySelector('form>.container>.errorMsg').appendChild(errMsg);
        errMsg.style.color = "red";
        email.style.border = "2px solid red";
        password.style.border = "2px solid red";
        window.localStorage.setItem("userIsLoggedIn", "false");
    }
}