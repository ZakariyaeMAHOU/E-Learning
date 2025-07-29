//Date
    // date Update 
    const today = new Date();
    const thisDay = today.getDate();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();
    //add Years to select
    let years = document.querySelector("#years");
    const startYear = 1950;
    for(let i = startYear; i <= thisYear; i++) {
        let option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        years.appendChild(option)
    }
    // set today date
    document.querySelector("#days").value = thisDay;
    document.querySelector("#months").value = thisMonth;
    document.querySelector("#years").value = thisYear;
//Check fields
    // check first name
    let firstName = document.querySelector("#firstName");
        // Error message display elements
        let errMsgFirstName = document.querySelector("#firstName+.checkInputs");
        let firstChildFN = errMsgFirstName.firstElementChild;
        let lastChildFN = errMsgFirstName.lastElementChild;
    firstName.addEventListener('blur', checkFirstName);
    function checkFirstName() {
        if(firstName.value.trim() === ""){
            firstName.style.border = "2px solid red";
            firstChildFN.classList.add("emptyField");
            firstChildFN.textContent = "*";
            firstChildFN.style.color = "red";
            lastChildFN.textContent = "Enter your First Name!";
            return false;
        } else if(firstName.value.trim().length <= 2) {
            firstName.style.border = "2px solid red";
            firstChildFN.classList.add("emptyField");
            firstChildFN.textContent = "X";
            firstChildFN.style.color = "red";
            lastChildFN.textContent = "The name is too short";
            return false;
        } else {
            firstName.style.border = "2px solid rgb(116, 0, 148)";
            firstChildFN.textContent = "";
            return true;
        }
    }
    // check last name
    let lastName = document.querySelector("#lastName");
        // Error message display elements
        let errMsgLastName = document.querySelector("#lastName+.checkInputs");
        let firstChildLN = errMsgLastName.firstElementChild;
        let lastChildLN = errMsgLastName.lastElementChild;
    lastName.addEventListener('blur', checkLasttName);
    function checkLasttName() {
        if(lastName.value.trim() === ""){
            lastName.style.border = "2px solid red";
            firstChildLN.classList.add("emptyField");
            firstChildLN.textContent = "*";
            firstChildLN.style.color = "red";
            lastChildLN.textContent = "Enter your Last Name!";
            return false;
        } else if(lastName.value.trim().length <= 2) {
            lastName.style.border = "2px solid red";
            firstChildLN.classList.add("emptyField");
            firstChildLN.textContent = "X";
            firstChildLN.style.color = "red";
            lastChildLN.textContent = "The name is too short";
            return false;
        } else {
            lastName.style.border = "2px solid rgb(116, 0, 148)";
            firstChildLN.textContent = "";
            return true;
        }
    }
    // check birth day 
    let day = document.querySelector('#days');
    let month = document.querySelector('#months');
    let year = document.querySelector('#years');
    let maxDayOfMonth;
        // Error message display elements
        let errMsgBirthDate = document.querySelector(".select+.checkInputs");
        let firstChildBD = errMsgBirthDate.firstElementChild;
        let lastChildLBD = errMsgBirthDate.lastElementChild;
    day.addEventListener('change', checkDateOfBirth);
    month.addEventListener('change', checkDateOfBirth);
    year.addEventListener('change', checkDateOfBirth);
    function checkDateOfBirth() {
        // verificat mox day of month
            if (+month.value === 4 || +month.value === 6 || +month.value === 9 || +month.value === 11)
                maxDayOfMonth = 30;
            else if (+month.value === 2 && +year.value % 4 === 1)
                maxDayOfMonth = 28;
            else if (+month.value === 2 && +year.value % 4 === 0)
                maxDayOfMonth = 29;
            else
                maxDayOfMonth = 31;
            let birthDate = new Date(+year.value, +month.value - 1, +day.value);
            let yearsOfUser = thisYear - birthDate.getFullYear();
            let monthsOfUser = thisMonth - birthDate.getMonth();
            let daysOfUser = thisDay - birthDate.getDate();
        if (monthsOfUser < 0 || (monthsOfUser === 0 && daysOfUser < 0)) {
            yearsOfUser--;
        }
        if (yearsOfUser < 18) {
            firstChildBD.classList.add("emptyField");
            firstChildBD.textContent = "*";
            firstChildBD.style.color = "red";
            lastChildLBD.textContent = "Age must be 18 or older.";
            return false;
        }
        else if (maxDayOfMonth < +day.value) {
            firstChildBD.classList.add("emptyField");
            firstChildBD.textContent = "X";
            firstChildBD.style.color = "red";
            lastChildLBD.textContent = "The date is invalid.";
            day.style.border = "2px solid red";
            return false;
        }
        else {
            firstChildBD.textContent = "";
            day.style.border = "2px solid rgb(116, 0, 148)";
            return true;
        }
    }
    // check phone number 
    let countryCode = document.querySelector(".slectInput>select>option");
    let phoneNumber = document.querySelector('#phoneNumber');
        // Error message display elements
        let errMsgPhoneNumber = document.querySelector(".slectInput+.checkInputs");
        let firstChildPN = errMsgPhoneNumber.firstElementChild;
        let lastChildLPN = errMsgPhoneNumber.lastElementChild;
    phoneNumber.addEventListener('blur', checkPhoneNumber);
    function checkPhoneNumber () {
        let phoneNumberValue = phoneNumber.value.trim().replace(/\s+/g, '');
        let phoneNumberForm = /^(6|7)\d{2}-?\d{6}$/;
        if (phoneNumberValue === "") {
            firstChildPN.classList.add("emptyField");
            firstChildPN.textContent = "*";
            firstChildPN.style.color = "red";
            lastChildLPN.textContent = "Enter your Phone Number!";
            phoneNumber.style.border = "2px solid red";
            return false;
        }
        // else if ((phoneNumberValue[0] !== "6" && phoneNumberValue[0] !== "7") || 
        //         (phoneNumberValue.length !== 10) || 
        //         (phoneNumberValue.includes(" ")) || 
        //         (phoneNumberValue[3] !== "-") || 
        //         (!Number.isInteger(+phoneNumberValue.slice(0,3))) || 
        //         (!Number.isInteger(+phoneNumberValue.slice(4,10)))) {
        else if (!phoneNumberForm.test(phoneNumberValue)) {
            firstChildPN.classList.add("emptyField");
            firstChildPN.textContent = "X";
            firstChildPN.style.color = "red";
            lastChildLPN.textContent = "The phone number is invalid.";
            phoneNumber.style.border = "2px solid red";
            return false;
        } else {
            firstChildPN.textContent = "";
            phoneNumber.style.border = "2px solid rgb(116, 0, 148)";
            return true;
        }
    }
    
    // check email
    let email = document.querySelector('#email');
        // Error message display elements
        let errMsgEmail = document.querySelector("#email+.checkInputs");
        let firstChildE = errMsgEmail.firstElementChild;
        let lastChildLE = errMsgEmail.lastElementChild;
    email.addEventListener('blur', checkEmail);
    function checkEmail () {
        let emailValue = email.value.trim().replace(/\s+/g, '');
        let emailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === "") {
            firstChildE.classList.add("emptyField");
            firstChildE.textContent = "*";
            firstChildE.style.color = "red";
            lastChildLE.textContent = "Enter your Email!";
            email.style.border = "2px solid red";
            return false;
        } else if (!emailForm.test(emailValue)) {
            firstChildE.classList.add("emptyField");
            firstChildE.textContent = "X";
            firstChildE.style.color = "red";
            lastChildLE.textContent = "The Email is invalid.";
            email.style.border = "2px solid red";
            return false;
        } else {
            firstChildE.textContent = "";
            email.style.border = "2px solid rgb(116, 0, 148)";
            return true;
        }
    }
    
    // check password
    let password = document.querySelector('#password');
        // Error message display elements
        let errMsgPassword = document.querySelector("#password+.checkInputs");
        let firstChildP = errMsgPassword.firstElementChild;
        let lastChildLP = errMsgPassword.lastElementChild;
    password.addEventListener('blur', checkPassword);
    function checkPassword () {
        let passwordValue = password.value.trim();
        let passwordForm = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/;
        if (passwordValue === "") {
            firstChildP.classList.add("emptyField");
            firstChildP.textContent = "*";
            firstChildP.style.color = "red";
            lastChildLP.textContent = "Create your Password!";
            password.style.border = "2px solid red";
            return false;
        } else if (!passwordForm.test(passwordValue)) {
            firstChildP.classList.add("emptyField");
            firstChildP.textContent = "X";
            firstChildP.style.color = "red";
            lastChildLP.textContent = "The password must contain at least 8 characters, including letters and numbers.";
            password.style.border = "2px solid red";
            return false;
        } else {
            firstChildP.textContent = "";
            password.style.border = "2px solid rgb(116, 0, 148)";
            return true;
        }
    }

    // confirm password
    let confirmPassword = document.querySelector('#confirmPassword');
        // Error message display elements
        let errMsgConfirmPassword = document.querySelector("#confirmPassword+.checkInputs");
        let firstChildCP = errMsgConfirmPassword.firstElementChild;
        let lastChildLCP = errMsgConfirmPassword.lastElementChild;
    confirmPassword.addEventListener('blur', checkConfirmPassword);
    function checkConfirmPassword () {
        let confirmPasswordValue = confirmPassword.value.trim();
        let passwordValue = password.value.trim();
        if (confirmPasswordValue === "") {
            firstChildCP.classList.add("emptyField");
            firstChildCP.textContent = "*";
            firstChildCP.style.color = "red";
            lastChildLCP.textContent = "Confirm your Password!";
            confirmPassword.style.border = "2px solid red";
            return false;
        } else if (passwordValue !== confirmPasswordValue) {
            firstChildCP.classList.add("emptyField");
            firstChildCP.textContent = "X";
            firstChildCP.style.color = "red";
            lastChildLCP.textContent = "Password confirmation does not match.";
            confirmPassword.style.border = "2px solid red";
            return false;
        } else {
            firstChildCP.textContent = "";
            confirmPassword.style.border = "2px solid rgb(116, 0, 148)";
            return true;
        }
    }
    // stop send false or empty informations
    let errMsg = document.createElement("p");
errMsg.textContent = "Check fields.";
    document.querySelector('form').addEventListener('submit', checkInformation);
    function checkInformation(e) {
            e.preventDefault();
        if (!checkFirstName() || !checkLasttName() || !checkDateOfBirth() || !checkPhoneNumber() || !checkEmail() || !checkPassword() || !checkConfirmPassword()) {
            document.querySelector('form>.container>.errorMsg').appendChild(errMsg);
            errMsg.style.color = "red";
        } else {
            window.localStorage.setItem("firstName", `${firstName.value.trim()}`);
            window.localStorage.setItem("lastName", `${lastName.value.trim()}`);
            window.localStorage.setItem("birthDate", `${day.value}-${month.value}-${year.value}`);
            window.localStorage.setItem("phoneNumber", `${countryCode.value} ${phoneNumber.value}`);
            window.localStorage.setItem("email", `${email.value.trim()}`);
            window.localStorage.setItem("password", `${password.value.trim()}`);
            window.location.href = "login.html";
        }
    }

// Confirm before exit
// window.addEventListener("beforeunload", function(e) {
//     if (checkFirstName() || checkLasttName() || checkDateOfBirth() || checkPhoneNumber() || checkEmail() || checkPassword() || checkConfirmPassword())
//         e.preventDefault();
// })
