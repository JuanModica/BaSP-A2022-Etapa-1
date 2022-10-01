window.onload = function () {
  // Get inputs
  var nameValidation = document.getElementById("name");
  var emailValidation = document.getElementById("email");
  var categoryValidation = document.getElementById("category");
  var textareaValidation = document.getElementById("textarea");
  var submitButton = document.getElementById("submitButton");

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
    var letters = "abcdefghijkmnñlopqrstuvwxyz";
    for (var i = 0; i < string.length; i++) {
      if (letters.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  // Valid has capital letters
  function hasLetter(string) {
    var lettersC = "ABCDEFGHIJKMNÑLOPQRSTUVWXYZ";
    for (var i = 0; i < string.length; i++) {
      if (lettersC.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  // Name invalid and required
  var nameWrong = document.createElement("p");
  nameWrong.innerHTML = "Invalid name.";
  nameWrong.classList.add("redP");

  var nameRequired = document.createElement("p");
  nameRequired.innerHTML = "Required name.";
  nameRequired.classList.add("redP");

  // Email invalido and required
  var emailWrongRegex = document.createElement("p");
  emailWrongRegex.innerHTML = "Invalid email.";
  emailWrongRegex.classList.add("redP");

  var emailRequired = document.createElement("p");
  emailRequired.innerHTML = "Required email.";
  emailRequired.classList.add("redP");

  // Category invalido and required
  var categoryRequired = document.createElement("p");
  categoryRequired.innerHTML = "Required category.";
  categoryRequired.classList.add("redP");

  // Textarea invalido and required
  var textareaRequired = document.createElement("p");
  textareaRequired.innerHTML = "Required text.";
  textareaRequired.classList.add("redP");

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

  categoryValidation.onblur = function () {
    if (
      categoryValidation.value > 0
    ) {
      categoryValidation.classList.add("green-border");
    } else {
      categoryValidation.classList.add("red-border");
      categoryValidation.setAttribute("required", "");
      categoryValidation.parentElement.appendChild(categoryRequired);
    }
  };

  categoryValidation.onfocus = function () {
    categoryValidation.classList.remove("green-border", "red-border");
    emailValidation.replaceChildren(categoryRequired, " ");
  };

  textareaValidation.onblur = function () {
    if (
      textareaValidation.value.length > 3
    ) {
      textareaValidation.classList.add("green-border");
    } else {
      textareaValidation.classList.add("red-border");
      textareaValidation.setAttribute("required", "");
      textareaValidation.parentElement.appendChild(textareaRequired);
    }
  };

  textareaValidation.onfocus = function () {
    textareaValidation.classList.remove("green-border", "red-border");
    textareaValidation.replaceChildren(textareaRequired, " ");
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

  function addErrorEmail() {
    if (emailValidation.value === "") {
      addError(emailValidation);
      emailValidation.parentElement.appendChild(emailRequired);
    }
  }

  function addErrorCategory() {
    if (categoryValidation.value === "") {
      addError(categoryValidation);
      categoryValidation.parentElement.appendChild(categoryRequired);
    }
  }

  function addErrorTextarea() {
    if (textareaValidation.value === "") {
      addError(textareaValidation);
      textareaValidation.parentElement.appendChild(textareaRequired);
    }
  }

  submitButton.onclick = function (e) {
    e.preventDefault();
    if(nameValidation.value != "" &&
    emailValidation.value != "" &&
    categoryValidation.value != "" &&
    textareaValidation.value != "") {
      alert("Name: " + nameValidation.value + "\n" +
      "Email: " + emailValidation.value + "\n" +
      "Category: " + categoryValidation.value + "\n" +
      "Textarea: " + textareaValidation.value + "\n"
      );
    } else {
      addErrorName();
      addErrorEmail();
      addErrorCategory();
      addErrorTextarea();
      alert("Invalid fields.");
    }
  };
};
