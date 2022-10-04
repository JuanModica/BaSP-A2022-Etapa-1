window.onload = function () {
  var backArrow = document.getElementById("backHome");
  backArrow.onclick = function () {
    backHome.setAttribute("href", "../views/index.html");
  };

  var nameValidation = document.getElementById("name");
  var surnameValidation = document.getElementById("surname");
  var dniValidation = document.getElementById("dni");
  var birthdayValidation = document.getElementById("birthday");
  var phoneValidation = document.getElementById("phone");
  var addressValidation = document.getElementById("address");
  var locationValidation = document.getElementById("location");
  var postalCodeValidation = document.getElementById("postalCode");
  var emailValidation = document.getElementById("email");
  var passwordValidation = document.getElementById("password");
  var repeatPasswordValidation = document.getElementById("repeatPassword");
  var submitButton = document.getElementById("submitButton");

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
    var letters = "abcdefghijkmnñlopqrstuvwxyz";
    for (var i = 0; i < string.length; i++) {
      if (letters.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function blankSpace(value) {
    var space = " ";
    for (var i = 0; i < value.length; i++) {
      if (space.indexOf(value.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  var nameWrong = document.createElement("p");
  nameWrong.innerHTML = "Invalid name.";
  nameWrong.classList.add("redP");

  var nameRequired = document.createElement("p");
  nameRequired.innerHTML = "Required name.";
  nameRequired.classList.add("redP");

  var surnameWrong = document.createElement("p");
  surnameWrong.innerHTML = "Invalid surname.";
  surnameWrong.classList.add("redP");

  var surnameRequired = document.createElement("p");
  surnameRequired.innerHTML = "Required surname.";
  surnameRequired.classList.add("redP");

  var dniWrong = document.createElement("p");
  dniWrong.innerHTML = "Invalid DNI.";
  dniWrong.classList.add("redP");

  var dniRequired = document.createElement("p");
  dniRequired.innerHTML = "Required DNI.";
  dniRequired.classList.add("redP");

  var birthdayRequired = document.createElement("p");
  birthdayRequired.innerHTML = "Required birthday.";
  birthdayRequired.classList.add("redP");

  var phoneWrong = document.createElement("P");
  phoneWrong.innerHTML = "Invalid phone.";
  phoneWrong.classList.add("redP");

  var phoneRequired = document.createElement("p");
  phoneRequired.innerHTML = "Required phone.";
  phoneRequired.classList.add("redP");

  var addressWrong = document.createElement("p");
  addressWrong.innerHTML = "Invalid address.";
  addressWrong.classList.add("redP");

  var addressRequired = document.createElement("p");
  addressRequired.innerHTML = "Required address.";
  addressRequired.classList.add("redP");

  var locationWrong = document.createElement("p");
  locationWrong.innerHTML = "Invalid location.";
  locationWrong.classList.add("redP");

  var locationRequired = document.createElement("p");
  locationRequired.innerHTML = "Required location.";
  locationRequired.classList.add("redP");

  var postalCodeWrong = document.createElement("p");
  postalCodeWrong.innerHTML = "Invalid postal code.";
  postalCodeWrong.classList.add("redP");

  var postalCodeRequired = document.createElement("p");
  postalCodeRequired.innerHTML = "Required postal code.";
  postalCodeRequired.classList.add("redP");

  var emailWrongRegex = document.createElement("p");
  emailWrongRegex.innerHTML = "Invalid email.";
  emailWrongRegex.classList.add("redP");

  var emailRequired = document.createElement("p");
  emailRequired.innerHTML = "Required email.";
  emailRequired.classList.add("redP");

  var passwordWrong = document.createElement("p");
  passwordWrong.innerHTML = "Invalid password.";
  passwordWrong.classList.add("redP");

  var passwordRequired = document.createElement("p");
  passwordRequired.innerHTML = "Required password.";
  passwordRequired.classList.add("redP");

  var passwordRepeatRequired = document.createElement("p");
  passwordRepeatRequired.innerHTML = "Required password.";
  passwordRepeatRequired.classList.add("redP");

  nameValidation.onblur = function () {
    if (
      nameValidation.value.length > 3 &&
      hasNumber(nameValidation.value) == false
    ) {
      nameValidation.classList.add("green-border");
    } else if (
      hasNumber(nameValidation.value) == true ||
      (nameValidation.value.length > 0 && nameValidation.value.length <= 3)
    ) {
      nameValidation.classList.add("red-border");
      nameValidation.setAttribute("required", "");
      nameValidation.parentElement.appendChild(nameWrong);
    } else {
      nameValidation.classList.add("red-border");
      nameValidation.setAttribute("required", "");
      nameValidation.parentElement.appendChild(nameRequired);
    }
  };

  nameValidation.onfocus = function () {
    nameValidation.classList.remove("green-border", "red-border");
    nameValidation.replaceChildren(nameRequired, nameWrong);
  };

  surnameValidation.onblur = function () {
    if (
      surnameValidation.value.length > 3 &&
      hasNumber(surnameValidation.value) == false
    ) {
      surnameValidation.classList.add("green-border");
    } else if (
      hasNumber(surnameValidation.value) == true ||
      (surnameValidation.value.length > 0 &&
        surnameValidation.value.length <= 3)
    ) {
      surnameValidation.classList.add("red-border");
      surnameValidation.setAttribute("required", "");
      surnameValidation.parentElement.appendChild(surnameWrong);
    } else {
      surnameValidation.classList.add("red-border");
      surnameValidation.setAttribute("required", "");
      surnameValidation.parentElement.appendChild(surnameRequired);
    }
  };

  surnameValidation.onfocus = function () {
    surnameValidation.classList.remove("green-border", "red-border");
    surnameValidation.replaceChildren(surnameRequired, surnameWrong);
  };

  dniValidation.onblur = function () {
    if (
      dniValidation.value.length > 7 &&
      hasLetter(dniValidation.value) == false
    ) {
      dniValidation.classList.add("green-border");
    } else if (
      (dniValidation.value.length > 0 && dniValidation.value.length < 7) ||
      hasLetter(dniValidation.value) == true
    ) {
      dniValidation.classList.add("red-border");
      dniValidation.setAttribute("required", "");
      dniValidation.parentElement.appendChild(dniWrong);
    } else {
      dniValidation.classList.add("red-border");
      dniValidation.setAttribute("required", "");
      dniValidation.parentElement.appendChild(dniRequired);
    }
  };

  dniValidation.onfocus = function () {
    dniValidation.classList.remove("green-border", "red-border");
    dniValidation.replaceChildren(dniRequired, dniWrong);
  };

  birthdayValidation.onblur = function () {
    if (birthdayValidation.value.length > 0) {
      birthdayValidation.classList.add("green-border");
    } else {
      birthdayValidation.classList.add("red-border");
      birthdayValidation.setAttribute("required", "");
      birthdayValidation.parentElement.appendChild(birthdayRequired);
    }
  };

  birthdayValidation.onfocus = function () {
    birthdayValidation.classList.remove("green-border", "red-border");
    birthdayValidation.replaceChildren(birthdayRequired);
  };

  phoneValidation.onblur = function () {
    if (
      phoneValidation.value.length == 10 &&
      hasLetter(phoneValidation.value) == false
    ) {
      phoneValidation.classList.add("green-border");
    } else if (
      (phoneValidation.value.length > 0 &&
        phoneValidation.value.length < 10 &&
        phoneValidation.value.length > 10) ||
      hasLetter(phoneValidation.value) == true
    ) {
      phoneValidation.classList.add("red-border");
      phoneValidation.setAttribute("required", "");
      phoneValidation.parentElement.appendChild(phoneWrong);
    } else {
      phoneValidation.classList.add("red-border");
      phoneValidation.setAttribute("required", "");
      phoneValidation.parentElement.appendChild(phoneRequired);
    }
  };

  phoneValidation.onfocus = function () {
    phoneValidation.classList.remove("green-border", "red-border");
    phoneValidation.replaceChildren(phoneRequired, phoneWrong);
  };

  addressValidation.onblur = function () {
    if (
      addressValidation.value.length >= 5 &&
      hasLetter(addressValidation.value) == true &&
      hasNumber(addressValidation.value) == true &&
      blankSpace(addressValidation.value) == true
    ) {
      addressValidation.classList.add("green-border");
    } else if (
      addressValidation.value.length > 0 &&
      addressValidation.value.length < 5 &&
      (hasLetter(addressValidation.value) == false ||
        hasNumber(addressValidation.value) == false ||
        blankSpace(addressValidation.value) == false)
    ) {
      addressValidation.classList.add("red-border");
      addressValidation.setAttribute("required", "");
      addressValidation.parentElement.appendChild(addressWrong);
    } else {
      addressValidation.classList.add("red-border");
      addressValidation.setAttribute("required", "");
      addressValidation.parentElement.appendChild(addressRequired);
    }
  };

  addressValidation.onfocus = function () {
    addressValidation.classList.remove("green-border", "red-border");
    addressValidation.replaceChildren(addressRequired, addressWrong);
  };

  locationValidation.onblur = function () {
    if (locationValidation.value.length > 3) {
      locationValidation.classList.add("green-border");
    } else if (
      locationValidation.value.length > 0 &&
      locationValidation.value.length <= 3
    ) {
      locationValidation.classList.add("red-border");
      locationValidation.setAttribute("required", "");
      locationValidation.parentElement.appendChild(locationWrong);
    } else {
      locationValidation.classList.add("red-border");
      locationValidation.setAttribute("required", "");
      locationValidation.parentElement.appendChild(locationRequired);
    }
  };

  locationValidation.onfocus = function () {
    locationValidation.classList.remove("green-border", "red-border");
    locationValidation.replaceChildren(locationRequired);
  };

  postalCodeValidation.onblur = function () {
    if (
      postalCodeValidation.value.length >= 4 &&
      postalCodeValidation.value.length <= 5 &&
      hasLetter(postalCodeValidation.value) == false
    ) {
      postalCodeValidation.classList.add("green-border");
    } else if (
      (postalCodeValidation.value.length > 0 &&
        postalCodeValidation.value.length < 4) ||
      postalCodeValidation.value.length > 5 ||
      hasLetter(postalCodeValidation.value) == true
    ) {
      postalCodeValidation.classList.add("red-border");
      postalCodeValidation.setAttribute("required", "");
      postalCodeValidation.parentElement.appendChild(postalCodeWrong);
    } else {
      postalCodeValidation.classList.add("red-border");
      postalCodeValidation.setAttribute("required", "");
      postalCodeValidation.parentElement.appendChild(postalCodeRequired);
    }
  };

  postalCodeValidation.onfocus = function () {
    postalCodeValidation.classList.remove("green-border", "red-border");
    postalCodeValidation.replaceChildren(postalCodeRequired, postalCodeWrong);
  };

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
      emailValidation.parentElement.appendChild(emailRequired);
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
      passwordValidation.value.length < 8 &&
      (hasLetter(passwordValidation.value) == false ||
        hasNumber(passwordValidation.value) == false)
    ) {
      passwordValidation.classList.add("red-border");
      passwordValidation.setAttribute("required", "");
      passwordValidation.parentElement.appendChild(passwordWrong);
    } else {
      passwordValidation.classList.add("red-border");
      passwordValidation.setAttribute("required", "");
      passwordValidation.parentElement.appendChild(passwordRequired);
    }
  };

  passwordValidation.onfocus = function () {
    passwordValidation.classList.remove("green-border", "red-border");
    passwordValidation.replaceChildren(passwordRequired, passwordWrong);
  };

  repeatPasswordValidation.onblur = function () {
    if (
      repeatPasswordValidation.value.length >= 8 &&
      hasLetter(repeatPasswordValidation.value) == true &&
      hasNumber(repeatPasswordValidation.value) == true
    ) {
      repeatPasswordValidation.classList.add("green-border");
    } else if (
      repeatPasswordValidation.value.length > 0 &&
      repeatPasswordValidation.value.length < 8 &&
      (hasLetter(repeatPasswordValidation.value) == false ||
        hasNumber(repeatPasswordValidation.value) == false)
    ) {
      repeatPasswordValidation.classList.add("red-border");
      repeatPasswordValidation.setAttribute("required", "");
      repeatPasswordValidation.parentElement.appendChild(passwordWrong);
    } else {
      repeatPasswordValidation.classList.add("red-border");
      repeatPasswordValidation.setAttribute("required", "");
      repeatPasswordValidation.parentElement.appendChild(
        passwordRepeatRequired
      );
    }
  };

  repeatPasswordValidation.onfocus = function () {
    repeatPasswordValidation.classList.remove("green-border", "red-border");
    repeatPasswordValidation.replaceChildren(
      passwordWrong,
      passwordRepeatRequired
    );
  };

  function addError(input) {
    input.classList.add("red-border");
    input.setAttribute("required", "");
  }

  function addErrorName() {
    if (nameValidation.value === "") {
      addError(nameValidation);
      nameValidation.parentElement.appendChild(nameRequired);
    }
  }

  function addErrorSurname() {
    if (surnameValidation.value === "") {
      addError(surnameValidation);
      surnameValidation.parentElement.appendChild(surnameRequired);
    }
  }

  function addErrorDni() {
    if (dniValidation.value === "") {
      addError(dniValidation);
      dniValidation.parentElement.appendChild(dniRequired);
    }
  }

  function addErrorBirth() {
    if (birthdayValidation.value === "") {
      addError(birthdayValidation);
      birthdayValidation.parentElement.appendChild(birthdayRequired);
    }
  }

  function addErrorPhone() {
    if (phoneValidation.value === "") {
      addError(phoneValidation);
      phoneValidation.parentElement.appendChild(phoneRequired);
    }
  }

  function addErrorAddress() {
    if (addressValidation.value === "") {
      addError(addressValidation);
      addressValidation.parentElement.appendChild(addressRequired);
    }
  }

  function addErrorLocation() {
    if (locationValidation.value === "") {
      addError(locationValidation);
      locationValidation.parentElement.appendChild(locationRequired);
    }
  }

  function addErrorPostalCode() {
    if (postalCodeValidation.value === "") {
      addError(postalCodeValidation);
      postalCodeValidation.parentElement.appendChild(postalCodeRequired);
    }
  }

  function addErrorEmail() {
    if (emailValidation.value === "") {
      addError(emailValidation);
      emailValidation.parentElement.appendChild(emailRequired);
    }
  }

  function addErrorPassword() {
    if (passwordValidation.value === "") {
      addError(passwordValidation);
      passwordValidation.parentElement.appendChild(passwordRequired);
    }
  }

  function addErrorRepeatP() {
    if (repeatPasswordValidation.value === "") {
      addError(repeatPasswordValidation);
      repeatPasswordValidation.parentElement.appendChild(
        passwordRepeatRequired
      );
    }
  }


  submitButton.onclick = function (e) {
    e.preventDefault();
    if (
      nameValidation.value != "" &&
      surnameValidation.value != "" &&
      dniValidation.value != "" &&
      birthdayValidation.value != "" &&
      phoneValidation.value != "" &&
      addressValidation.value != "" &&
      locationValidation.value != "" &&
      postalCodeValidation.value != "" &&
      emailValidation.value != "" &&
      passwordValidation.value != "" &&
      repeatPasswordValidation.value != ""
    ) {
      alert(
        "Name: " +
          nameValidation.value +
          "\n" +
          "Surname: " +
          surnameValidation.value +
          "\n" +
          "DNi: " +
          dniValidation.value +
          "\n" +
          "Birthday: " +
          birthdayValidation.value +
          "\n" +
          "Phone: " +
          phoneValidation.value +
          "\n" +
          "Address: " +
          addressValidation.value +
          "\n" +
          "Location: " +
          locationValidation.value +
          "\n" +
          "Postal code: " +
          postalCodeValidation.value +
          "\n" +
          "Email: " +
          emailValidation.value +
          "\n" +
          "Password: " +
          passwordValidation.value +
          "\n" +
          "Repeat password: " +
          repeatPasswordValidation.value
      );
    } else {
      addErrorName();
      addErrorSurname();
      addErrorDni();
      addErrorBirth();
      addErrorPhone();
      addErrorAddress();
      addErrorLocation();
      addErrorPostalCode();
      addErrorEmail();
      addErrorPassword();
      addErrorRepeatP();
    }
    var infoForm = {
      name: nameValidation.value,
      surname: surnameValidation.value,
      dni: dniValidation.value,
      birthday: birthdayValidation.value,
      phone: phoneValidation.value,
      address: addressValidation.value,
      location: locationValidation.value,
      postalCode: postalCodeValidation.value,
      email: emailValidation.value,
      password: passwordValidation.value,
      repeatPassword: repeatPasswordValidation.value,
    };

    var dateOk =
      birthdayValidation.value.substring(5, 7) +
      "/" +
      birthdayValidation.value.substring(8) +
      "/" +
      birthdayValidation.value.substring(0, 4);

    fetch(
      "https://basp-m2022-api-rest-server.herokuapp.com/signup/?email=" +
        emailValidation.value +
        "&password=" +
        passwordValidation.value +
        "&name=" +
        nameValidation.value +
        "&lastName=" +
        surnameValidation.value +
        "&dni=" +
        dniValidation.value +
        "&dob=" +
        dateOk +
        "&phone=" +
        phoneValidation.value +
        "&address=" +
        addressValidation.value +
        "&zip=" +
        postalCodeValidation.value +
        "&city=" +
        locationValidation.value
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.success) {
          alert(
            response.msg +
              "\nThe data has been sent\n" +
              JSON.stringify(infoForm, null, 4)
          );
          localStorage.setItem("Name", nameValidation.value),
            localStorage.setItem("Surname", surnameValidation.value),
            localStorage.setItem("DNI", dniValidation.value),
            localStorage.setItem("Birthday", dateOk),
            localStorage.setItem("Phone", phoneValidation.value),
            localStorage.setItem("Address", addressValidation.value),
            localStorage.setItem("Location", locationValidation.value),
            localStorage.setItem("Postal code", postalCodeValidation.value),
            localStorage.setItem("Email", emailValidation.value),
            localStorage.setItem("Password", passwordValidation.value),
            localStorage.setItem(
              "Confirm Password",
              repeatPasswordValidation.value
            );
        } else {
          var er = "" ;
          for (var i = 0; i < response.errors.length; i++) {
            er += response.errors[i].msg + "\n";
          }
          alert(er);
        }
      })
      .catch(function (err) {
        alert(err);
      });
  };
};
