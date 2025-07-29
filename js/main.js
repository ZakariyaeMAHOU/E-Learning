// show sidebar 
let sidebar = document.querySelector('.icon');
let moveSpanOne = document.querySelector('.icon span:nth-child(2)');
let moveSpanTwo = document.querySelector('.icon span:nth-child(3)');
let ulStyle = document.querySelector('.icon+ul');
sidebar.addEventListener('click', function (e){
    e.stopPropagation();
    showSidebar();
});
function showSidebar() {
    moveSpanOne.classList.add('moveSpan');
    moveSpanTwo.classList.add('moveSpan');
    ulStyle.classList.add('ulStyle');
}
document.addEventListener('click', hideSidebar);
function hideSidebar() {
    moveSpanOne.classList.remove('moveSpan');
    moveSpanTwo.classList.remove('moveSpan');
    ulStyle.classList.remove('ulStyle');
}

// check log in 
// let profileLink = document.querySelector('[href="profile.html"]');
// let userIsLoggedIn
// // console.log(profileLink)
// profileLink.addEventListener('click', function () {
//     if (checkFirstName() || checkLasttName() || checkDateOfBirth() || checkPhoneNumber() || checkEmail() || checkPassword() || checkConfirmPassword())
//         userIsLoggedIn === true;
//     else
//         userIsLoggedIn === false;
// })
// if (checkFirstName() || checkLasttName() || checkDateOfBirth() || checkPhoneNumber() || checkEmail() || checkPassword() || checkConfirmPassword()) {
//     console.log("login")
// } else {
//     console.log("no log in")
// }

