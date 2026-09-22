// ==============================
// GET HTML ELEMENTS
// ==============================

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");

const password = document.getElementById("password");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const togglePassword =
document.getElementById("togglePassword");

// ==============================
// SHOW / HIDE PASSWORD
// ==============================

togglePassword.addEventListener("click", function () {

```
if (password.type === "password") {

    password.type = "text";

    togglePassword.textContent = "🙈";

} else {

    password.type = "password";

    togglePassword.textContent = "👁";

}
```

});

// ==============================
// LOGIN FORM VALIDATION
// ==============================

loginForm.addEventListener("submit", function (event) {

```
// Stop page refresh
event.preventDefault();

// Clear previous errors
emailError.textContent = "";
passwordError.textContent = "";

let valid = true;


// ==============================
// EMAIL VALIDATION
// ==============================

if (email.value.trim() === "") {

    emailError.textContent =
        "Please enter your email.";

    valid = false;

} else if (!validateEmail(email.value)) {

    emailError.textContent =
        "Please enter a valid email.";

    valid = false;
}


// ==============================
// PASSWORD VALIDATION
// ==============================

if (password.value.trim() === "") {

    passwordError.textContent =
        "Please enter your password.";

    valid = false;

} else if (password.value.length < 6) {

    passwordError.textContent =
        "Password must contain at least 6 characters.";

    valid = false;
}


// ==============================
// LOGIN SUCCESS
// ==============================

if (valid) {

    alert(
        "Login successful! Welcome back."
    );

    // In a real project,
    // send email/password to backend API here.
}
```

});

// ==============================
// EMAIL VALIDATION FUNCTION
// ==============================

function validateEmail(email) {

```
const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return pattern.test(email);
```

}

// ==============================
// FORGOT PASSWORD
// ==============================

document
.getElementById("forgotPassword")
.addEventListener("click", function (event) {

```
    event.preventDefault();

    alert(
        "Password reset feature will be available soon."
    );

});
```
