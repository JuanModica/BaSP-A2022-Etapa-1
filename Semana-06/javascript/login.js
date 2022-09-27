window.onload = function () {
  var backArrow = document.getElementById("backHome");
  backArrow.onclick = function () {
    backHome.setAttribute("href", "../views/index.html");
  };

  // Get email, password and button
  var emailValidation = document.getElementById("email");
  var passwordValidation = document.getElementById("password");
  var submitButton = document.getElementById("submitButton");

  // Email required
  var emailRequired = document.createElement("P");
  emailRequired.innerHTML = "Required email.";
  emailRequired.classList.add("redP");

  // Password required
  var passwordRequired = document.createElement("P");
  passwordRequired.innerHTML = "Required password.";
  passwordRequired.classList.add("redP");

  //Email invalid
  var emailWrongRegex = document.createElement("P");
  emailWrongRegex.innerHTML = "Invalid email.";
  emailWrongRegex.classList.add("redP");

  // Password invalid
  var passwordWrong = document.createElement("P");
  passwordWrong.innerHTML = "Invalid password.";
  passwordWrong.classList.add("redP");

  // Valid has number
  function hasNumber(string) {
    var nums = "0123456789";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  // Valid has letters
  function hasLetter(string) {
    var nums = "abcdefghijkmnñlopqrstuvwxyz";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  emailValidation.onblur = function () {
    emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValidation.value)) {
      emailValidation.classList.add("green-border");
    } else if (
      !emailRegex.test(emailValidation.value) &&
      emailValidation.value.length > 0
    ) {
      emailValidation.classList.add("red-border");
      emailValidation.setAttribute("required", "");
      emailValidation.parentElement.appendChild(emailWrongRegex);
    } else {
      emailValidation.classList.add("red-border");
      emailValidation.setAttribute("required", "");
    }
  };

  emailValidation.onfocus = function () {
    emailValidation.classList.remove("green-border", "red-border");
    emailValidation.replaceChildren(emailRequired, emailWrongRegex);
  };

  passwordValidation.onblur = function () {
    if (passwordValidation.value.length >= 8) {
      passwordValidation.classList.add("green-border");
    } else if (
      (passwordValidation.value.length > 0 &&
        passwordValidation.value.length < 8) ||
      hasLetter(passwordValidation.value) == false ||
      hasNumber(passwordValidation.value) == false
    ) {
      passwordValidation.classList.add("red-border");
      passwordValidation.setAttribute("required", "");
      passwordValidation.parentElement.appendChild(passwordWrong);
    } else {
      passwordValidation.classList.add("red-border");
      passwordValidation.setAttribute("required", "");
    }
  };

  passwordValidation.onfocus = function () {
    passwordValidation.classList.remove("green-border", "red-border");
    passwordValidation.replaceChildren(passwordRequired, passwordWrong);
  };

  submitButton.onclick = function (e) {
    e.preventDefault();
    if (
      emailValidation.value.length == 0 &&
      passwordValidation.value.length == 0
    ) {
      emailValidation.parentElement.appendChild(emailRequired);
      passwordValidation.parentElement.appendChild(passwordRequired);
      alert("Required fields.");
    } else if (
      !emailRegex.test(emailValidation.value) &&
      emailValidation.value.length > 0 &&
      passwordValidation.value.length > 0 &&
      passwordValidation.value.length < 8
    ) {
      alert("Invalid fields.");
    } else if (
      emailValidation.value.length == 0 &&
      passwordValidation.value.length > 0 &&
      passwordValidation.value.length < 8
    ) {
      emailValidation.parentElement.appendChild(emailRequired);
      alert("Required email and invalid password.");
    } else if (
      !emailRegex.test(emailValidation.value) &&
      emailValidation.value.length > 0 &&
      passwordValidation.value.length == 0
    ) {
      passwordValidation.parentElement.appendChild(passwordRequired);
      alert("Invalid email and required password.");
    } else {
      alert(
        "Email: " +
          emailValidation.value +
          " Password: " +
          passwordValidation.value
      );
    }
  };
};
