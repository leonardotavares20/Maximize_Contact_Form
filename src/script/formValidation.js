class BaseValidate {
  constructor(selectorId, errorMessage, minLength = 0, inputEmpty) {
    this.inputElement = document.getElementById(selectorId);
    this.errorMessage = errorMessage;
    this.minLength = minLength;
    this.inputEmpty = inputEmpty;
    this.spanError = this.inputElement.nextElementSibling;
  }

  displayErrorMessage() {
    this.spanError.textContent = this.errorMessage;
  }

  displayInputEmpty() {
    this.spanError.textContent = this.inputEmpty;
  }

  displayValidInput() {
    this.spanError.textContent = "";
  }

  isValidPhone(phone) {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  }

  isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
}

class InputValidator extends BaseValidate {
  constructor(selectorId, errorMessage, minLength = 0, inputEmpty) {
    super(selectorId, errorMessage, minLength, inputEmpty);
    this.inputElement.addEventListener("input", this.inputIsValid.bind(this));
  }

  inputIsValid() {
    setTimeout(() => {
      if (this.inputElement.value.trim().length < this.minLength) {
        this.displayErrorMessage();
      } else {
        this.displayValidInput();
      }

      if (this.inputElement.value === "") {
        this.displayInputEmpty();
      }
    }, 1000);
  }
}

class SelectValidator extends BaseValidate {
  constructor(selectorId) {
    super(selectorId, "", 0, "");
    this.inputElement.addEventListener("change", this.inputIsValid.bind(this));
  }

  inputIsValid() {
    if (this.inputElement.selectedIndex !== 0) {
      this.displayValidInput();
    }
  }
}

class CheckHumanValidator extends BaseValidate {
  constructor(selectorId) {
    super(selectorId, "", 0, "");
    this.inputElement.addEventListener("change", this.inputIsValid.bind(this));
  }

  inputIsValid() {
    if (this.inputElement.checked) {
      this.displayValidInput();
    }
  }
}

class NameValidator extends InputValidator {
  constructor(selectorId) {
    super(
      selectorId,
      "Por favor, digite mais de 4 catacteres",
      4,
      "O campo de nome não pode ficar em branco."
    );
  }
}

class EnterpriseValidator extends InputValidator {
  constructor(selectorId) {
    super(
      selectorId,
      "Por favor, digite mais de 6 catacteres",
      6,
      "O campo de empresa não pode ficar em branco."
    );
  }
}

class MessageValidator extends InputValidator {
  constructor(selectorId) {
    super(
      selectorId,
      "Por favor, digite mais de 10 catacteres",
      10,
      "O campo de mensagem não pode ficar em branco."
    );
  }
}

class EmailValidator extends InputValidator {
  constructor(selectorId) {
    super(
      selectorId,
      "Por favor, insira um endereço de e-mail válido.",
      0,
      "O campo de e-mail não pode ficar em branco."
    );
    this.inputElement.addEventListener("input", this.inputIsValid.bind(this));
  }

  inputIsValid() {
    setTimeout(() => {
      const emailValue = this.inputElement.value.trim();
      if (!this.isValidEmail(emailValue)) {
        this.displayErrorMessage();
      } else if (emailValue === "") {
        this.displayInputEmpty();
      } else {
        this.displayValidInput();
      }
    }, 1000);
  }
}

class PhoneValidator extends InputValidator {
  constructor(selectorId) {
    super(
      selectorId,
      "Por favor, insira somente números.",
      10,
      "O campo de telefone não pode ficar em branco."
    );
  }

  inputIsValid() {
    setTimeout(() => {
      const phoneValue = this.inputElement.value.trim();

      if (phoneValue === "") {
        this.displayInputEmpty();
      } else if (!this.isValidPhone(phoneValue)) {
        this.displayErrorMessage();
      } else {
        this.displayValidInput();
      }
    }, 1000);
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

const selectValid = new SelectValidator("contactFor");
const nameValid = new NameValidator("name");
const enterpriseValid = new EnterpriseValidator("enterprise");
const messageValidate = new MessageValidator("message");
const emailValid = new EmailValidator("email");
const phoneValidate = new PhoneValidator("phone");
const checkHumanValidate = new CheckHumanValidator("human-verification");
const formValidate = new FormValidator(".form-contact", ".validate-input");
