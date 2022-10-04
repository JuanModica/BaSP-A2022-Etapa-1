window.onload = function () {
  var backArrow = document.getElementById("backHome");
  backArrow.onclick = function () {
    backHome.setAttribute("href", "../views/index.html");
  };

  var emailValidation = document.getElementById("email");
  var passwordValidation = document.getElementById("password");
  var submitButton = document.getElementById("submitButton");

  var emailRequired = document.createElement("P");
  emailRequired.innerHTML = "Required email.";
  emailRequired.classList.add("redP");

  var passwordRequired = document.createElement("P");
  passwordRequired.innerHTML = "Required password.";
  passwordRequired.classList.add("redP");

  var emailWrongRegex = document.createElement("P");
  emailWrongRegex.innerHTML = "Invalid email.";
  emailWrongRegex.classList.add("redP");

  var passwordWrong = document.createElement("P");
  passwordWrong.innerHTML = "Invalid password.";
  passwordWrong.classList.add("redP");

  function hasNumber(string) {
    var nums = "0123456789";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

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
    if (
      passwordValidation.value.length >= 8 &&
      hasLetter(passwordValidation.value) == true &&
      hasNumber(passwordValidation.value) == true
    ) {
      passwordValidation.classList.add("green-border");
    } else if (
      passwordValidation.value.length > 0 &&
      (hasLetter(passwordValidation.value) == false ||
        hasNumber(passwordValidation.value) == false)
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

  function loginValidate() {
    if (
      emailValidation.value.length == 0 &&
      passwordValidation.value.length == 0
    ) {
      emailValidation.parentElement.appendChild(emailRequired);
      emailValidation.classList.add("red-border");
      emailValidation.setAttribute("required", "");
      passwordValidation.parentElement.appendChild(passwordRequired);
      passwordValidation.classList.add("red-border");
      passwordValidation.setAttribute("required", "");
    } else if (
      emailValidation.value.length > 0 &&
      emailValidation.value != emailOk &&
      passwordValidation.value.length > 0 &&
      passwordValidation.value != passwordOk
    ) {
      emailValidation.parentElement.appendChild(emailWrongRegex);
      emailValidation.classList.add("red-border");
      emailValidation.setAttribute("required", "");
      passwordValidation.parentElement.appendChild(passwordWrong);
      passwordValidation.classList.add("red-border");
      passwordValidation.setAttribute("required", "");
    } else if (
      emailValidation.value.length > 0 &&
      emailValidation.value != emailOk &&
      passwordValidation.value == passwordOk
    ) {
      emailValidation.parentElement.appendChild(emailWrongRegex);
      emailValidation.classList.add("red-border");
      emailValidation.setAttribute("required", "");
    } else if (
      emailValidation.value == emailOk &&
      passwordValidation.value.length > 0 &&
      passwordValidation.value != passwordOk
    ) {
      passwordValidation.parentElement.appendChild(passwordWrong);
      passwordValidation.classList.add("red-border");
      passwordValidation.setAttribute("required", "");
    }
  }

  submitButton.onclick = function (e) {
    e.preventDefault();
    var url =
      "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" +
      emailValidation.value +
      "&password=" +
      passwordValidation.value;
    emailOk = "rose@radiumrocket.com";
    passwordOk = "BaSP2022";
    loginValidate();
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert(
            "Request successful:\n" +
              data.msg +
              "\nEmail: " +
              emailValidation.value +
              "\nPassword: " +
              passwordValidation.value
          );
        } else {
          if (
            emailValidation.value != emailOk &&
            passwordValidation.value != passwordOk &&
            emailValidation.value.length > 0 &&
            passwordValidation.value.length > 0
          ) {
            alert(
              "Login error: " +
                data.msg +
                "\nEmail: " +
                emailValidation.value +
                "\nPassword: " +
                passwordValidation.value
            );
          } else if (
            emailValidation.value != emailOk &&
            passwordValidation.value == passwordOk &&
            emailValidation.value.length > 0
          ) {
            alert(
              "Login error: " + data.msg + "\nEmail: " + emailValidation.value
            );
          } else if (
            emailValidation.value == emailOk &&
            passwordValidation.value != passwordOk &&
            passwordValidation.value.length > 0
          ) {
            alert(
              "Login error: " +
                data.msg +
                "\nPassword: " +
                passwordValidation.value
            );
          } else if (
            emailValidation.value.length == 0 &&
            passwordValidation.value.length == 0
          ) {
            alert("Login error: " + data.msg + "\nErrors: Empty fields.");
          }
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };
};
