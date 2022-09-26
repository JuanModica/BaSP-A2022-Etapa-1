window.onload = function () {
  var backArrow = document.getElementById("backHome");
  backArrow.onclick = function () {
    backHome.setAttribute("href", "../views/index.html");
  };

  var divInputs = document.getElementsByClassName("login-inputs");

  // Get email y password
  var emailValidation = document.getElementById("email");
  var passwordValidation = document.getElementById("password");

  // Parágrafo de error
  var emailRequired = document.createElement("P");
  emailRequired.innerHTML = "Email requerido.";
  emailRequired.classList.add("redP");

  // Parágrafo de error
  var passwordRequired = document.createElement("P");
  passwordRequired.innerHTML = "Password requerido.";
  passwordRequired.classList.add("redP");

  //Email invalido
  var emailWrongRegex = document.createElement("P");
  emailWrongRegex.innerHTML = "Email invalido.";
  emailWrongRegex.classList.add("redP");

  // Password invalido
  var passwordWrong = document.createElement("P");
  passwordWrong.innerHTML = "Password invalido.";
  passwordWrong.classList.add("redP");

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
      passwordValidation.value.length > 0 &&
      passwordValidation.value.length < 8
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
    passwordValidation.replaceChildren(passwordRequired, passwordWrong)
  };

  var submitButton = document.getElementById("submitButton");
  submitButton.onclick = function (e) {
    e.preventDefault();
    if (
      emailValidation.value.length == 0 &&
      passwordValidation.value.length == 0
    ) {
      emailValidation.parentElement.appendChild(emailRequired);
      passwordValidation.parentElement.appendChild(passwordRequired);
      alert("Campos requeridos.");
    } else if ((!emailRegex.test(emailValidation.value) &&
    emailValidation.value.length > 0) && (passwordValidation.value.length > 0 &&
      passwordValidation.value.length < 8)){
      alert("Campos mal puestos.");
    } else if (emailValidation.value.length == 0 && (passwordValidation.value.length > 0 &&
      passwordValidation.value.length < 8)){
        emailValidation.parentElement.appendChild(emailRequired);
        alert("Email requido y password invalido.");
      } else if ((!emailRegex.test(emailValidation.value) &&
      emailValidation.value.length > 0) && passwordValidation.value.length == 0) {
        passwordValidation.parentElement.appendChild(passwordRequired);
        alert("Email invalido y password requerido.");
      } else {
        alert("Email: " + emailValidation.value + " Password: " + passwordValidation.value);
      };
  };
};
