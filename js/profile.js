// في js/profile.js
if (window.localStorage.userIsLoggedIn === "true") {
    document.querySelector(".profileContent").innerHTML = `
        <div class="mainContainer">
            <div class="profileContainer">
                <div class="profileLogo">
                    <img src="img/profile-logo.png" alt="Profile">
                </div>
                <h2>${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}</h2>
                <p><strong>Email:</strong> ${localStorage.getItem("email")}</p>
                <p><strong>Phone:</strong> ${localStorage.getItem("phoneNumber")}</p>
                <p><strong>Birth Date:</strong> ${localStorage.getItem("birthDate")}</p>
                <button onclick="logout()">Log Out</button>
            </div>
        </div>
    `
    ;
} else {
    document.querySelector(".profileContent").innerHTML = `
        <div class="mainContainer">
            <div class="profileContainer">
                <div class="profileLogo">
                    <img src="img/profile-logo.png" alt="">
                </div>
                <p>Log in or create an account to access your profile.</p>
                <div class="profileBtn">
                    <a href="login.html">Log In</a>
                    <a href="signup.html">Sign Up</a>
                </div>
            </div>
        </div>
    `;
}
function logout() {
    localStorage.setItem("userIsLoggedIn", "false");
    location.reload();
}
