class InputValidator {
  constructor(selectorId, errorMessage, minLength = 0) {
    this.inputElement = document.getElementById(selectorId);
    this.inputElement.addEventListener("input", this.inputIsValid.bind(this));
    this.errorMessage = errorMessage;
    this.minLength = minLength;
  }

  inputIsValid() {
    const spanError = this.inputElement.nextElementSibling;
    setTimeout(() => {
      if (this.inputElement.value.trim().length < this.minLength) {
        spanError.textContent = this.errorMessage;
      } else {
        spanError.textContent = "";
      }
    }, 1000);
  }
}
class SelectValidator {
  constructor() {
    this.inputElement = document.getElementById("contactFor");
    this.inputElement.addEventListener("change", this.selectIsValid.bind(this));
  }

  selectIsValid() {
    const spanError = this.inputElement.nextElementSibling;
    if (this.inputElement.selectedIndex !== 0) {
      spanError.textContent = "";
    }
  }
}

class EmailValidator extends InputValidator {
  constructor(selectorId) {
    super(selectorId, "Por favor, insira um endereço de e-mail válido.");
  }

  inputIsValid() {
    setTimeout(() => {
      const spanError = this.inputElement.nextElementSibling;
      const emailValue = this.inputElement.value.trim();

      if (emailValue === "") {
        spanError.textContent = "O campo de e-mail não pode ficar em branco.";
      } else if (!this.isValidEmail(emailValue)) {
        spanError.textContent = this.errorMessage;
      } else {
        spanError.textContent = "";
      }
    }, 1000);
  }

  isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
}
class CheckHumanValidator {
  constructor() {
    this.inputElement = document.getElementById("human-verification");
    this.inputElement.addEventListener(
      "change",
      this.checkHumanIsValid.bind(this)
    );
  }

  checkHumanIsValid() {
    const spanError = this.inputElement.nextElementSibling;

    if (this.inputElement.checked) {
      console.log("Checking");
      spanError.textContent = "";
    }
  }
}

class PhoneValidator extends InputValidator {
  constructor(selectorId) {
    super(selectorId, "Por favor, insira somente números.");
  }

  inputIsValid() {
    setTimeout(() => {
      const spanError = this.inputElement.nextElementSibling;
      const phoneValue = this.inputElement.value.trim();

      if (phoneValue === "") {
        spanError.textContent = "O campo de telefone não pode ficar em branco.";
      } else if (!this.isValidInput(phoneValue)) {
        spanError.textContent = this.errorMessage;
      } else {
        spanError.textContent = "";
      }
    }, 1000);
  }

  isValidInput(phone) {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  }
}

class EmptyInputValidator {
  constructor(inputElement) {
    this.inputElement = inputElement;
  }

  validateInputs() {
    if (this.inputElement.nodeName === "SELECT") {
      if (this.inputElement.selectedIndex === 0) {
        const spanError = this.inputElement.nextElementSibling;
        spanError.textContent = "Selecione uma categoria";
        this.inputElement.focus();
        return false;
      } else {
        return true;
      }
    }

    if (this.inputElement.type === "checkbox") {
      if (!this.inputElement.checked) {
        const spanError = this.inputElement.nextElementSibling;
        spanError.textContent = "Marque a caixa de verificação";
        this.inputElement.focus();
        return false;
      } else {
        spanError.textContent = "Marque a caixa de verificação";
        return true;
      }
    }

    if (this.inputElement.value == "") {
      this.inputElement.focus();
      const spanError = this.inputElement.nextElementSibling;
      spanError.textContent = "Por favor preencha este campo";
      return false;
    } else {
      return true;
    }
  }
}

class FormValidator {
  constructor(selectorForm, selectorInputs) {
    this.form = document.querySelector(selectorForm);
    this.inputs = document.querySelectorAll(selectorInputs);

    this.form.addEventListener("submit", this.formIsValid.bind(this));
  }

  formIsValid = (event) => {
    const isValid = Array.from(this.inputs).every((input) => {
      const inputIsValid = new EmptyInputValidator(input);
      return inputIsValid.validateInputs();
    });

    if (!isValid) {
      event.preventDefault();
    }
  };
}

const selectValid = new SelectValidator();
const nameValid = new InputValidator(
  "name",
  "Por favor, digite mais de 4 catacteres",
  4
);
const enterpriseValid = new InputValidator(
  "enterprise",
  "Por favor, digite mais de 5 catacteres",
  5
);
const messageValidate = new InputValidator(
  "message",
  "Por favor, digite mais de 10 catacteres",
  10
);
const emailValid = new EmailValidator("email");
const phoneValidate = new PhoneValidator("phone");
const formValidate = new FormValidator(".form-contact", ".validate-input");
const checkHumanValidate = new CheckHumanValidator();
